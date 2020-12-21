import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactDetailRoutingModule } from './contact-detail-routing.module';
import { ContactDetailComponent } from './contact-detail.component';


@NgModule({
  declarations: [ContactDetailComponent],
  imports: [
    CommonModule,
    ContactDetailRoutingModule
  ]
})
export class ContactDetailModule { }
