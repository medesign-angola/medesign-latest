import { Injectable } from "@angular/core";
import { OPTIONAL_INFO_AREAS_REF, PREVIEW_IMAGE_AREAS_REF } from "@core/constants/rest-api-areas-ref.const";
import { ICategory } from "@core/interfaces/categories.interface";
import { IClient } from "@core/interfaces/client.interface";
import { IPost, IPostCategory } from "@core/interfaces/post.interface";
import { IService } from "@core/interfaces/service.interface";
import { IPreviewImages, IWork, IWorkArea, IWorkAreaOptionalInfo, IWorkAreaPreview, IWorkSubArea } from "@core/interfaces/work.interface";
import { WORKS } from "@core/mock/works.mock";

@Injectable({
    providedIn: 'root'
})
export class TransformationHandler{

    public handleWorksTransformation(data: any[]): IWork[]{

        let transformedWorks: IWork[] = [];
        data.forEach(element => {

            let workAreas: IWorkArea[] = [];

            // Áreas de Actuação
            if(element.area_de_actuacao && element.area_de_actuacao.length > 0){

                let noParentAreas = element.area_de_actuacao.filter((area: any) => area.parent === 0);
                if(noParentAreas){
                    noParentAreas.forEach((area: any) => {
                        workAreas.push({
                            id: area.id,
                            name: area.name,
                            slug: area.slug,
                            optionalInfo: [],
                            areaChildrens: [],
                            preview: [],
                        });
                    });
                }

                let withParentAreas = element.area_de_actuacao.filter((subarea: any) => subarea.parent !== 0);
                if(withParentAreas){
                    withParentAreas.forEach((subarea: any) => {
                        let theParent = workAreas.find(area => area.id === subarea.parent);
                        if(theParent){
                            theParent.areaChildrens?.push({
                                id: subarea.id,
                                name: subarea.name,
                                slug: subarea.slug
                            });
                        }
                    });
                }


                // Áreas Com Informações Opcionais
                if(element.acf.areas_com_informacoes_opcionais && element.acf.areas_com_informacoes_opcionais.length > 0){
                    let optionalInfoAreas = element.acf.areas_com_informacoes_opcionais;
                    optionalInfoAreas.forEach((infoArea: any) => {
                        let theArea = workAreas.find(area => area.slug === infoArea.value);
                        
                        element.acf[OPTIONAL_INFO_AREAS_REF[infoArea.value]].forEach((info: any) => {
                            theArea?.optionalInfo?.push({
                                name: info.nome,
                                value: info.valor
                            });
                        });

                    })
                }
                
                // Imagens de Previsualização para cada área
                if(element.acf.areas_com_imagens_de_previsualizacao && element.acf.areas_com_imagens_de_previsualizacao.length > 0){
                    let previewImageAreas = element.acf.areas_com_imagens_de_previsualizacao;
                    previewImageAreas.forEach((item: any) => {
                        let previewImages: IPreviewImages[] = [];
                        let imagesFromArea = element.acf[PREVIEW_IMAGE_AREAS_REF[item.value].restApiSection][PREVIEW_IMAGE_AREAS_REF[item.value].restApiSectionAreaIdentifier];
                        let layoutArea = element.acf[PREVIEW_IMAGE_AREAS_REF[item.value].restApiSection].layout;
    
                        imagesFromArea.forEach((image: any) => {
                            previewImages.push({
                                imagePath: image.imagem.url,
                                position: image.posicao ?? undefined
                            });
                        });
                        // console.log(element.slug, layoutArea, previewImages);
    
                        let theWorkArea = workAreas.find((workArea => workArea.slug === item.value));
                        // console.log(item)
                        if(theWorkArea){
                            theWorkArea.preview?.push({
                                layout: layoutArea,
                                images: previewImages
                            });
                        }
                    });
                }

            }
            
            transformedWorks.push({
                id: element.id,
                imagePath: element.acf.imagem_padrao.url,
                coverImagePath: element.acf.imagem_de_destaque,
                clientName: element.title.rendered,
                clientNameSlug: element.slug,
                segment: element.acf.seguimento,
                executionYearRange: element.acf.tempo_de_execucao,
                description: element.acf.descricao,
                highlightColor: element.acf.cor_de_destaque,
                appearOnHomePage: element.acf.mostrar_na_pagina_inicial,
                areas: workAreas,
            });
        });
        return transformedWorks;
    }

    public handleServicesTransformation(data: any[]): IService[]{

        let transformedServices: IService[] = [];

        data.forEach((element: any) => {
            transformedServices.push({
                name: element.nome_do_servico,
                imagePath: element.imagem_de_exibicao,
                highlightColor: element.cor_de_destaque
            });
        });

        return transformedServices;

    }

    public handleClientsTransformation(data: any[]): IClient[]{
        let transformedClients: IClient[] = [];

        data.forEach((element: any) => {
            transformedClients.push({
                id: "",
                name: element.nome_do_cliente,
                imagePath: element.logotipo
            });
        });

        return transformedClients;
    }

    public handleCategoriesTransformation(data: any[]): ICategory[]{
        let transformedCategories: ICategory[] = [];
        
        let noParentCategories = data.filter(ele => ele.parent === 0)
        noParentCategories.forEach(element => {
            transformedCategories.push({
                id: element.id,
                name: element.name,
                slug: element.slug,
                isActive: false,
                childrens: []
            });
        });

        let withParentCategories = data.filter(ele => ele.parent !== 0);
        withParentCategories.forEach(element => {
            let theParent = transformedCategories.find(e => e.id === element.parent);
            if(theParent){
                theParent.childrens.push({
                    id: element.id,
                    name: element.name,
                    slug: element.slug,
                    isActive: false
                })
            }
        });

        return transformedCategories;
    }

    public handlePostsTransformation(data: any[]): IPost[]{
        let transformedPosts: IPost[] = [];

        data.forEach(element => {
            
            let postCategories: IPostCategory[] = [];
            let noParentCategories = element.categories.filter((category: any) => category.parent === 0);
            noParentCategories.forEach((category: any) => {
                postCategories.push({
                    id: category.id,
                    name: category.name,
                    slug: category.slug,
                    subcategories: []
                });
            });

            let withParentCategories = element.categories.filter((childrens: any) => childrens.parent !== 0);
            withParentCategories.forEach((children: any) => {
                let theParent = postCategories.find(parent => parent.id === children.parent);
                if(theParent)
                    theParent.subcategories.push({
                        id: children.id,
                        name: children.name,
                        slug: children.slug
                    });
            });

            transformedPosts.push({
                id: element.id,
                title: element.title.rendered,
                slug: element.slug,
                imagePath: element.images_size_custom.full_image_size,
                content: element.content.rendered,
                categories: postCategories,
                viewsCount: element.views_count,
                createdAt: element.posted_at,
                readingTime: element.acf.tempo_de_leitura
            });
        });

        return transformedPosts;
    }

}