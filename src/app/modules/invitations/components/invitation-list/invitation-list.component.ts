import { InvitationService } from './../../service/invitation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitation-list',
  templateUrl: './invitation-list.component.html',
  styleUrls: ['./invitation-list.component.css']
})
export class InvitationListComponent implements OnInit {

  constructor(private invitationService: InvitationService) { }

  ngOnInit(): void {
  }

  get invitationDtoListObs$() {
    return this.invitationService.invitationDtoListObs$;
  }

}
