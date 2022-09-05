import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Login} from "../../model/auth/login";
import {AuthService} from "../../services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  hasError: boolean = false;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onLogin(): void {
    let login: Login = {
      'email': <string>this.loginForm.get('email')?.value,
      'password': <string>this.loginForm.get('password')?.value
    };

    this.authService.logIn(login).subscribe((res) => {
        this.router.navigateByUrl("/");
      },
      (error: HttpErrorResponse) => {
        this.hasError = true;
        this.errorMessage = error.status + " Error - " + error.statusText;
      });
  }
}
