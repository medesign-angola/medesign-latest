export interface ICategoryChildren{
    id: number,
    name: string,
    slug: string,
    isActive: boolean,
}

export interface ICategory{
    id: number,
    name: string,
    slug: string,
    isActive: boolean,
    isOpen?: boolean,
    childrens: ICategoryChildren[]
}