import { Component, OnInit } from '@angular/core';
import { InvitationService } from '../../service/invitation.service';

@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.css'],
})
export class InvitationsComponent implements OnInit {
  constructor(private invitationService: InvitationService) {}

  ngOnInit(): void {
    this.invitationService.getInvitationList();
  }
}
