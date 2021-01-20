import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'contacts',
      },
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
    ],
  },
  { path: 'contact-create', loadChildren: () => import('./pages/contact-create/contact-create.module').then(m => m.ContactCreateModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
