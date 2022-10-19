import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
})
export class MessageListComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}

  get messageDtoListObs$() {
    return this.messageService.messageDtoListObs$;
  }
}
