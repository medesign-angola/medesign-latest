import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogotypeComponent } from './components/static/logotype/logotype.component';
import { MetaTagsService } from './services/meta/meta-tags.service';
import { WorkTemplateComponent } from './components/templates/work/work.component';
import { PostTemplateComponent } from './components/templates/post/post.component';



@NgModule({
  declarations: [
    LogotypeComponent,
  ],
  imports: [
    CommonModule,
    PostTemplateComponent,
    WorkTemplateComponent,
  ],
  exports: [
    CommonModule,
    LogotypeComponent,
    WorkTemplateComponent,
    PostTemplateComponent
  ],
  providers: [
    MetaTagsService
  ]
})
export class SharedModule { }
