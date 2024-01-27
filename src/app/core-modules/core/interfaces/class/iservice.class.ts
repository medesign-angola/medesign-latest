import { Observable } from "rxjs";
import { IService } from "../service.interface";

export interface IServiceClass{

    getServices(): Observable<IService[]>;

}