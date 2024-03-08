import { IPost } from "@core/interfaces/post.interface";

export const POSTS: IPost[] = [
    {
        id: 1,
        title: 'Chat GPT anuncia nova atualização que permite ligação com IOS',
        slug: 'chat-gpt-anuncia-nova-atualização-que-permite-ligação-com-ios',
        imagePath: 'assets/images/posts/image-1.png',
        categories: [
            { id: 23, name: 'AI & Tech', slug: 'ai-&-tech', subcategories: [] },
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
            { id: 24, name: 'Front-End', slug: 'front-end', subcategories: [] },
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
            { id: 25, name: 'Tech', slug: 'tech', subcategories: [] },
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
            { id: 25, name: 'Tech', slug: 'tech', subcategories: [] },
        ],
        viewsCount: 20,
        content: '',
        createdAt: '10 minutos',
        readingTime: '2 minutos'
    },
    {
        id: 5,
        title: 'A Revolução da Realidade Virtual',
        slug: 'a-revolucao-da-realidade-virtual',
        imagePath: 'assets/images/posts/image-5.jpg',
        categories: [
            { id: 25, name: 'Tech', slug: 'tech', subcategories: [] },
        ],
        viewsCount: 200,
        content: '',
        createdAt: '10 minutos',
        readingTime: '2 minutos'
    },
    {
        id: 6,
        title: 'A Importância da Integração entre Desenvolvimento de Software e Design Gráfico',
        slug: 'a-importancia-da-integracao-entre-desenvolvimento-de-software-e-design-grafico',
        imagePath: 'assets/images/posts/image-6.jpg',
        categories: [
            { id: 25, name: 'Tech', slug: 'tech', subcategories: [] }
        ],
        viewsCount: 300,
        createdAt: '1 hora',
        readingTime: '1 minuto',
        content: `No mundo digital atual, a integração entre desenvolvimento de software e design gráfico é fundamental para o sucesso de qualquer projeto. Enquanto o desenvolvimento de software se concentra na funcionalidade e na eficiência do código, o design gráfico trabalha na estética, usabilidade e experiência do usuário. Quando essas duas áreas se unem, o resultado é uma experiência do usuário completa e satisfatória.
        Os desenvolvedores e designers devem colaborar desde o início do projeto, garantindo que a interface do usuário seja intuitiva, agradável visualmente e reflita a identidade da marca. Além disso, a integração entre essas áreas permite que problemas sejam identificados e resolvidos mais rapidamente, resultando em produtos finais de alta qualidade.
        Portanto, ao desenvolver um software, é essencial considerar o design gráfico como parte integrante do processo. Isso não só melhora a usabilidade e a satisfação do usuário, mas também contribui para o sucesso do produto no mercado competitivo de hoje.`,
    },
    {
        id: 7,
        title: 'Estratégias Eficazes de Marketing Digital para Empresas em Crescimento',
        slug: 'estrategias-eficazes-de-marketing-digital-para-empresas-em-crescimento',
        imagePath: 'assets/images/posts/image-7.webp',
        categories: [
            { id: 25, name: 'Marketing Digital', slug: 'marketing-digital', subcategories: [] }
        ],
        viewsCount: 50,
        createdAt: '30 minutos',
        readingTime: '1 minuto',
        content: `O marketing digital tornou-se uma ferramenta indispensável para empresas em crescimento que desejam alcançar seu público-alvo de maneira eficaz e econômica. No entanto, com tantas estratégias e canais disponíveis, pode ser desafiador para os empreendedores saber por onde começar.
        Uma abordagem eficaz é começar com uma sólida compreensão do público-alvo e definir metas claras de marketing. Isso permite que as empresas escolham as plataformas e táticas mais adequadas para alcançar e engajar seus clientes potenciais.
        Além disso, investir em conteúdo de qualidade, SEO e mídia social pode aumentar significativamente a visibilidade da marca online. A automação de marketing também pode ser uma ferramenta poderosa para economizar tempo e maximizar o impacto das campanhas.
        Em última análise, as empresas em crescimento devem estar dispostas a experimentar e adaptar suas estratégias de marketing digital com base nos resultados e no feedback do público. Com uma abordagem estratégica e orientada por dados, o marketing digital pode impulsionar o crescimento e o sucesso sustentável das empresas.`,
    }
];