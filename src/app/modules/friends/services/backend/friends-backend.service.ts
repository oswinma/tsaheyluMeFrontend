import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FriendDto } from '../../interfaces/FriendDto';
import { GroupDto } from '../../interfaces/GroupDto';

@Injectable({
  providedIn: 'root',
})
export class FriendsBackendService {
  constructor(private http: HttpClient) {}

  private apiurl = environment.baseURL + '/api/friends';

  get(friendDto: FriendDto): Observable<Object> {
    return this.http.get(this.apiurl + '/' + friendDto.id);
  }

  getAll(): Observable<Object> {
    return this.http.get(this.apiurl);
  }

  getByGroupId(group: GroupDto): Observable<Object> {
    return this.http.get('/api/group/data?groupid=' + group.id);
  }

  delete(friendDto: FriendDto): Observable<Object> {
    return this.http.delete(this.apiurl + '/' + friendDto.id);
  }

  update(friendDto: FriendDto): Observable<Object> {
    return this.http.put(this.apiurl, JSON.stringify(friendDto));
  }

  insert(friendDto: FriendDto): Observable<Object> {
    return this.http.post(this.apiurl, JSON.stringify(friendDto));
  }

  invite(friendDto: FriendDto): Observable<Object> {
    return this.http.post(this.apiurl + '/invite', JSON.stringify(friendDto));
  }

  // /api/friend/inviteemail?nickname=''&email=" + email,

  /*
  saveTodo(newTodo: Todo): Observable<List<Todo>> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');

    return this.http
      .post('/todo', JSON.stringify(newTodo.toJS()), { headers })
      .share();
  }

  deleteTodo(deletedTodo: Todo) {
    let params = new URLSearchParams();
    params.append('id', '' + deletedTodo.id);

    return this.http.delete('/todo', { search: params }).share();
  }

  toggleTodo(toggled: Todo) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http
      .put('/todo', JSON.stringify(toggled.toJS()), { headers })
      .share();
  } */
}
