import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactCreateLabelComponent } from './contact-create-label.component';

const routes: Routes = [{ path: '', component: ContactCreateLabelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactCreateLabelRoutingModule { }
