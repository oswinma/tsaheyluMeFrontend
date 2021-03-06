import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { tap, finalize } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // 开始时间
    const started = Date.now();

    let msg: string;

    // 打印原始的请求信息
    // console.log(`原始的请求信息：${JSON.stringify(req.headers)}`);

    // 获取请求中的 token 信息
    const token = req.headers.get('Authorization') || '';


    let accessToken = localStorage.getItem('access_token')|| '';


    if (accessToken != '' && token==='') {
    // 克隆请求信息
    req = req.clone({
      setHeaders: { Authorization: `${accessToken}` }
      });
      // console.log(`更新的：${JSON.stringify(req.headers)}`);
    // 将克隆后的 http 请求信息传递给下一个拦截器

    }
      return next.handle(req);
  }
}
