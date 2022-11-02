import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './core/auth/auth-guard.guard';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('src/app/modules/login/login.module').then((m) => m.LoginModule),
    canActivate: [AuthGuardGuard],
  },
  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [AuthGuardGuard], // Should be replaced with actual auth guard
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          import('src/app/modules/admin/admin.module').then(
            (m) => m.AdminModule
          ),
      },
      {
        path: 'basic',
        loadChildren: () =>
          import('src/app/modules/basic/basic.module').then(
            (m) => m.BasicModule
          ),
      },
      {
        path: 'mylist',
        loadChildren: () =>
          import('src/app/modules/mylist/mylist.module').then(
            (m) => m.MylistModule
          ),
      },
      {
        path: 'friends',
        loadChildren: () =>
          import('src/app/modules/friends/friends.module').then(
            (m) => m.FriendsModule
          ),
      },
      {
        path: 'invitations',
        loadChildren: () =>
          import('src/app/modules/invitations/invitations.module').then(
            (m) => m.InvitationsModule
          ),
      },
      {
        path: 'messages',
        loadChildren: () =>
          import('src/app/modules/messages/messages.module').then(
            (m) => m.MessagesModule
          ),
      },
    ],
  },
  {
    path: 'signup',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./modules/signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: 'forget',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./modules/forget/forget.module').then((m) => m.ForgetModule),
  },
  {
    path: 'verify',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./modules/verify/verify.module').then((m) => m.VerifyModule),
  },
  { path: 'resetPassword', loadChildren: () => import('./modules/reset-password/reset-password.module').then(m => m.ResetPasswordModule) },

  // {
  //   path: 'login',
  //   component: ContentLayoutComponent,
  //   loadChildren: () =>
  //     import('src/app/modules/login/login.module').then((m) => m.LoginModule),
  // },
  // { path: '**', redirectTo: '/login', pathMatch: 'full' }
  // Fallback when no prior routes is matched
  // { path: '**', redirectTo: '/login', pathMatch: 'full' },z

  // { path: '**', redirectTo: '/login', pathMatch: 'full' },
  // {
  //   path: 'login',
  //   loadChildren: () =>
  //     import('src/app/modules/login/login.module').then((m) => m.LoginModule),
  //   // component: LoginZoneComponent,
  //   canActivate: [AuthGuardGuard],
  // },

  // {
  //   path: 'mylist/new',
  //   loadChildren: () =>
  //     import('src/app/modules/mylist/mylist.module').then(
  //       (m) => m.MylistModule
  //     ),
  //   // component: FavurlListComponent,
  //   canActivate: [AuthGuardGuard], // 添加针对当前路由的 canActivate 路由守卫
  // },
  // {
  //   path: 'mylist/archive',
  //   component: FavurlListComponent,
  //   canActivate: [AuthGuardGuard], // 添加针对当前路由的 canActivate 路由守卫
  // },
  // {
  //   path: 'mylist/fav',
  //   component: FavurlListComponent,
  //   canActivate: [AuthGuardGuard], // 添加针对当前路由的 canActivate 路由守卫
  // },
  // {
  //   path: 'basic',
  //   // component: UserBasicComponent,
  //   loadChildren: () =>
  //     import('src/app/modules/basic/basic.module').then((m) => m.BasicModule),
  //   canActivate: [AuthGuardGuard], // 添加针对当前路由的 canActivate 路由守卫
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
