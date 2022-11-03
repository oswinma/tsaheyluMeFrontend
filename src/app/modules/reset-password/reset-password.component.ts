import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AbstractControlOptions,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TokenStatus } from 'src/app/shared/interfaces/TokenStatus';
import { CustomValidator } from 'src/app/shared/validators/CustomValidator';
import { AuthService } from '../login/services/auth-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  token: any;
  isTokenValid = false;
  errorMessage!: string;
  isTokenChecked = false;
  isSuccessful = false;

  public form = this.formBuilder.group(
    {
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    },
    { validators: CustomValidator.passwordMatchingValidatior }
  );

  checkPasswords(group: FormGroup) {
    const pass = group.controls['password'].value;
    const confirmPass = group.controls['confirmPassword'].value;

    confirmPass.setErrors({ passwordNotMatch: true });

    return pass === confirmPass ? null : { notSame: true };
  }

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get('token');
    if (this.token) {
      this.authService.verifyToken(this.token).subscribe(
        (data) => {
          this.isTokenChecked = true;
          this.isTokenValid = true;
        },
        (err) => {
          this.isTokenChecked = true;
          if (err.error.message === 'TokenInvalidException') {
            this.errorMessage = 'Token is invalid';
          }

          if (err.error.message === 'TokenExpiredException') {
            this.errorMessage = 'Token is expired';
          }
        }
      );
    } else {
      this.isTokenChecked = true;
      this.errorMessage = 'No token provided';
    }
  }

  updatePassword() {
    if (this.form.valid) {
      this.authService
        .updatePassword(this.password?.value, this.token)
        .subscribe(
          (data) => {
            this.isSuccessful = true;
          },
          (err) => {
            console.log(err);
          }
        );
    }
  }
}
