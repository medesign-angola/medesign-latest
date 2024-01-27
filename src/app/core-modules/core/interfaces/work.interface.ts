interface IWorkArea{
    id: string | number,
    name: string
}

export interface IWork{
    id: string | number,
    imagePath: string,
    clientName: string,
    description: string,
    highlightColor: string,
    areas: IWorkArea[],
}