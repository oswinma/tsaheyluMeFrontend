import { Component, Input, OnInit } from '@angular/core';
import { MessageDto } from 'src/app/shared/interfaces/messageDto';

@Component({
  selector: 'app-message-row',
  templateUrl: './message-row.component.html',
  styleUrls: ['./message-row.component.css'],
})
export class MessageRowComponent implements OnInit {
  @Input() messageDto: MessageDto = {
    id: 0,
    fromid: 0,
    toid: 0,
    type: '',
    status: 0,
    content: '',
    nickname: '',
    jump_link: '',
    avatarURL: '',
    sendtime: new Date(),
    readtime: new Date(),
    refid: 0,
  };

  constructor() {}

  ngOnInit(): void {
  }
}
