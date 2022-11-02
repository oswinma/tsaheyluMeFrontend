import { AuthService } from 'src/app/modules/login/services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css'],
})
export class ForgetComponent implements OnInit {
  public email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  isSuccessful = false;

  emailCheck() {
    if (this.email.valid) {
      this.authService.emailCheck(this.email.value).subscribe((data) => {
        if (data.pass === 'true') {
          this.email.setErrors({ notExsited: true });
        }
      });
    }
  }

  resetPassword() {
    if (this.email.valid)
      this.authService.resetPassword(this.email.value).subscribe(
        (data) => {
          console.log(data);
          this.isSuccessful = true;
          this.email.setValue('');
          this.email.clearValidators();
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
