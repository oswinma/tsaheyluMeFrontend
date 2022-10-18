import { InvitationBackendService } from './backend/invitation-backend.service';
import { InvitationDTO } from './../interfaces/InvitationDto';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InvitationService {

  private invitationDtoListSubject$: BehaviorSubject<InvitationDTO[]> =
    new BehaviorSubject<InvitationDTO[]>([]);
  public invitationDtoListObs$ = this.invitationDtoListSubject$.asObservable();

  constructor(
    private http: HttpClient,
    private invitationBackendService: InvitationBackendService
  ) {}

  getContactList() {
    this.invitationBackendService.getAll().subscribe((result: any) => {
      this.invitationDtoListSubject$.next(result);
    });
  }
}
