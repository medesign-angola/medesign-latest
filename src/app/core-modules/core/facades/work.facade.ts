import { Injectable, inject } from "@angular/core";
import { ApiService } from "@core/api/api.service";
import { ICategory } from "@core/interfaces/categories.interface";
import { IWorkClass } from "@core/interfaces/class/iwork.class";
import { IWork } from "@core/interfaces/work.interface";
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class WorkFacade implements IWorkClass{
   
    private apiService: ApiService = inject(ApiService);

    protected _works: BehaviorSubject<IWork[]> = new BehaviorSubject<IWork[]>([]);
    protected _workCategories: BehaviorSubject<ICategory[]> = new BehaviorSubject<ICategory[]>([]);

    constructor() {
        this.setApiFetchWorkCategories();
    }

    private getApiFetchedWorks(): Observable<IWork[]>{
        if(this._works.getValue().length === 0){
            this.apiService.getWorks().subscribe({
                next: (incomingWorks: IWork[]) => {
                    this._works.next(incomingWorks);
                }
            });
        }
        return this._works;
    }

    private setApiFetchWorkCategories(): Observable<ICategory[]>{

        if(this._workCategories.getValue().length === 0){
            this.apiService.getWorkCategories().subscribe({
                next: (incomingCategories: ICategory[]) => {
                    this._workCategories.next(incomingCategories);
                }
            });
        }
        return this._workCategories;
    }

    getWorkCategories(): Observable<ICategory[]>{
        return this._workCategories;
    }

    getWorks(limit?: number, offset: number = 0): Observable<IWork[]> {

        if(limit){

            let limited: IWork[] = [];
            this.getApiFetchedWorks().subscribe((allWorks: IWork[]) => {
                for (let index = offset; index < limit; index++) {
                    if(allWorks[index]){
                        limited.push(allWorks[index]);
                    }
                }
            });
            return of(limited);

        }else{
            return this.getApiFetchedWorks();
        }
        
    }

    getWorksByCategories(category: string): Observable<IWork[]> {
        return of([]);
    }
    
}