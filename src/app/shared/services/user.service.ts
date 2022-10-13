import { UserBackendService } from './backend/user-backend.service';
import { Injectable } from '@angular/core';
// 引入 HttpClient 类
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from '../interfaces/user';
import { Result } from '../interfaces/result';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public currentUser!: User;

  private currentUserSubject$: BehaviorSubject<User> =
    new BehaviorSubject<User>({} as User);
  public currentUserObs$ = this.currentUserSubject$.asObservable();

  constructor(private userBackendService: UserBackendService) {}

  getCurrentUser(): void {
    if (this.currentUser == undefined) {
      this.userBackendService.getBasicInfo().subscribe((result) => {
        this.currentUser = result.data;
        this.currentUserSubject$.next(this.currentUser);
      });
    }
  }
}
