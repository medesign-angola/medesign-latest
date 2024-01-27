import { Observable } from "rxjs";
import { IWork } from "../work.interface";

export interface IWorkClass{

    getWorks(limit?: number): Observable<IWork[]>;
    getWorksByArea?(area: string): Observable<IWork[]>;

}