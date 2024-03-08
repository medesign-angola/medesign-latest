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

    getWorksByCategories(categorySlug: string, subCategorySlug?: string): Observable<IWork[]> {
        let _filteredWorks: BehaviorSubject<IWork[]> = new BehaviorSubject<IWork[]> ([]);

        this.getApiFetchedWorks().subscribe((actualWorks: IWork[]) => {
           let filteredByCategorySlug = actualWorks.filter((work: IWork) => {
                let workArea = work.areas.find((workByArea) => workByArea.slug === categorySlug);
                if(workArea){

                    if(subCategorySlug){
                        let areaChildren = workArea.areaChildrens?.find((children) => children.slug === subCategorySlug);
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

            _filteredWorks.next(filteredByCategorySlug);

        });

        return _filteredWorks;
    }

    getWorkByClientNameSlug(clientNameSlug: string): Observable<IWork[]>{
        let _filteredWorks: BehaviorSubject<IWork[]> = new BehaviorSubject<IWork[]>([]);
        this.getApiFetchedWorks().subscribe({
            next: (actualWorks: IWork[]) => {
                let filteredByNameSlug: IWork[] = [];
                filteredByNameSlug = actualWorks.filter((work: IWork) => work.clientNameSlug === clientNameSlug);
                
                _filteredWorks.next(filteredByNameSlug);
            }
        });
        return _filteredWorks;
    }
    
}