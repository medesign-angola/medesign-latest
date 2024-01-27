import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThePostComponent } from './the-post.component';

const routes: Routes = [{ path: '', component: ThePostComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThePostRoutingModule { }
