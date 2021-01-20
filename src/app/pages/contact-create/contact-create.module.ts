import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactCreateRoutingModule } from './contact-create-routing.module';
import { ContactCreateComponent } from './contact-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactCreateComponent],
  imports: [CommonModule, ContactCreateRoutingModule, ReactiveFormsModule],
})
export class ContactCreateModule {}
