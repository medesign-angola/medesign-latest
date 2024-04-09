import { Injectable, inject } from "@angular/core";
import { ApiService } from "@core/api/api.service";
import { ICategory } from "@core/interfaces/categories.interface";
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
    protected _postCategories: BehaviorSubject<ICategory[]> = new BehaviorSubject<ICategory[]>([]);

    constructor() {
        this.setApiFetchPostCategories();
    }

    private setApiFetchPostCategories(): Observable<ICategory[]>{

        if(this._postCategories.getValue().length === 0){
            this.apiService.getPostCategories().subscribe({
                next: (incomingCategories: ICategory[]) => {
                    this._postCategories.next(incomingCategories);
                }
            });
        }
        return this._postCategories;
    }

    
    getPosts(limit?: number): Observable<IPost[]> {
        if(this.posts$.getValue().length === 0)
            this.apiService.getPosts().subscribe({
                next: (incoming: IPost[]) => this.posts$.next(incoming)
            });
        
        return this.posts$;
    }

    getPostCategories(): Observable<ICategory[]>{
        return this._postCategories;
    }

    getApiFetchedPosts(): Observable<IPost[]>{
        if(this.posts$.getValue().length === 0)
            this.apiService.getPosts().subscribe({
                next: (incomingPosts: IPost[]) => {
                    this.posts$.next(incomingPosts);
                }
            });

        return this.posts$;
    }

    getLimitedPosts(pageSection: string, limit: number, page: number = 1, offset: number = 1): Observable<IPost[]>{
        let limitedPosts$: BehaviorSubject<IPost[]> = new BehaviorSubject<IPost[]>([]);
        let limitedPosts: IPost[] = [];

        if(!this.limitedPostsPages$.getValue()[pageSection]){
            this.getApiFetchedPosts().subscribe({
                next: (incoming: IPost[]) => {

                    let dynamicLimit = limit ?? incoming.length;

                    for (let index = 0; index < dynamicLimit; index++) {
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
        }else{
            limitedPosts$.next(this.limitedPostsPages$.getValue()[pageSection]);
        }

        return limitedPosts$;
    }

    getPostsByCategories(categorySlug: string, subCategorySlug?: string): Observable<IPost[]> {
        let _filteredPosts: BehaviorSubject<IPost[]> = new BehaviorSubject<IPost[]> ([]);

        this.getApiFetchedPosts().subscribe((actualPosts: IPost[]) => {
            let filteredByCategorySlug = actualPosts.filter((post: IPost) => {
                    let postCategory = post.categories.find((postByCategory) => postByCategory.slug === categorySlug);
                    if(postCategory){

                        if(subCategorySlug){
                            let areaChildren = postCategory.subcategories?.find((children) => children.slug === subCategorySlug);
                            if(areaChildren){
                                return true;
                            }else{
                                return false;
                            }
                        }

                        return true;
                    }else{
                        return false;
                    }
                });

                _filteredPosts.next(filteredByCategorySlug);

        });

        return _filteredPosts;
    }

    getPostBySlug(slug: string): Observable<IPost[] | null>{
        return this.apiService.getPostBySlug(slug);
    }

}