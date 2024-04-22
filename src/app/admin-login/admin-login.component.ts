import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss'
})
export class AdminLoginComponent {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  hasError(controlName: string, errorName: string) {
    const control = this.loginForm.get(controlName);
    return control?.hasError(errorName) && control?.touched;
  }
  email: string = "dv2397@gmail.com";
  password: string = "Dv@239764"
  submitForm(mail: string, pass: string) {
    if (this.loginForm.valid) {
      if (this.email == mail && this.password == pass) {
        this.router.navigate(['/adminPage'])
      }
      else {
        alert("Password & Email does not match")
      }
    }
  }
}
