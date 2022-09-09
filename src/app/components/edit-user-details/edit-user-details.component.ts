import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-edit-user-details',
  templateUrl: './edit-user-details.component.html',
  styleUrls: ['./edit-user-details.component.css']
})
export class EditUserDetailsComponent implements OnInit {

  editForm: FormGroup;
  userEmail: string = "";
  teamsList: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {
    this.editForm = this.formBuilder.group({
      jobTitle: [''],
      teamName: ['']
    });

    this.userService.getListOfAllTeams().subscribe((res) => {
      this.teamsList = res;
    });

    this.userService.getUserAccount().subscribe((res) => {
      this.userEmail = res.email;
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // TODO: Better error handling here
    if(this.editForm.get('jobTitle')?.value !== "") {
      this.userService.updateUserJobTitle(this.editForm.get('jobTitle')?.value).subscribe((res) => {
        if(res.statusCode === 200) {
          this.router.navigateByUrl("/");
        }
      });
    }

    if(this.editForm.get('teamName')?.value !== "none") {
      this.userService.updateUserTeam(this.editForm.get('teamName')?.value, this.userEmail).subscribe((res) => {
        console.log(res);
        if(res.statusCode === 200) {
          this.router.navigateByUrl("/");
        }
      });
    }
  }

}
