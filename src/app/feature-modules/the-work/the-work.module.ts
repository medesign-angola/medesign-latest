import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TheWorkRoutingModule } from './the-work-routing.module';
import { TheWorkComponent } from './the-work.component';


@NgModule({
  declarations: [
    TheWorkComponent
  ],
  imports: [
    CommonModule,
    TheWorkRoutingModule
  ]
})
export class TheWorkModule { }
