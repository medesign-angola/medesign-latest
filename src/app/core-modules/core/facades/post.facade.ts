import { Injectable, inject } from "@angular/core";
import { ApiService } from "@core/api/api.service";
import { IPostClass } from "@core/interfaces/class/ipost.class";
import { IPost } from "@core/interfaces/post.interface";
import { BehaviorSubject, Observable, of } from "rxjs";

type ILimitedPostPages = {
    [page: string]: IPost[];
};

@Injectable({
    providedIn: 'root'
})

export class PostFacade implements IPostClass{

    private apiService: ApiService = inject(ApiService);

    protected posts$: BehaviorSubject<IPost[]> = new BehaviorSubject<IPost[]>([]);
    protected limitedPostsPages$: BehaviorSubject<ILimitedPostPages> = new BehaviorSubject<ILimitedPostPages>({});

    getLimitedPosts(pageSection: string, limit: number, page: number = 1, offset: number = 1): Observable<IPost[]>{
        let limitedPosts$: BehaviorSubject<IPost[]> = new BehaviorSubject<IPost[]>([]);
        let limitedPosts: IPost[] = [];

        if(!this.limitedPostsPages$.getValue()[pageSection]){
            this.apiService.getPosts().subscribe({
                next: (incoming: IPost[]) => {
                    
                    for (let index = 0; index < incoming.length; index++) {
                        if(incoming[index])
                            limitedPosts.push(incoming[index]);
                    }
                    
                    if(pageSection){
                        const updatedLimitedPostsPages = { ...this.limitedPostsPages$.getValue(), [pageSection]: limitedPosts };
                        this.limitedPostsPages$.next(updatedLimitedPostsPages);
                        limitedPosts$.next(this.limitedPostsPages$.getValue()[pageSection]);
                    }
                    
                    return this.limitedPostsPages$;
                }
            });
        }

        return limitedPosts$;
    }

    getPosts(limit?: number): Observable<IPost[]> {
        if(this.posts$.getValue().length === 0)
            this.apiService.getPosts().subscribe({
                next: (incoming: IPost[]) => this.posts$.next(incoming)
            });
        
        return this.posts$;
    }
    
    postsByCategoryId(categoryId: number): Observable<IPost[]> {
        return of([]);
    };

}