import { Injectable, inject } from "@angular/core";
import { ApiService } from "@core/api/api.service";
import { IClientClass } from "@core/interfaces/class/iclient.class";
import { IClient } from "@core/interfaces/client.interface";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ClientFacade implements IClientClass{

    private apiService: ApiService = inject(ApiService);
    private _clients: BehaviorSubject<IClient[]> = new BehaviorSubject<IClient[]>([]);

    getClients(): Observable<IClient[]> {
        if(this._clients.getValue().length == 0)
            this.apiService.getClients().subscribe({
                next: (incoming: IClient[]) => {
                    this._clients.next(incoming);
                }
            })
            
        return this._clients.asObservable();
    }

}