import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/containers/contact-us.component';
import { ContactUsIndexComponent } from './components/views/index/index.component';
import { ContactUsBriefingComponent } from './components/views/briefing/briefing.component';

const routes: Routes = [
  {
    path: '',
    component: ContactUsComponent,
    children: [
      {
        path: '',
        component: ContactUsIndexComponent,
        title: 'Entre em contacto connosco - Me Design Angola'
      },
      {
        path: 'briefing',
        component: ContactUsBriefingComponent,
        title: 'Briefing - Me Design Angola'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactUsRoutingModule { }
