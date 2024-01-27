import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheWorkComponent } from './the-work.component';

const routes: Routes = [{ path: '', component: TheWorkComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TheWorkRoutingModule { }
