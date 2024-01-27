import { Injectable, inject } from "@angular/core";
import { ApiService } from "@core/api/api.service";
import { IWorkClass } from "@core/interfaces/class/iwork.class";
import { IWork } from "@core/interfaces/work.interface";
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class WorkFacade implements IWorkClass{
   
    private apiService: ApiService = inject(ApiService);
    protected _works: BehaviorSubject<IWork[]> = new BehaviorSubject<IWork[]>([]);

    getWorks(limit?: number): Observable<IWork[]> {
        return this.apiService.getWorks(limit);
    }

    getWorksByArea(area: string): Observable<IWork[]> {
        return of([]);
    }
    
}