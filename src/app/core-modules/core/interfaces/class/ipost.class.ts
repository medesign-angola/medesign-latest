import { Observable } from "rxjs";
import { IPost } from "../post.interface";

export interface IPostClass{

    getPosts(limit?: number): Observable<IPost[]>;
    postsByCategoryId(categoryId: number): Observable<IPost[]>;

}