import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Login} from "../../model/auth/login";
import {AuthService} from "../../services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import { LocalStorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  hasError: boolean = false;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private localStorageService: LocalStorageService) {
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
        this.localStorageService.set('user_access_token', res.access_token);
        this.localStorageService.set('user_refresh_token', res.refresh_token);
        this.router.navigateByUrl("/users/self");
      },
      (error: HttpErrorResponse) => {
        this.hasError = true;
        if (error.status === 403) {
          this.errorMessage = error.status + " Error - Incorrect username or password.";
        }
    });
  }
}
