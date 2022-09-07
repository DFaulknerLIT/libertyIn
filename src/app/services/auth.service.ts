import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Register} from "../model/auth/register";
import {Login} from "../model/auth/login";
import {LogInTokenResponse} from "../model/auth/token";
import {LocalStorageService} from "./localstorage.service";

const url = environment.serverUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  registerUser(registration: Register): Observable<any> {
    return this.http.post(url + '/api/v1/registration', registration, {headers:{skip:"true"}});
  }

  logIn(login: Login) {
    let body: URLSearchParams = new URLSearchParams();
    body.set('username', login.email);
    body.set('password', login.password);
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('skip', 'true')
    };
    return this.http.post<LogInTokenResponse>(url + '/login', body.toString(), options);
  }

  hasValidAuthToken(): boolean {
    // TODO: Check if auth token has expired
    let authToken = localStorage.getItem('user_access_token');
    return authToken !== null;

  }

  isTokenExpired() {
    // TODO: Implement this later
  }

  refreshToken() {
    let options = {
      headers: new HttpHeaders().set('skip', 'true').set('Authorization', 'Bearer ' + localStorage.getItem('user_refresh_token'))
    }
    this.http.post<LogInTokenResponse>(url + "api/v1/token/refresh", null);
  }
}
