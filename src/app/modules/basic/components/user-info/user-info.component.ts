import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  currentUser: User;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private userService: UserService) {
    this.currentUser = {
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
  }

  ngOnInit(): void {
    if (!this.userService.currentUser) {
      this.userService.getCurrentUser();
    }
    this.currentUser = this.userService.currentUser;
  }
}
