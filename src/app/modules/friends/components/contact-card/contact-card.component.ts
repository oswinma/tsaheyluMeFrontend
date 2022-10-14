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
  };

  constructor() {

  }

  ngOnInit(): void {
  }
}
