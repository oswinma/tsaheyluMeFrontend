import { LoginZoneComponent } from './pages/login-zone/login-zone.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: LoginZoneComponent,
  },
  // {
  //   path: '',
  //   redirectTo: '/login',
  //   pathMatch: 'full',
  // },
  // {
  //   path: '',
  //   children: [
  //     {
  //       path: 'login',
  //       component: LoginZoneComponent
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
