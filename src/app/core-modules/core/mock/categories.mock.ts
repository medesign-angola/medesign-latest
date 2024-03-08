import { ICategory } from "@core/interfaces/categories.interface";

export const WORK_CATEGORIES: ICategory[] = [
    {
        id: 20,
        name: 'Design Gráfico',
        slug: 'design-grafico',
        isActive: false,
        childrens: [
            {
                id: 21,
                name: 'Identidade Visual',
                isActive: false,
                slug: 'identidade-visual'
            },
            {
                id: 22,
                name: 'Logotipo',
                isActive: false,
                slug: 'logotipo'
            },
            {
                id: 23,
                name: 'Flyer',
                isActive: false,
                slug: 'flyer'
            }
        ]
    },
    {
        id: 24,
        name: 'Web Design',
        slug: 'web-design',
        isActive: false,
        childrens: [
            {
                id: 25,
                name: 'UI/UX',
                slug: 'ui-ux',
                isActive: false
            },
            {
                id: 26,
                name: 'Website',
                slug: 'website',
                isActive: false
            }
        ]
    },
    {
        id: 27,
        name: 'Marketing Digital',
        slug: 'marketing-digital',
        isActive: false,
        childrens: [
            {
                id: 28,
                name: 'Gestão de Redes Sociais',
                slug: 'gestao-de-redes-sociais',
                isActive: false
            }
        ]
    },
    {
        id: 29,
        name: 'Mobile App',
        slug: 'mobile-app',
        isActive: false,
        childrens: []
    },
];

export const POST_CATEGORIES: ICategory[] = [
    {
        id: 40,
        name: 'Tech & Design',
        slug: 'tech-&-design',
        isActive: false,
        childrens: []
    },
    {
        id: 41,
        name: 'Marketing Digital',
        slug: 'marketing-digital',
        isActive: false,
        childrens: []
    },
    {
        id: 42,
        name: 'Front End',
        slug: 'front-end',
        isActive: false,
        childrens: []
    },
    {
        id: 43,
        name: 'Produtividade',
        slug: 'produtividade',
        isActive: false,
        childrens: []
    },
    {
        id: 44,
        name: 'Back End',
        slug: 'back-end',
        isActive: false,
        childrens: []
    },
    {
        id: 45,
        name: 'Tech',
        slug: 'tech',
        isActive: false,
        childrens: []
    },
];