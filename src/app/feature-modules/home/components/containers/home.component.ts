import { Component, OnInit } from '@angular/core';
import { ClientFacade } from '@core/facades/client.facade';
import { PostFacade } from '@core/facades/post.facade';
import { ServiceFacade } from '@core/facades/service.facade';
import { WorkFacade } from '@core/facades/work.facade';
import { IClient } from '@core/interfaces/client.interface';
import { IHomePageClass } from '@core/interfaces/pages/ihome.class';
import { IPost } from '@core/interfaces/post.interface';
import { IService } from '@core/interfaces/service.interface';
import { IWork } from '@core/interfaces/work.interface';
import { MetaTagsService } from '@shared/services/meta/meta-tags.service';

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
    private metaService: MetaTagsService
  ) {
    this.getServices()
    this.getWorks();
    this.getClients();
    this.getPosts();
    this.metaService.addMetaTags({
      title: 'Me Design Angola',
      description: 'Oferecer soluções práticas e satisfatórias de Web Design, Web Marketing, Design Gráfico e Brand Management',
      image: 'https://medesign-latest.vercel.app/assets/images/static/coverImage.png',
      // url: 'https://medesign-angola.com',
      url: 'https://medesign-latest.vercel.app'
    });
  }

  services: IService[] = [];
  works: IWork[] = [];
  clients: IClient[] = [];
  posts: IPost[] = [];

  ngOnInit(): void { }
  
  getServices(): void {
    this.serviceFacade.getServices().subscribe((incoming: IService[]) => this.services = incoming);
  }
  getWorks(): void {
    this.workFacade.getWorks(4).subscribe((incoming: IWork[]) => this.works = incoming);
  }
  getClients(): void {
    this.clientFacade.getClients().subscribe((incoming: IClient[]) => this.clients = incoming);
  }
  getPosts(): void {
    this.postFacade.getLimitedPosts('home', 4).subscribe((incoming: IPost[]) => this.posts = incoming)
  }

}
