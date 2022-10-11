import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service.service';

@Component({
  selector: 'app-login-zone',
  templateUrl: './login-zone.component.html',
  styleUrls: ['./login-zone.component.css'],
})
export class LoginZoneComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {

    console.log("LoginZoneComponent");
  }

  // user:User={email:'', password:''};

  responseContent = '';
  email = '';
  password = '';

  public responseShow = false;

  check() {
    this.authService.check(this.email, this.password).subscribe((result) => {
      // console.log( "check");
      // console.log( data);
        const data = result.data;
      if (data.pass == 'true') {
        localStorage.setItem('access_token', data.token);
        this.router.navigate(['mylist','new']);
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
