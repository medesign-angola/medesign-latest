export const OPTIONAL_INFO_AREAS_REF: { [key: string]: string } = {
    'design-grafico': 'informacoes_opcionais_design_grafico',
    'web-design': 'informacoes_opcionais_web_design',
    'marketing-digital': 'informacoes_opcionais_marketing_digital',
    'app-mobile': 'informacoes_opcionais_app_mobile',
}

export const PREVIEW_IMAGE_AREAS_REF: { [key: string]: { restApiSection: string, restApiSectionAreaIdentifier: string} } = {
    'design-grafico': {
        restApiSection: 'previsualizacao_design_grafico',
        restApiSectionAreaIdentifier: 'imagens_de_previsualizacao_design_grafico'
    },
    'web-design': { 
        restApiSection: 'previsualizacao_web_design',
        restApiSectionAreaIdentifier: 'imagens_de_previsualizacao_web_design'
    },
    'marketing-digital': { 
        restApiSection: 'previsualizacao_marketing_digital',
        restApiSectionAreaIdentifier: 'imagens_de_previsualizacao_marketing_digital'
    },
    'app-mobile': { 
        restApiSection: 'previsualizacao_app_mobile',
        restApiSectionAreaIdentifier: 'imagens_de_previsualizacao_app_mobile'
    },
}