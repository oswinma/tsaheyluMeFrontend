import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Result } from '../../interfaces/result';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserBackendService {
  private apiurl = environment.baseURL + '/api/user';

  constructor(private http: HttpClient) {}

  getBasicInfo(): Observable<Result> {
    const url = this.apiurl + '/basic';
    return this.http.get<Result>(url);
  }
}
