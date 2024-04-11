import { NgModule } from '@angular/core';

import { WorksRoutingModule } from './works-routing.module';
import { WorksComponent } from './components/containers/works.component';
import { HeroComponent } from './components/views/hero/hero.component';
import { DisplayComponent } from './components/views/display/display.component';
import { SharedModule } from '@shared/shared.module';
import { WorkTemplateComponent } from '@shared/components/templates/work/work.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WorksComponent,
    HeroComponent,
    DisplayComponent
  ],
  imports: [
    SharedModule,
    WorkTemplateComponent,
    WorksRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class WorksModule { }
