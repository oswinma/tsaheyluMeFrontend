import { Injectable } from '@angular/core';
// 引入 HttpClient 类
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// 引入接口响应类
import { environment } from 'src/environments/environment';
import { PostCheckEmailResponseModel } from 'src/app/shared/interfaces/post-check-email-response-model';
import { Result } from 'src/app/shared/interfaces/result';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {}

  private apiurl = environment.baseURL + '/api/auth/';

  public httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'Content-Type',
    }),
  };

  /**
   * 通过 get 请求获取毒鸡汤信息
   */
  emailCheck(inputemail: string): Observable<PostCheckEmailResponseModel> {
    // const params = new HttpParams()
    // .set('email', inputemail);

    const url = this.apiurl + 'emailcheck?email=' + inputemail;
    return this.http.post<PostCheckEmailResponseModel>(url, {});
  }

  check(inputemail: string, inputpass: string): Observable<any> {
    // const params = new HttpParams()
    // .set('email', inputemail);

    const url =
      this.apiurl + 'check?email=' + inputemail + '&password=' + inputpass;
    return this.http.post<Result>(url, {});
  }

  refreshToken(token: string) {
    return this.http.post(this.apiurl + 'refreshtoken', {
      refreshToken: token,
    });
  }

  logout() {
    this.tokenStorageService.signOut();
    this.router.navigate(['/login']);
  }

  signup(form: any): Observable<any> {
    const url = this.apiurl + 'signup';

    const data = {
      nickName: form.nickName,
      email: form.email,
      password: form.password,
    };

    return this.http.post<Result>(url, data);
  }
}
