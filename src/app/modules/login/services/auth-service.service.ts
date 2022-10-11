import { Injectable } from '@angular/core';
// 引入 HttpClient 类
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// 引入接口响应类
import { environment } from 'src/environments/environment';
import { PostCheckEmailResponseModel } from 'src/app/shared/interfaces/post-check-email-response-model';
import { Result } from 'src/app/shared/interfaces/result';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private apiurl = environment.baseURL + '/api';

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

    const url = this.apiurl + '/user/emailcheck?email=' + inputemail;
    return this.http.post<PostCheckEmailResponseModel>(url, {});
  }

  check(inputemail: string, inputpass: string): Observable<Result> {
    // const params = new HttpParams()
    // .set('email', inputemail);

    const url =
      this.apiurl +
      '/user/check?email=' +
      inputemail +
      '&password=' +
      inputpass;
    return this.http.post<Result>(url, {});
  }
}
