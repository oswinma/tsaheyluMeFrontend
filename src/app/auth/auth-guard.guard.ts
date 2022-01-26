import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {


  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let token = localStorage.getItem('access_token') || '';
    let url: string = state.url;

    // console.log(token);
    if (token === '') {

      // console.log(false);
      // console.log(url);

      if (url === '/login') {
        return true;
      }

      this.router.navigate(['/login']);
      console.log("here");
      return false;
    }
    else{

      if (url === '/login') {
        this.router.navigate(['/mylist/new']);
      }

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
