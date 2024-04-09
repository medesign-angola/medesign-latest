export interface IPostSubCategory{
    id: string | number,
    name: string,
    slug: string,
}

export interface IPostCategory{
    id: string | number,
    name: string,
    slug: string,
    subcategories: IPostSubCategory[]
}

export interface IPost{
    id: string | number;
    title: string,
    slug: string,
    imagePath: string,
    content: string,
    categories: IPostCategory[],
    viewsCount: number,
    createdAt: string,
    readingTime: string
}