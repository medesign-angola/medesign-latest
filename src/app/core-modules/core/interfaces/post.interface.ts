interface IPostCategory{
    id: string | number,
    name: string,
    slug: string
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