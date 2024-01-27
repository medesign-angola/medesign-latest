import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/containers/home.component';
import { SharedModule } from '@shared/shared.module';
import { HeroComponent } from './components/views/hero/hero.component';
import { ServicesComponent } from './components/views/services/services.component';
import { WorksComponent } from './components/views/works/works.component';
import { ClientsComponent } from './components/views/clients/clients.component';
import { PostsComponent } from './components/views/posts/posts.component';
import { InfoComponent } from './components/views/info/info.component';
import { ServiceTemplateComponent } from './components/views/services/template/template.component';
import { WorkTemplateComponent } from '@shared/components/templates/work/work.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    ServicesComponent,
    WorksComponent,
    ClientsComponent,
    PostsComponent,
    InfoComponent,
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    ServiceTemplateComponent
  ]
})
export class HomeModule { }
