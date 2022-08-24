import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  hasError: boolean = false;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onLogin(): void {
    //  TODO: Replace this test logic with actual auth logic to backend
    //  TODO: Abstract into dedicated auth service?
    let usernameValue: string = <string>this.loginForm.value.username;
    let passwordValue: string = <string>this.loginForm.value.password;
    console.log(usernameValue);
    console.log(passwordValue);

    if(usernameValue === 'user') {
      this.router.navigateByUrl("/");
    } else {
      this.errorMessage = "User is not registered on the system";
      this.hasError = true;
    }
  }
}
