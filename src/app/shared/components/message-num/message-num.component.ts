import { MessageService } from '../../services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-num',
  templateUrl: './message-num.component.html',
  styleUrls: ['./message-num.component.css'],
})
export class MessageNumComponent implements OnInit {
  constructor(private messageService: MessageService) {}
  msgNum = '';

  ngOnInit(): void {
    this.getUnReadMsgNum();
  }

  getUnReadMsgNum() {
    this.messageService.getUnReadMsgNum().subscribe((result) => {
      this.msgNum = result.data;
    });
  }
  openMsgList() {}
}
