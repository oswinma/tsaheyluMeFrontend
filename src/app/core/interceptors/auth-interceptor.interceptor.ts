import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import {
  tap,
  finalize,
  catchError,
  filter,
  switchMap,
  take,
} from 'rxjs/operators';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
import { AuthService } from 'src/app/modules/login/services/auth-service.service';

const TOKEN_HEADER_KEY = 'Authorization';
@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private tokenStorageService: TokenStorageService,
    private authService: AuthService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // 开始时间
    const started = Date.now();

    let msg: string;

    // 打印原始的请求信息
    // console.log(`原始的请求信息：${JSON.stringify(req.headers)}`);

    // 获取请求中的 token 信息
    const accessToken = this.tokenStorageService.getAccessToken();
    if (accessToken != null) {
      req = this.addTokenHeader(req, accessToken);
    }

    return next.handle(req).pipe(
      catchError((err) => {
        if (
          err instanceof HttpErrorResponse &&
          !req.url.includes('api/auth/check')
        ) {
          console.log(err);
          switch (err.status) {
            case 401: {
              // localStorage.removeItem('access_token');

              // this.router.navigate(['/login']);
              return this.handle401Error(req, next);
            }
          }
        }
        return throwError(err);
      })
    );
  }
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      const refreshToken = this.tokenStorageService.getRefreshToken();

      if (refreshToken)
        return this.authService.refreshToken(refreshToken).pipe(
          switchMap((tokenRefreshResponse: any) => {
            this.isRefreshing = false;

            this.tokenStorageService.saveAccessToken(
              tokenRefreshResponse.accessToken
            );

            this.tokenStorageService.saveRefreshToken(
              tokenRefreshResponse.refreshToken
            );

            this.refreshTokenSubject.next(tokenRefreshResponse.accessToken);

            return next.handle(
              this.addTokenHeader(request, tokenRefreshResponse.accessToken)
            );
          }),
          catchError((err) => {
            this.isRefreshing = false;

            this.authService.logout();

            return throwError(err);
          })
        );
      else {
        this.authService.logout();
        return throwError('No refresh token');
      }
    }

    return this.refreshTokenSubject.pipe(
      filter((token) => token !== null),
      take(1),
      switchMap((token) => next.handle(this.addTokenHeader(request, token)))
    );
  }

  private addTokenHeader(request: HttpRequest<any>, accessToken: string) {
    /* for Spring Boot back-end */
    return request.clone({
      headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + accessToken),
    });

    /* for Node.js Express back-end */
    /* return request.clone({
      headers: request.headers.set(TOKEN_HEADER_KEY, token),
    }); */
  }
}
