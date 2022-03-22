import { MessagesComponent } from './pages/messages/messages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: MessagesComponent,
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
export class MessagesRoutingModule {}
