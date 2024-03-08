import { Injectable } from "@angular/core";
import { IWork } from "@core/interfaces/work.interface";

@Injectable({
    providedIn: 'root'
})
export class TransformationHandler{

    public handleWorksTransformation(data: any[]): IWork[]{

        if(Array.isArray(data)){

            let handled: IWork[] = [];

            // data.forEach((element: any) => {
            //     handled.push({
            //         id: element.id,
            //         clientName: element
            //     });
            // });

            return [];
        }

        return [];
    }

}