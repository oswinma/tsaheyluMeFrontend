import { UserService } from 'src/app/shared/services/user.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService,
    private tokenStorageService: TokenStorageService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = this.tokenStorageService.getAccessToken();

    let url: string = state.url;

    if (token === '' || token === null || token === undefined) {
      if (url.startsWith('/login')) {
        const accessToken = route.queryParamMap.get('accessToken');
        const refreshToken = route.queryParamMap.get('refreshToken');

        if (accessToken && refreshToken) {
          this.tokenStorageService.saveAccessToken(accessToken);
          this.tokenStorageService.saveRefreshToken(refreshToken);
          this.router.navigate(['/mylist/new']);
        }
        return true;
      }

      this.router.navigate(['/login']);
      console.log('here');
      return false;
    } else {
      if (url === '/login') {
        this.router.navigate(['/mylist/new']);
      }
      this.userService.getCurrentUser();
      return true;
    }

    // // 判断是否可以访问当前连接
    // let url: string = state.url;
    // if (token === 'admin' && url === '/crisis-center') {
    //   return true;
    // }

    this.router.navigate(['/login']);
    return false;
  }
}
