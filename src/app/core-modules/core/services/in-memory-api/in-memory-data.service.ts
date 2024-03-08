import { Injectable } from "@angular/core";
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
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

    createDb(){

        const workCategories: ICategory[] = WORK_CATEGORIES;
        const postCategories: ICategory[] = POST_CATEGORIES;
        const services: IService[] = SERVICES;
        const works: IWork[] = WORKS;
        const clients: IClient[] = CLIENTS;
        const posts: IPost[] = POSTS;

        return {
            workCategories,
            postCategories,
            services,
            works,
            clients,
            posts
        }

    }

}