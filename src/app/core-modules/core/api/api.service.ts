import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { SPECIAL_CATEGORY } from "@core/constants/category.const";
import { ICategory } from "@core/interfaces/categories.interface";
import { IClient } from "@core/interfaces/client.interface";
import { IPost } from "@core/interfaces/post.interface";
import { IService } from "@core/interfaces/service.interface";
import { IWork } from "@core/interfaces/work.interface";
import { TransformationHandler } from "@core/services/data/transformer.service";
import { Observable, delay, map, of, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ApiService{

    private http: HttpClient = inject(HttpClient);
    private transformer: TransformationHandler = inject(TransformationHandler);

    getServices(): Observable<IService[]>{
        return this.http.get<IService[]>('/api/services').pipe(
            delay(3000)
        );
    }

    getWorkCategories(): Observable<ICategory[]>{
        
        let workCategories: ICategory[] = [];
        workCategories.push(SPECIAL_CATEGORY);

        return this.http.get<ICategory[]>('api/workCategories').pipe(
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
            
            delay(1500)

        );
    }

    getWorks(): Observable<IWork[]>{
        return this.http.get<IWork[]>('api/works').pipe(
            // map((incomingWorks: any[]) => {
            //     return this.transformer.handleWorksTransformation(incomingWorks);
            // }),
            delay(3000)
        );
    }

    getClients(): Observable<IClient[]>{
        return this.http.get<IClient[]>('api/clients').pipe(
            delay(3000)
        );
    }

    getPostCategories(): Observable<ICategory[]>{
        // return this.http.get<ICategory[]>('api/postCategories').pipe(
        //     delay(1000)
        // );
        let postCategories: ICategory[] = [];
        postCategories.push(SPECIAL_CATEGORY);

        return this.http.get<ICategory[]>('api/postCategories').pipe(
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
            
            delay(1500)

        );
    }

    getPosts(): Observable<IPost[]>{
        return this.http.get<IPost[]>('api/posts').pipe(
            delay(3000)
        );
    }

}