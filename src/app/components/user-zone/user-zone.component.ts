import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

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
    favurlSubscription:true,
    emailSubscription:true
  };

  showMenu = false;
  constructor(private userService: UserService, private router: Router) {}

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
}
