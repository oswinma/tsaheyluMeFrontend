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
  currentUser: User = {
    id: 0,
    email: '',
    nickname: '',
    country: '',
    language: '',
    avatarURL: '',
    status: 0,
    signuptime: new Date('1'),
    password: '',
    favurlSubscription: true,
    emailSubscription: true,
  };

  showMenu = false;
  constructor(
    private userService: UserService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getUserBasicInfo();
    // console.log('user zone com');
  }

  getUserBasicInfo() {
    this.userService.getBasicInfo().subscribe((result) => {
      // console.log(data);
      this.currentUser = result.data;
      this.userService.currentUser = this.currentUser;
    });
    // this.currentUser = this.userService.currentUser;
  }

  openMenu() {
    this.dialog.open(UserSettingDialogComponent);
  }

  isLogin() {
    return true;
  }
}
