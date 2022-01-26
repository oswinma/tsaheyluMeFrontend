import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../interfaces/result';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private http: HttpClient) {}
  private apiurl = 'http://localhost:8081/api/message';

  num  = '';

  getUnReadMsgNum():Observable<Result> {
    const url = this.apiurl + '/unreadnum';
    return this.http.get<Result>(url);
    // return 0;
  }

}
