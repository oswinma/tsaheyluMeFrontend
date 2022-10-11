import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GroupDataDto } from '../interfaces/GroupDataDto';

@Injectable({
  providedIn: 'root',
})
export class GroupDataBackendService {
  constructor(private http: HttpClient) {}

  private apiurl = environment.baseURL + '/api/group/';

  get(groupDataDto: GroupDataDto): Observable<Object> {
    return this.http.get(this.apiurl + '/' + groupDataDto.id);
  }

  getByGroupId(groupDataDto: GroupDataDto): Observable<Object> {
    return this.http.get(this.apiurl + '/' + groupDataDto.groupid);
  }

  // url: "/api/group/remove?groupdataid=" + contact.groupdataid,
  delete(groupDataDto: GroupDataDto): Observable<Object> {
    return this.http.delete(this.apiurl + groupDataDto.id);
  }

  update(groupDataDto: GroupDataDto): Observable<Object> {
    return this.http.put(this.apiurl, JSON.stringify(groupDataDto));
  }

  insert(groupDataDto: GroupDataDto): Observable<Object> {
    return this.http.post(this.apiurl, JSON.stringify(groupDataDto));
  }

  moveFriend(
    toid: number,
    fromGroupId: number,
    toGroupId: number
  ): Observable<Object> {
    return this.http.put(
      this.apiurl +
        'move?toid=' +
        toid +
        '&fromGroupId=' +
        fromGroupId +
        '&toGroupId=' +
        toGroupId,
      {}
    );
  }
}
