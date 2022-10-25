import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
import { AuthService } from '../../services/auth-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {}

  responseContent = '';
  email = '';
  password = '';

  public responseShow = false;

  check() {
    this.authService.check(this.email, this.password).subscribe((result) => {
      // console.log( "check");
      // console.log( data);
      const data = result;
      if (data.pass == 'true') {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveRefreshToken(data.refreshToken);
        this.router.navigate(['mylist', 'new']);
      } else {
        this.responseContent = data.msg;
        this.responseShow = true;
      }
    });
  }

  emailCheck() {
    this.authService.emailCheck(this.email).subscribe((data) => {
      console.log(data);
      this.responseContent = data.msg;
      this.responseShow = true;
    });
  }
}
