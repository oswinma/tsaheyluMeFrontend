import {
  CustomValidator,
  emailExsitedValidatior,
} from 'src/app/shared/validators/CustomValidator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private tokenStorage: TokenStorageService,
    private formBuilder: FormBuilder
  ) {}

  public form = this.formBuilder.group({
    email: [
      '',
      [Validators.required, Validators.email],
      [emailExsitedValidatior(this.authService)],
    ],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  ngOnInit(): void {}

  responseContent = '';

  public responseShow = false;

  get password() {
    return this.form.get('password');
  }

  get email() {
    return this.form.get('email');
  }

  check() {
    if (this.form.valid) {
      this.authService
        .check(this.email?.value, this.password?.value)
        .subscribe((result) => {
          // console.log( "check");
          // console.log( data);
          const data = result;
          if (data.pass == 'true') {
            this.tokenStorage.saveAccessToken(data.accessToken);
            this.tokenStorage.saveRefreshToken(data.refreshToken);
            this.router.navigate(['mylist', 'new']);
          } else {
            this.responseContent = data.msg;
            this.responseShow = true;
          }
        });
    }
  }
}
