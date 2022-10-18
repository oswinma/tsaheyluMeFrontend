import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InvitationDTO } from '../../interfaces/InvitationDto';

@Injectable({
  providedIn: 'root',
})
export class InvitationBackendService {
  constructor(private http: HttpClient) {}

  private apiurl = environment.baseURL + '/api/invitations';

  get(invitationDTO: InvitationDTO): Observable<Object> {
    return this.http.get(this.apiurl + '/' + invitationDTO.id);
  }

  delete(invitationDTO: InvitationDTO): Observable<Object> {
    return this.http.delete(this.apiurl + '/' + invitationDTO.id);
  }

  update(invitationDTO: InvitationDTO): Observable<Object> {
    return this.http.put(this.apiurl, invitationDTO);
  }

  insert(invitationDTO: InvitationDTO): Observable<Object> {
    return this.http.post(this.apiurl, invitationDTO);
  }

  getAll(): Observable<Object> {
    return this.http.get(this.apiurl);
  }
}
