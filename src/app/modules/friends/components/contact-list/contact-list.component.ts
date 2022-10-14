import { FriendService } from './../../services/friend.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  constructor(private friendService: FriendService) {}

  ngOnInit(): void {

  }

  get contactDtoListObs$() {
    return this.friendService.contactDtoListObs$;
  }
}
