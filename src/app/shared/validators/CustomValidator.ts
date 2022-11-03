import {
  AbstractControl,
  AsyncValidatorFn,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';
import { map } from 'rxjs';
import { AuthService } from 'src/app/modules/login/services/auth-service.service';

export class CustomValidator {
  constructor(private authService: AuthService) {}

  static passwordMatchingValidatior(
    control: AbstractControl
  ): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    console.log(password);
    if (
      (password?.touched || password?.dirty) &&
      (confirmPassword?.touched || confirmPassword?.dirty)
    ) {
      if (password.value !== confirmPassword.value) {
        confirmPassword.setErrors({ passwordNotMatch: true });
        return { passwordNotMatch: true };
      }
    }

    return null;
  }
}

export function emailExsitedValidatior(
  authService: AuthService
): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return authService
      .emailCheck(control.value)
      .pipe(
        map((data) => (data.pass === 'true' ? { userNotExsited: true } : null))
      );
  };
}
