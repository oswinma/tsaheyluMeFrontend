import { MessageService } from './../../../../shared/services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getUnreadMessageDtoList();
  }
}
