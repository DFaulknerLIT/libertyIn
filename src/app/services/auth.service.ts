import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Register} from "../model/auth/register";
import {Login} from "../model/auth/login";
import {LogInTokenResponse} from "../model/auth/token";

const url = environment.serverUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  registerUser(registration: Register): Observable<any> {
    return this.http.post(url + '/api/v1/registration', registration);
  }

  logIn(login: Login) {
    let body: URLSearchParams = new URLSearchParams();
    body.set('username', login.email);
    body.set('password', login.password);
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    return this.http.post<LogInTokenResponse>(url + '/login', body.toString(), options);
  }
}
