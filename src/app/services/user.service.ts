import { Injectable } from '@angular/core';
// 引入 HttpClient 类
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../interfaces/user';
import { Result } from '../interfaces/result';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public currentUser!: User;
  private apiurl = 'http://localhost:8081/api/user';

  constructor(private http: HttpClient) {}

  getBasicInfo(): Observable<Result> {
    const url = this.apiurl + '/basic';
    return this.http.get<Result>(url);
  }
}
