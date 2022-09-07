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

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {
    this.editForm = this.formBuilder.group({
      jobTitle: [''],
      teamName: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // TODO: Implement team name changes once backend API is implemented
    // TODO: Better error handling here
    if(this.editForm.get('jobTitle')?.value !== "") {
      this.userService.updateUserJobTitle(this.editForm.get('jobTitle')?.value).subscribe((res) => {
        console.log(res);
        if(res.statusCode === 200) {
          this.router.navigateByUrl("/");
        }
      });
    }
  }

}
