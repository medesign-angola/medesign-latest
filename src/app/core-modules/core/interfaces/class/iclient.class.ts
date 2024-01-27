import { Observable } from "rxjs";
import { IClient } from "../client.interface";

export interface IClientClass{

    getClients(): Observable<IClient[]>;

}