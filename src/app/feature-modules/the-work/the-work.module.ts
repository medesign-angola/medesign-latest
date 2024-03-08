import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TheWorkRoutingModule } from './the-work-routing.module';
import { TheWorkComponent } from './components/containers/the-work.component';
import { HeroComponent } from './components/views/hero/hero.component';
import { DetailsComponent } from './components/views/details/details.component';
import { PreviewComponent } from './components/views/preview/preview.component';
import { PreviewLayoutComponent } from './components/views/preview/preview-layout/preview-layout.component';


@NgModule({
  declarations: [
    TheWorkComponent,
    HeroComponent,
    DetailsComponent,
    PreviewComponent,
    PreviewLayoutComponent
  ],
  imports: [
    CommonModule,
    TheWorkRoutingModule
  ]
})
export class TheWorkModule { }
