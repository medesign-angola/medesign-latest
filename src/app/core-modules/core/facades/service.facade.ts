import { Injectable, inject } from "@angular/core";
import { ApiService } from "@core/api/api.service";
import { IServiceClass } from "@core/interfaces/class/iservice.class";
import { IService } from "@core/interfaces/service.interface";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ServiceFacade implements IServiceClass{

    private apiService: ApiService = inject(ApiService);
    protected _services: BehaviorSubject<IService[]> = new BehaviorSubject<IService[]>([]);

    getServices(): Observable<IService[]> {
        if(this._services.getValue().length == 0)
            this.apiService.getServices().subscribe({
                next: (incoming: IService[]) => {
                    this._services.next(incoming);
                }
            })

        return this._services.asObservable();
    }

}