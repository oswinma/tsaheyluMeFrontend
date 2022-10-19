import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessageDto } from '../interfaces/messageDto';
import { Result } from '../interfaces/result';
import { MessageBackendService } from './backend/message-backend.service';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private messageBackendService: MessageBackendService) {}

  private messageDtoListSubject$: BehaviorSubject<MessageDto[]> =
    new BehaviorSubject<MessageDto[]>([]);
  public messageDtoListObs$ = this.messageDtoListSubject$.asObservable();

  getMessageDtoList() {
    this.messageBackendService.getAll().subscribe((result: any) => {
      this.messageDtoListSubject$.next(result.data);
    });
  }

  getUnReadMsgNum(): Observable<Result> {
    return this.messageBackendService.getUnReadMsgNum();
  }

  getUnreadMessageDtoList() {
    this.messageBackendService.getUnread().subscribe((result: any) => {
      this.messageDtoListSubject$.next(result.data);
    });
  }
}
