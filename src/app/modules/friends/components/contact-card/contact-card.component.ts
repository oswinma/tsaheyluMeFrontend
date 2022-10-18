import { FriendService } from './../../services/friend.service';
import { ContactDto } from '../../interfaces/ContactDto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css'],
})
export class ContactCardComponent implements OnInit {
  @Input() contactDto: ContactDto = {
    id: '',
    email: '',
    nickname: '',
    avatarURL: '',
    friendid: 0,
    groupid: 0,
    groupdataid: 0,
    fromid: 0,
    status: 0,
    popup: false,
    toid: 0,
    bondtime: new Date(),
  };

  constructor(private friendService: FriendService) {}

  ngOnInit(): void {}

  popup(contactDto: ContactDto) {
    contactDto.popup = !contactDto.popup;
    this.friendService.update(contactDto);
  }

  block(contactDto: ContactDto) {
    contactDto.status = 2;
    this.friendService.update(contactDto);
  }

  unblock(contactDto: ContactDto) {
    contactDto.status = 1;
    this.friendService.update(contactDto);
  }
}
