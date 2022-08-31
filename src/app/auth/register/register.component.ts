import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {Router} from "@angular/router";

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

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registerForm = formBuilder.group({
      id: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      email: ['', Validators.required],
      displayName: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16)])],
      passwordConfirm: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16)])]
    }, {validator: checkMatchedPasswordsValidation});
  }

  ngOnInit(): void {
  }

  // Getters for ID and password fields, required for validation
  get id() {
    return this.registerForm.get('id');
  }

  get password() {
    return this.registerForm.get('password');
  }

  onRegister(): void {

  }

}
