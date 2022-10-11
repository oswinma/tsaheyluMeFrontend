import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvitationsComponent } from './pages/invitations/invitations.component';

export const routes: Routes = [
  {
    path: '',
    component: InvitationsComponent,
  },
  /* {
      path: '',
      children: [
        {
          path: 'new',
          component: FavurlListComponent
        },
        {
          path: 'archive',
          component: FavurlListComponent
        },
        {
          path: 'fav',
          component: FavurlListComponent
        }
      ]
    } */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvitationsRoutingModule {}
