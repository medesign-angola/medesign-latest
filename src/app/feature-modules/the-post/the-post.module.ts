import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThePostRoutingModule } from './the-post-routing.module';
import { ThePostComponent } from './the-post.component';


@NgModule({
  declarations: [
    ThePostComponent
  ],
  imports: [
    CommonModule,
    ThePostRoutingModule
  ]
})
export class ThePostModule { }
