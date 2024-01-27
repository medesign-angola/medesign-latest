import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { IClient } from "@core/interfaces/client.interface";
import { IPost } from "@core/interfaces/post.interface";
import { IService } from "@core/interfaces/service.interface";
import { IWork } from "@core/interfaces/work.interface";
import { CLIENTS } from "@core/mock/clients.mock";
import { POSTS } from "@core/mock/posts.mock";
import { SERVICES } from "@core/mock/services.mock";
import { WORKS } from "@core/mock/works.mock";
import { Observable, delay, of } from "rxjs";

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

    getWorks(limit?: number): Observable<IWork[]>{
        return of(WORKS).pipe(
            delay(3000)
        );
    }

    getClients(): Observable<IClient[]>{
        return of(CLIENTS).pipe(
            delay(3000)
        );
    }

    getPosts(): Observable<IPost[]>{
        return of(POSTS).pipe(
            delay(3000)
        );
    }

}