import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { ICategory } from "@core/interfaces/categories.interface";
import { IClient } from "@core/interfaces/client.interface";
import { IPost } from "@core/interfaces/post.interface";
import { IService } from "@core/interfaces/service.interface";
import { IWork } from "@core/interfaces/work.interface";
import { POST_CATEGORIES, WORK_CATEGORIES } from "@core/mock/categories.mock";
import { CLIENTS } from "@core/mock/clients.mock";
import { POSTS } from "@core/mock/posts.mock";
import { SERVICES } from "@core/mock/services.mock";
import { WORKS } from "@core/mock/works.mock";
import { Observable, delay, map, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ApiService{

    // private http: HttpClient = inject(HttpClient);

    getServices(): Observable<IService[]>{
        return of(SERVICES).pipe(
            delay(3000)
        );
    }

    getWorkCategories(): Observable<ICategory[]>{
        
        let workCategories: ICategory[] = [];
        workCategories.push({
            id: 4200,
            name: 'Todas',
            slug: 'all',
            isActive: false
        });

        return of(WORK_CATEGORIES).pipe(

            map((incomingCategories: ICategory[]) => {
                incomingCategories.forEach((category: ICategory) => {
                    workCategories.push(category);
                });
                return workCategories;
            }),
            
            delay(1000)

        );
    }

    getWorks(): Observable<IWork[]>{
        return of(WORKS).pipe(
            delay(3000)
        );
    }

    getClients(): Observable<IClient[]>{
        return of(CLIENTS).pipe(
            delay(3000)
        );
    }

    getPostCategories(): Observable<ICategory[]>{
        return of(POST_CATEGORIES).pipe(
            delay(1000)
        );
    }

    getPosts(): Observable<IPost[]>{
        return of(POSTS).pipe(
            delay(3000)
        );
    }

}