export interface ICategory{
    id: number,
    name: string,
    slug: string,
    isActive: boolean,
    childrens?: ICategory[]
}