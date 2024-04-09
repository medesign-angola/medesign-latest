export interface IWorkAreaOptionalInfo{
    name: string,
    value: string
}
export interface IWorkSubArea{
    id: number,
    name: string,
    slug: string
}

export interface IPreviewImages{
    imagePath: string,
    position?: 'top' | 'body' | 'bottom'
}

export interface IWorkAreaPreview{
    id?: number,
    layout: 'graphic-design'      |
            'web-design'          |
            'marketing-digital'   |
            'app-mobile',
    images: IPreviewImages[]
}

export interface IWorkArea{
    id: number,
    name: string,
    slug: string,
    preview?: IWorkAreaPreview[],
    optionalInfo?: IWorkAreaOptionalInfo[],
    areaChildrens?: IWorkSubArea[]
}

export interface IWork{
    id: number,
    imagePath: string,
    coverImagePath?: string,
    clientName: string,
    clientNameSlug: string,
    segment?: string,
    executionYearRange?: string,
    description: string,
    highlightColor: string,
    appearOnHomePage: boolean,
    areas: IWorkArea[],
}