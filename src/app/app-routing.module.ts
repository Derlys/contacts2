import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'contacts',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'contacts',
        loadChildren: () =>
          import('./pages/contact-list/contact-list.module').then(
            (m) => m.ContactListModule
          ),
      },
      {
        path: 'contacts/:contactId',
        loadChildren: () =>
          import('./pages/contact-detail/contact-detail.module').then(
            (m) => m.ContactDetailModule
          ),
      },
      {
        path: 'contact-create',
        loadChildren: () =>
          import('./pages/contact-create/contact-create.module').then(
            (m) => m.ContactCreateModule
          ),
      },
    ],
  },
  {
    path: 'contact-create-label',
    loadChildren: () =>
      import('./pages/contact-create-label/contact-create-label.module').then(
        (m) => m.ContactCreateLabelModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
