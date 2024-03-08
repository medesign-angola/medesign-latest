interface IWorkAreaOptionalInfo{
    name: string,
    value: string
}
interface IWorkSubArea{
    id: number,
    name: string,
    slug: string
}

interface IPreviewImages{
    imagePath: string
}

export interface IWorkAreaPreview{
    id: number,
    layout: 'graphic-design'      |
            'web-design'          |
            'marketing-digital'   |
            'app-mobile',
    images: IPreviewImages[]
}

interface IWorkArea{
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
    areas: IWorkArea[],
}