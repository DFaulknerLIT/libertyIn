import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Profile} from "../model/profile";

const url = environment.serverUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUserAccount() {
    // Requires auth token in header, appended in AuthInterceptor
    return this.http.get<Profile>(url + '/api/v1/account');
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

  getListOfAllTeams(): Observable<any> {
    return this.http.get(url + "/api/v1/team/all");
  }

  createNewTeam(teamName: string): Observable<any> {
    let body = {
      input: teamName
    };
    return this.http.post(url + "/api/v1/team/create", body);
  }

  updateUserTeam(teamName: string, username: string): Observable<any> {
    let body = {
      team: teamName,
      userEmail: username
    };
    return this.http.put(url + "/api/v1/team/add", body);
  }

  getTeamByName(teamName: string): Observable<any> {
    let body = {
      input: teamName
    };
    return this.http.put(url + '/api/v1/team/name', body);
  }

  addSkillToUser(name: string, description: string): Observable<any> {
    let body = {
      name: name,
      description: description
    };
    return this.http.put(url + "/api/v1/account/add_skill", body);
  }

  removeSkillFromUser(name: string): Observable<any> {
    let body = {
      input: name
    };
    return this.http.delete(url + "/api/v1/account/remove_skill", {body: body});
  }

  addCertificationToUser(name: string, description: string): Observable<any> {
    let body = {
      name: name,
      description: description
    };
    return this.http.put(url + "/api/v1/account/add_certification", body);
  }

  removeCertificationFromUser(name: string): Observable<any> {
    let body = {
      input: name
    };
    return this.http.delete(url + "/api/v1/account/remove_certification", {body: body});
  }

}
