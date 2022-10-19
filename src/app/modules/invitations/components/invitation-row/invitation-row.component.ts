import { InvitationService } from './../../service/invitation.service';
import { InvitationDTO } from './../../interfaces/InvitationDto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitation-row',
  templateUrl: './invitation-row.component.html',
  styleUrls: ['./invitation-row.component.css'],
})
export class InvitationRowComponent implements OnInit {
  @Input() invitationDto: InvitationDTO = {
    id: 0,
    fromid: 0,
    toid: 0,
    status: 0,
    popup: false,
    nickname: '',
    avatarURL: '',
    bondtime: new Date(),
  };

  constructor(private invitationService: InvitationService) {}

  ngOnInit(): void {
  }
}
