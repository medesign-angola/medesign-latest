import { NgModule } from '@angular/core';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './components/containers/contact-us.component';
import { ContactUsIndexComponent } from './components/views/index/index.component';
import { ContactUsBriefingComponent } from './components/views/briefing/briefing.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactUsComponent,
    ContactUsIndexComponent,
    ContactUsBriefingComponent,
  ],
  imports: [
    SharedModule,
    ContactUsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactUsModule { }
