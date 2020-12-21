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
        path: 'contacts/:id',
        loadChildren: () =>
          import('./pages/contact-detail/contact-detail.module').then(
            (m) => m.ContactDetailModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
