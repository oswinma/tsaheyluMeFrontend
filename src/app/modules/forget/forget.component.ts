import { AuthService } from 'src/app/modules/login/services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { emailExsitedValidatior } from 'src/app/shared/validators/CustomValidator';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css'],
})
export class ForgetComponent implements OnInit {
  public email = new FormControl(
    '',
    [Validators.required, Validators.email],
    emailExsitedValidatior(this.authService)
  );

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  isSuccessful = false;

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
