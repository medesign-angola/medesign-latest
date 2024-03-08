import { Injectable, signal } from "@angular/core";
import { ILoaderContainer } from "@core/interfaces/features/loader.interface";
import { BehaviorSubject, Observable } from "rxjs";
import { LoaderHandler } from "./handler.service";

@Injectable({
    providedIn: 'root'
})
export class LoaderService{
    
    constructor(
        private loaderHandler: LoaderHandler
    ) {}

    toggleLoading(identifier: string): void{
        this.loaderHandler.toggleLoading(identifier);
    }

    setLoading(identifier: string, value: boolean): void{
        this.loaderHandler.setLoading(identifier, value);
    }

    getLoading(identifier: string): BehaviorSubject<boolean>{
        return this.loaderHandler.getLoading(identifier);
    }

    getLoaderContainer(): ILoaderContainer{
        return this.loaderHandler.getLoaderContainer();
    }

    loadingActionAfterTryFetching(identifier: string, intervalToCheckDataEntry: number = 1, timeOutAfter: number = 4): void{

        let intervalForCheckDataEntry = setInterval(() => {
            
            let timeOutForWaitingSomeChanges = setTimeout(() => {
                clearInterval(intervalForCheckDataEntry);
                this.setLoading(identifier, false)
            }, timeOutAfter * 1000);

        }, intervalToCheckDataEntry)
          
    }

}