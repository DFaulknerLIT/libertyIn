import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Register} from "../../model/auth/register";
import {AuthService} from "../../services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";

function checkMatchedPasswordsValidation(fg: FormGroup): ValidationErrors | null {
  if ((fg.get('password')?.value !== fg.get('passwordConfirm')?.value) && fg.get('passwordConfirm')?.value != ''){
    return {mismatchedPasswords: true};
  }
  return null
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  hasError: boolean = false;
  errorMessage: string = '';
  hasSuccess: boolean = false;
  successMessage: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.registerForm = formBuilder.group({
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16)])],
      passwordConfirm: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16)])]
    }, {validator: checkMatchedPasswordsValidation});
  }

  ngOnInit(): void {
  }

  // Getter for password fields, required for validation
  get password(): AbstractControl | null {
    return this.registerForm.get('password');
  }

  onRegister(): void {
    let registration: Register = {
      'firstName': <string>this.registerForm.get('firstName')?.value,
      'lastName': <string>this.registerForm.get('lastName')?.value,
      'email': <string>this.registerForm.get('email')?.value,
      'password': <string>this.registerForm.get('password')?.value,
    };

    this.authService.registerUser(registration).subscribe((res) => {
      if(res.status == 200) {
        this.hasSuccess = true;
        this.successMessage = "User created successfully, you may now log in";
      } else {
        this.hasError = true;
        this.errorMessage = res.status + " Error - " + res.statusText;
      }
    });
  }
}
