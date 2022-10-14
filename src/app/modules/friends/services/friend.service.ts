import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Result } from 'src/app/shared/interfaces/result';
import { ContactDto } from '../interfaces/ContactDto';
import { FriendsBackendService } from './backend/friends-backend.service';

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  sc = '';
  stop: boolean = false;
  busy: boolean = false;
  favurlType?: string;

  private contactDtoListSubject$: BehaviorSubject<ContactDto[]> =
    new BehaviorSubject<ContactDto[]>([]);
  public contactDtoListObs$ = this.contactDtoListSubject$.asObservable();

  constructor(private http: HttpClient,
    private friendsBackendService: FriendsBackendService) {}

  getContactList() {
    this.friendsBackendService.getAll().subscribe((result: any) => {
      this.contactDtoListSubject$.next(result);
    });
  }



}
