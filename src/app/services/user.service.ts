import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

const url = environment.serverUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUserAccount() {
    // Requires auth token in header, appended in AuthInterceptor
    return this.http.get(url + 'api/v1/account');
  }
}
