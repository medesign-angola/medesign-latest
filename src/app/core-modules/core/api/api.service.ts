import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { SPECIAL_CATEGORY } from "@core/constants/category.const";
import { POST_WANTED_FIELDS } from "@core/constants/post-fields.const";
import { ICategory } from "@core/interfaces/categories.interface";
import { IClient } from "@core/interfaces/client.interface";
import { IPost } from "@core/interfaces/post.interface";
import { IService } from "@core/interfaces/service.interface";
import { IWork } from "@core/interfaces/work.interface";
import { WORKS } from "@core/mock/works.mock";
import { TransformationHandler } from "@core/services/data/transformer.service";
import { get } from "http";
import { Observable, delay, map, of, tap } from "rxjs";
import { environment } from "src/environments/environment.development";

@Injectable({
    providedIn: 'root'
})

export class ApiService{

    private http: HttpClient = inject(HttpClient);
    private transformer: TransformationHandler = inject(TransformationHandler);

    getServices(): Observable<IService[]>{
        return this.http.get<IService[]>(`${ environment.api }/wp/v2/servicos`)
                        .pipe(
                            map((incoming: any[]) => this.transformer.handleServicesTransformation(incoming)),
                        );
    }

    getWorkCategories(): Observable<ICategory[]>{

        let workCategories: ICategory[] = [];
        workCategories.push(SPECIAL_CATEGORY);

        return this.http.get<ICategory[]>(`${ environment.api }/wp/v2/areas-de-actuacao`).pipe(
            map((incoming: any[]) => this.transformer.handleCategoriesTransformation(incoming)),
            map((incomingCategories: ICategory[]) => {
                incomingCategories.forEach((category: ICategory) => {
                    category.isOpen = false;
                });
                return incomingCategories;
            }),
            map((incomingCategories: ICategory[]) => {
                incomingCategories.forEach((category: ICategory) => {
                    workCategories.push(category);
                });
                return workCategories;
            }),
        );
    }

    getWorks(): Observable<IWork[]>{

        // return of(WORKS);
        return this.http.get<IWork[]>(`${ environment.api }/wp/v2/projectos`).pipe(
            // tap(console.log),
            map((incomingWorks: any[]) => incomingWorks.filter(element => element.area_de_actuacao.length > 0)),
            map((incomingWorksWithActuationArea: any[]) => this.transformer.handleWorksTransformation(incomingWorksWithActuationArea)),
            // tap(console.log)
        );
    }

    subscribe(subscriber: any){
        return this.http.post(`${environment.api}/newsletter/v2/subscribers?client_key=${environment.newsletter.clientKey}&client_secret=${environment.newsletter.clientSecret}`, subscriber);
    }

    getClients(): Observable<IClient[]>{

        return this.http.get<IClient[]>(`${ environment.api }/wp/v2/clientes`)
                        .pipe(
                            map((incoming: any[]) => this.transformer.handleClientsTransformation(incoming)),
                        );
    }

    getPostCategories(): Observable<ICategory[]>{

        let postCategories: ICategory[] = [];
        postCategories.push(SPECIAL_CATEGORY);

        return this.http.get<ICategory[]>(`${ environment.api }/wp/v2/categories?exclude=1`).pipe(
            map((incoming: any[]) => this.transformer.handleCategoriesTransformation(incoming)),
            map((incomingCategories: ICategory[]) => {
                incomingCategories.forEach((category: ICategory) => {
                    category.isOpen = false;
                });
                return incomingCategories;
            }),
            map((incomingCategories: ICategory[]) => {
                incomingCategories.forEach((category: ICategory) => {
                    postCategories.push(category);
                });
                return postCategories;
            }),
        );
    }

    getPosts(current_page: number = 1, per_page: number = 100): Observable<IPost[]>{
        return this.http.get<IPost[]>(`${ environment.api }/wp/v2/posts?page=${ current_page }&per_page=${ per_page }&${ POST_WANTED_FIELDS }`).pipe(
            map((incoming: any[]) => this.transformer.handlePostsTransformation(incoming))
        );
    }

    getPostBySlug(slug: string): Observable<IPost[]>{
        return this.http.get<IPost[]>(`${ environment.api }/wp/v2/posts?slug=${ slug }&${ POST_WANTED_FIELDS }`)
                        .pipe(
                            map((incoming: any[]) => this.transformer.handlePostsTransformation(incoming)),
                            map((incoming: IPost[]) => {
                                this.http.get(`${ environment.api }/post-views-counter/view-post/${ incoming[0].id }/view-post`).subscribe();
                                return incoming;
                            })
                        );
    }

    contactUs(body: any): Observable<any>{
        return this.http.post(environment.contactApiUrl, body);
    }

    searchPostByTerm(searchTerm: string): Observable<IPost[]>{
        return this.http.get<IPost[]>(`${ environment.api }/wp/v2/posts?search=${ searchTerm }&${ POST_WANTED_FIELDS }`).pipe(
            map((incoming: any[]) => this.transformer.handlePostsTransformation(incoming))
        );
    }

}