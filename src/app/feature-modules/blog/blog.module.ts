import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './components/containers/blog.component'
import { DisplayComponent } from './components/views/display/display.component';
import { HeroComponent } from './components/views/hero/hero.component';
import { SharedModule } from '@shared/shared.module';
import { PostTemplateComponent } from '@shared/components/templates/post/post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BlogComponent,
    HeroComponent,
    DisplayComponent
  ],
  imports: [
    SharedModule,
    PostTemplateComponent,
    BlogRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BlogModule { }
