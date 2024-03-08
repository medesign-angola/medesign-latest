import { Injectable } from "@angular/core";
import { ILoaderContainer } from "@core/interfaces/features/loader.interface";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoaderHandler{
    
    private $isLoading: ILoaderContainer = {
        'serivces': new BehaviorSubject<boolean>(true),
        'works': new BehaviorSubject<boolean>(true),
        'work': new BehaviorSubject<boolean>(true),
        'clients': new BehaviorSubject<boolean>(true),
        'blog': new BehaviorSubject<boolean>(true),
        'post': new BehaviorSubject<boolean>(true),
    };

    toggleLoading(identifier: string): void{
        if(!this.$isLoading[identifier]){
            this.$isLoading[identifier] = new BehaviorSubject<boolean>(false);
        }
        this.$isLoading[identifier].next(!this.$isLoading[identifier].value);
    }

    setLoading(identifier: string, value: boolean): void{
        this.$isLoading[identifier].next(value);
    }

    getLoading(identifier: string): BehaviorSubject<boolean>{
        return this.$isLoading[identifier];
    }

    getLoaderContainer(): ILoaderContainer{
        return this.$isLoading;
    }

}