import { UserBasicComponent } from './pages/user-basic/user-basic.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: UserBasicComponent,
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
export class AdminRoutingModule {}
