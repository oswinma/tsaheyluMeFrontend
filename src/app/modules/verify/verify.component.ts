import { AuthService } from 'src/app/modules/login/services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TokenStatus } from 'src/app/shared/interfaces/TokenStatus';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css'],
})
export class VerifyComponent implements OnInit {
  token: any;
  tokenStatus = TokenStatus;
  status: any;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get('token');
    if (this.token) {
      this.authService.verifyEmail(this.token).subscribe(
        (data) => {
          this.status = TokenStatus.VALID;
        },
        (err) => {
          this.errorMessage = err.error.message;
          if (err.error.message === 'TokenInvalidException') {
            this.status = TokenStatus.INVALID;
          }

          if (err.error.message === 'TokenExpiredException') {
            this.status = TokenStatus.EXPIRED;
          }
        }
      );
    }
  }

  resendToken(): void {
    this.status = TokenStatus.SENDING;
    this.authService.resendToken(this.token).subscribe(
      (data) => {
        this.status = TokenStatus.SENT;
      },
      (err) => {
        this.errorMessage = err.error.message;
      }
    );
  }
}
