import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GroupDto } from '../../interfaces/GroupDto';

@Injectable({
  providedIn: 'root',
})
export class GroupBackendService {
  constructor(private http: HttpClient) {}

  private apiurl = environment.baseURL + '/api/group/';

  get(groupDto: GroupDto): Observable<Object> {
    return this.http.get(this.apiurl + '/' + groupDto.id);
  }

  getByFromId(groupDto: GroupDto): Observable<Object> {
    return this.http.get(this.apiurl + '/' + groupDto.fromid);
  }

  // url: "/api/group/delete?groupid=" + id,
  delete(groupDto: GroupDto): Observable<Object> {
    return this.http.delete(this.apiurl + groupDto.id);
  }

  // url: "/api/group/update?groupid=" + groupid + '&name=' + name + '&des=' + des,
  update(groupDto: GroupDto): Observable<Object> {
    return this.http.put(this.apiurl, JSON.stringify(groupDto));
  }

  // "/api/group/create?name=" + name + "&des=" + des,
  insert(groupDto: GroupDto): Observable<Object> {
    return this.http.post(this.apiurl, JSON.stringify(groupDto));
  }

  // url: "/api/group/move?toid=" + toid + "&fromgroup=" + fromgroup + "&togroup=" + togroup,
}
