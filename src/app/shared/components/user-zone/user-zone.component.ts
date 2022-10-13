import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { UserSettingDialogComponent } from '../user-setting-dialog/user-setting-dialog.component';

@Component({
  selector: 'app-user-zone',
  templateUrl: './user-zone.component.html',
  styleUrls: ['./user-zone.component.css'],
})
export class UserZoneComponent implements OnInit {
  showMenu = false;
  constructor(
    private userService: UserService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  get userObs$() {
    return this.userService.currentUserObs$;
  }
}
