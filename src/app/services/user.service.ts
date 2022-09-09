import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

const url = environment.serverUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUserAccount(): Observable<any> {
    // Requires auth token in header, appended in AuthInterceptor
    return this.http.get(url + '/api/v1/account');
  }

  getUserAccountByEmail(username: string): Observable<any> {
    let body = {
      input: username
    }
    return this.http.put(url + '/api/v1/users/retrieve', body);
}

  updateUserJobTitle(jobTitle: string): Observable<any> {
    return this.http.put(url + '/api/v1/account/job_title', {input:jobTitle});
  }

}
