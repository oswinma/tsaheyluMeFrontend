import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FriendsComponent } from './pages/friends/friends.component';

export const routes: Routes = [
  {
    path: '',
    component: FriendsComponent,
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
export class FriendsRoutingModule {}
