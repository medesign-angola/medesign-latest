import { IPost } from "@core/interfaces/post.interface";

export const POSTS: IPost[] = [
    {
        id: 1,
        title: 'Chat GPT anuncia nova atualização que permite ligação com IOS',
        slug: 'chat-gpt-anuncia-nova-atualização-que-permite-ligação-com-ios',
        imagePath: 'assets/images/posts/image-1.png',
        categories: [
            { id: 23, name: 'AI & Tech', slug: 'ai-&-tech' },
        ],
        viewsCount: 122,
        content: '',
        createdAt: '20 minutos',
        readingTime: '2 minutos'
    },
    {
        id: 2,
        title: 'Como fazer carrossel dinâmico com React JS e Flutter',
        slug: 'como-fazer-carrossel-dinamico-com-react-js-e-flutter',
        imagePath: 'assets/images/posts/image-2.png',
        categories: [
            { id: 24, name: 'Front-End', slug: 'front-end' },
        ],
        viewsCount: 525,
        content: '',
        createdAt: '1 hora',
        readingTime: '1 minutos'
    },
    {
        id: 3,
        title: 'Novas atualizações do IOS mostra instabilidade nos canais de segurança',
        slug: 'novas-actualizacoes-do-ios-mostra-instabilidade-nos-canais-de-seguranca',
        imagePath: 'assets/images/posts/image-3.png',
        categories: [
            { id: 25, name: 'Tech', slug: 'tech' },
        ],
        viewsCount: 257,
        content: '',
        createdAt: '50 minutos',
        readingTime: '2 minutos'
    },
    {
        id: 4,
        title: 'NASA apresenta nova forma de navegação espacial em Marte',
        slug: 'nasa-apresenta-nova-forma-de-navegacao-espacial-em-marte',
        imagePath: 'assets/images/posts/image-4.png',
        categories: [
            { id: 25, name: 'Tech', slug: 'tech' },
        ],
        viewsCount: 20,
        content: '',
        createdAt: '10 minutos',
        readingTime: '2 minutos'
    },
    // {
    //     id: 5,
    //     title: 'A Revolução da Realidade Virtual',
    //     slug: 'nasa-apresenta-nova-forma-de-navegacao-espacial-em-marte',
    //     imagePath: 'assets/images/posts/image-4.png',
    //     categories: [
    //         { id: 25, name: 'Tech', slug: 'tech' },
    //     ],
    //     viewsCount: 20,
    //     content: '',
    //     createdAt: '10 minutos',
    //     readingTime: '2 minutos'
    // },
];