import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Register} from "../model/auth/register";
import {Login} from "../model/auth/login";

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

  logIn(login: Login): Observable<any> {
    return this.http.post(url, login);
  }
}
