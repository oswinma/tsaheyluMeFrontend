import { UserBasicComponent } from './components/user-basic/user-basic.component';
import { FavurlListComponent } from './components/favurl-list/favurl-list.component';
import { LoginZoneComponent } from './components/login-zone/login-zone.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth/auth-guard.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginZoneComponent,
    canActivate: [AuthGuardGuard],
  },

  {
    path: 'mylist/new',
    component: FavurlListComponent,
    canActivate: [AuthGuardGuard], // 添加针对当前路由的 canActivate 路由守卫
  },
  {
    path: 'mylist/archive',
    component: FavurlListComponent,
    canActivate: [AuthGuardGuard], // 添加针对当前路由的 canActivate 路由守卫
  },
  {
    path: 'mylist/fav',
    component: FavurlListComponent,
    canActivate: [AuthGuardGuard], // 添加针对当前路由的 canActivate 路由守卫
  },
  {
    path: 'basic',
    component: UserBasicComponent,
    canActivate: [AuthGuardGuard], // 添加针对当前路由的 canActivate 路由守卫
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
