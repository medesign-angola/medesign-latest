import { Component, OnInit } from '@angular/core';
import { PageSectionEnum } from '@core/Enums/page-section.enum';
import { ClientFacade } from '@core/facades/client.facade';
import { PostFacade } from '@core/facades/post.facade';
import { ServiceFacade } from '@core/facades/service.facade';
import { WorkFacade } from '@core/facades/work.facade';
import { IClient } from '@core/interfaces/client.interface';
import { IHomePageClass } from '@core/interfaces/pages/ihome.class';
import { IPost } from '@core/interfaces/post.interface';
import { IService } from '@core/interfaces/service.interface';
import { IWork } from '@core/interfaces/work.interface';
import { LoaderService } from '@core/services/loader/loader.service';
import { MetaTagsService } from '@shared/services/meta/meta-tags.service';
import { ScrollerService } from '@shared/services/scroller/scroller.service';
import { HomeLimitsEnum } from '../../Enums/home.enum';

@Component({
  selector: 'md-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements IHomePageClass, OnInit {
  
  constructor(
    private serviceFacade: ServiceFacade,
    private workFacade: WorkFacade,
    private clientFacade: ClientFacade,
    private postFacade: PostFacade,
    private metaService: MetaTagsService,
    private scrollerService: ScrollerService,
    private loaderService: LoaderService
  ) {
    this.getServices()
    this.getWorks();
    this.getClients();
    this.getPosts();
    
    this.metaService.addMetaTags({
      title: 'Me Design Angola',
      description: 'Oferecer soluções práticas e satisfatórias de Web Design, Web Marketing, Design Gráfico e Brand Management',
      image: 'https://medesign-ao.vercel.app/assets/images/static/coverImage.png',
      // url: 'https://medesign-angola.com',
      url: 'https://medesign-ao.vercel.app'
    });
  }

  services: IService[] = [];
  works: IWork[] = [];
  clients: IClient[] = [];
  posts: IPost[] = [];

  ngOnInit(): void {
    this.scrollerService.initialNavigation();
  }
  
  getServices(): void {
    this.serviceFacade.getServices().subscribe((incoming: IService[]) => this.services = incoming);
  }
  
  getWorks(): void {
    this.loaderService.setLoading(PageSectionEnum.WORKS, true);
    
    this.workFacade.getWorks(HomeLimitsEnum.WORKS, undefined, 'appearOnHomePage', true).subscribe({
      next: (incoming: IWork[]) => {
        this.works = incoming
        if(this.works.length > 0){
          this.loaderService.setLoading(PageSectionEnum.WORKS, false)

        }else{
          this.loaderService.loadingActionAfterTryFetching(PageSectionEnum.WORKS);
        }
      }
    });

  }

  getClients(): void {
    this.clientFacade.getClients().subscribe((incoming: IClient[]) => this.clients = incoming);
  }

  getPosts(): void {
    this.loaderService.setLoading(PageSectionEnum.BLOG, true);
    this.postFacade.getLimitedPosts(PageSectionEnum.HOME, HomeLimitsEnum.POSTS).subscribe({
      next: (incoming: IPost[]) => {
        this.posts = incoming
        if(this.posts.length > 0){
          this.loaderService.setLoading(PageSectionEnum.BLOG, false);

        }else{
          this.loaderService.loadingActionAfterTryFetching(PageSectionEnum.BLOG);
        }
      }
    })
  }

}
