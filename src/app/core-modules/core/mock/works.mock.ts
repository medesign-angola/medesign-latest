import { IWork } from "@core/interfaces/work.interface";

export const WORKS: IWork[] = [
    {
      id: 1,
      clientName: 'Logos Educa',
      clientNameSlug: 'logos-educa',
      segment: 'Educação',
      executionYearRange: '2021-2022',
      imagePath: 'assets/images/works/logo-educa.png',
      coverImagePath: 'assets/images/works/logo-educa-cover.png',
      description: 'Responsáveis e atenciosos por cada.',
      highlightColor: '#184A8C',
      areas: [
        {
          id: 1,
          name: 'Design Gráfico',
          slug: 'design-grafico',
          preview: [
            {
              id: 123,
              layout: 'graphic-design',
              images: [
                {
                  imagePath: 'assets/images/works/logo-educa-ft-01.png'
                },
                {
                  imagePath: 'assets/images/works/logo-educa-ft-02.png'
                },
                {
                  imagePath: 'assets/images/works/logo-educa-ft-03.png'
                },
                {
                  imagePath: 'assets/images/works/logo-educa-ft-04.png'
                },
              ]
            }
          ],
          areaChildrens: [
            {
              id: 21,
              name: 'Identidade Visual',
              slug: 'identidade-visual'
            },
            {
              id: 23,
              name: 'Flyer',
              slug: 'flyer'
            },
          ] 
        },
        {
          id: 2,
          name: 'Marketing Digital',
          slug: 'marketing-digital',
          optionalInfo: [
            {
              name: 'Link das Redes Sociais',
              value: 'https://link-para-as-redes-sociais.com'
            }
          ],
          areaChildrens: [
            {
              id: 28,
              name: 'Gestão de Redes Sociais',
              slug: 'gestao-de-redes-sociais'
            }
          ] 
        },
      ]
    },
    {
      id: 2,
      clientName: 'Odonto Clinic',
      clientNameSlug: 'odonto-clinic',
      segment: 'Saúde',
      executionYearRange: '2021-2022',
      imagePath: 'assets/images/works/odonto-clinic.png',
      coverImagePath: 'assets/images/works/odonto-clinic-cover.png',
      description: 'Responsáveis e atenciosos por cada.',
      highlightColor: '#387C7E',
      areas: [
        {
          id: 1,
          name: 'Design Gráfico',
          slug: 'design-grafico',
          preview: [
            {
              id: 123,
              layout:  'graphic-design',
              images: [
                {
                  imagePath: 'assets/images/works/odonto-clinic-ft-01.png'
                },
                {
                  imagePath: 'assets/images/works/odonto-clinic-ft-02.png'
                },
                {
                  imagePath: 'assets/images/works/odonto-clinic-ft-03.png'
                },
                {
                  imagePath: 'assets/images/works/odonto-clinic-ft-04.png'
                },
              ]
            }
          ],
          areaChildrens: [
            {
              id: 21,
              name: 'Identidade Visual',
              slug: 'identidade-visual'
            },
            {
              id: 23,
              name: 'Flyer',
              slug: 'flyer'
            },
          ]
        },
        {
          id: 4,
          name: 'Web Design',
          slug: 'web-design',
          preview: [
            {
              id: 144,
              layout:  'web-design',
              images: [
                {
                  imagePath: 'assets/images/works/odonto-clinic-web-ft-01.png'
                },
                {
                  imagePath: 'assets/images/works/odonto-clinic-web-ft-02.png'
                }
              ]
            }
          ],
          optionalInfo: [
            {
              name: 'Link do Website',
              value: 'https://odontoclinic.ao'
            },
            {
              name: 'Link do UI/UX',
              value: 'https://figma.com'
            }
          ],
          areaChildrens: [
            {
              id: 25,
              name: 'UI/UX',
              slug: 'ui-ux'
            },
            {
              id: 26,
              name: 'Website',
              slug: 'website'
            },
          ] 
        }
      ]
    },
    {
      id: 3,
      clientName: 'Mercado Olonjamba',
      clientNameSlug: 'mercado-olanjamba',
      imagePath: 'assets/images/works/mercado.png',
      coverImagePath: 'assets/images/works/mercado.png',
      segment: 'Comércio',
      executionYearRange: '2022-2023',
      description: 'Responsáveis e atenciosos por cada.',
      highlightColor: '#EF3129',
      areas: [
        {
          id: 1,
          name: 'Design Gráfico',
          slug: 'design-grafico',
          areaChildrens: [
            {
              id: 21,
              name: 'Identidade Visual',
              slug: 'identidade-visual'
            },
            {
              id: 23,
              name: 'Flyer',
              slug: 'flyer'
            },
          ] 
        },
        {
          id: 2,
          name: 'Marketing Digital',
          slug: 'marketing-digital',
          areaChildrens: [
            {
              id: 28,
              name: 'Gestão de Redes Sociais',
              slug: 'gestao-de-redes-sociais'
            }
          ] 
        },
      ]
    },
    {
      id: 4,
      clientName: 'Ubuntu',
      clientNameSlug: 'ubuntu',
      imagePath: 'assets/images/works/ubuntu.png',
      coverImagePath: 'assets/images/works/ubuntu.png',
      description: 'Responsáveis e atenciosos por cada.',
      highlightColor: '#77534F',
      areas: [
        {
          id: 1,
          name: 'Design Gráfico',
          slug: 'design-grafico'
        }
      ]
    },
    {
      id: 5,
      clientName: 'Agência HLM',
      clientNameSlug: 'agencia-hml',
      imagePath: 'assets/images/works/hlm.png',
      description: 'Agência de viagens e Turismo',
      highlightColor: '#f02681',
      areas: [
        {
          id: 1,
          name: 'Design Gráfico',
          slug: 'design-grafico',
          areaChildrens: [
            {
              id: 21,
              name: 'Identidade Visual',
              slug: 'identidade-visual'
            },
            {
              id: 23,
              name: 'Flyer',
              slug: 'flyer'
            },
          ]
        }
      ]
    },
    {
      id: 6,
      clientName: 'IPCOM',
      clientNameSlug: 'ipcom',
      imagePath: 'assets/images/works/ipcom.png',
      description: 'Revenda de soluções a nível de gestão comercial baseadas em Cloud e também pontos de venda móveis, com sistemas Android.',
      highlightColor: '#7a0960',
      areas: [
        {
          id: 1,
          name: 'Design Gráfico',
          slug: 'design-grafico',
          areaChildrens: [
            {
              id: 21,
              name: 'Identidade Visual',
              slug: 'identidade-visual'
            },
            {
              id: 23,
              name: 'Flyer',
              slug: 'flyer'
            },
          ] 
        }
      ]
    },
    {
      id: 7,
      clientName: 'Farmácia Bar',
      clientNameSlug: 'farmacia-bar',
      imagePath: 'assets/images/works/farmacia-bar.png',
      description: 'Farmácia Bar, uma jovem iniciativa empreendedora',
      highlightColor: '#b88c2e',
      areas: [
        {
          id: 1,
          name: 'Design Gráfico',
          slug: 'design-grafico',
          areaChildrens: [
            {
              id: 21,
              name: 'Identidade Visual',
              slug: 'identidade-visual'
            }
          ] 
        }
      ]
    },
    {
      id: 8,
      clientName: 'Moco Monte',
      clientNameSlug: 'moco-monte',
      imagePath: 'assets/images/works/moco-monte.png',
      description: 'Tecnologias e Sistemas de Informação',
      highlightColor: '#13409c',
      areas: [
        {
          id: 1,
          name: 'Design Gráfico',
          slug: 'design-grafico',
          areaChildrens: [
            {
              id: 21,
              name: 'Identidade Visual',
              slug: 'identidade-visual'
            },
            {
              id: 23,
              name: 'Flyer',
              slug: 'flyer'
            },
          ] 
        }
      ],
    },
    {
      id: 9,
      clientName: 'Nails Spa',
      clientNameSlug: 'nails-spa',
      imagePath: 'assets/images/works/nail-spa.png',
      description: 'Sector de estética',
      highlightColor: '#8c1279',
      areas: [
        {
          id: 1,
          name: 'Design Gráfico',
          slug: 'design-grafico',
          areaChildrens: [
            {
              id: 21,
              name: 'Identidade Visual',
              slug: 'identidade-visual'
            },
            {
              id: 23,
              name: 'Flyer',
              slug: 'flyer'
            },
          ] 
        }
      ]
    }
];