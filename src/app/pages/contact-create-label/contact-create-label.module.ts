import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactCreateLabelRoutingModule } from './contact-create-label-routing.module';
import { ContactCreateLabelComponent } from './contact-create-label.component';


@NgModule({
  declarations: [ContactCreateLabelComponent],
  imports: [
    CommonModule,
    ContactCreateLabelRoutingModule
  ]
})
export class ContactCreateLabelModule { }
