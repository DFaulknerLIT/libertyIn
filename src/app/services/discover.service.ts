import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
//import {LogInTokenResponse} from "../model/auth/token";

const url = environment.serverUrl;


@Injectable({
  providedIn: 'root'
})
export class DiscoverService {

  //userList: any;

  constructor(private http: HttpClient) {
  }

  getUserList(){
    return this.http.get('http://localhost:8080/api/v1/users')//url + '/api/v1/users')
  }

  getUserAccountByTitle(title: string): Observable<any> {
      let body = {
        input: title
      }
      return this.http.put(url + '/api/v1/users/retrieve', body);
  }

}
