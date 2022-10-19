import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessageDto } from '../../interfaces/messageDto';
import { Result } from '../../interfaces/result';

@Injectable({
  providedIn: 'root',
})
export class MessageBackendService {
  constructor(private http: HttpClient) {}

  private apiurl = environment.baseURL + '/api/messages';

  get(messageDto: MessageDto): Observable<Object> {
    return this.http.get(this.apiurl + '/' + messageDto.id);
  }

  delete(messageDto: MessageDto): Observable<Object> {
    return this.http.delete(this.apiurl + '/' + messageDto.id);
  }

  update(messageDto: MessageDto): Observable<Object> {
    return this.http.put(this.apiurl, messageDto);
  }

  insert(messageDto: MessageDto): Observable<Object> {
    return this.http.post(this.apiurl, messageDto);
  }

  getAll(): Observable<Object> {
    return this.http.get(this.apiurl);
  }

  getUnReadMsgNum(): Observable<Result> {
    const url = this.apiurl + '/unreadnum';
    return this.http.get<Result>(url);
    // return 0;
  }

  getUnread(): Observable<Object> {
    return this.http.get(this.apiurl + '/unread');
  }
}
