import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThePostRoutingModule } from './the-post-routing.module';
import { ThePostComponent } from './components/containers/the-post.component';
import { HeroComponent } from './components/views/hero/hero.component';
import { ContentComponent } from './components/views/content/content.component';
import { SubscriptionComponent } from './components/views/subscription/subscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ThePostComponent,
    HeroComponent,
    ContentComponent,
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ThePostRoutingModule
  ]
})
export class ThePostModule { }
