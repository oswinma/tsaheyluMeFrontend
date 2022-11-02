import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export class CustomValidator {
  static passwordValidator(control: AbstractControl): ValidationErrors | null {
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
