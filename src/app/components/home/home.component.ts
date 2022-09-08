import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localstorage.service';
import {UserService} from "../../services/user.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hasError: boolean = false;
  hasSuccess: boolean = false;
  successMessage: string = "";
  errorMessage: string = "";
  profile: any;
  userId: string | null = "";
  isCurrentUser: boolean = false;

  // TODO: Remove these testing variables later
  teamMembers = [
    {
      img: '../../../assets/images/profile-placeholder.png',
      name: 'David Faulkner',
      position: 'Associate Software Engineer'
    },
    {
      img: '../../../assets/images/profile-placeholder.png',
      name: 'Joe Bell',
      position: 'Associate Software Engineer'
    },
    {
      img: '../../../assets/images/profile-placeholder.png',
      name: 'Steven Oyinlola',
      position: 'Associate Software Engineer'
    },
    {
      img: '../../../assets/images/profile-placeholder.png',
      name: 'Gerard Gray',
      position: 'Intern Software Engineer'
    },
    {
      img: '../../../assets/images/profile-placeholder.png',
      name: 'Nikita Savkos',
      position: 'Associate Software Engineer'
    },
  ];

  skills = [
    {
      name: 'Java',
      details: 'Proficient with Java language and Spring framework'
    },
    {
      name: 'Python',
      details: 'Expert in Django development and anaconda applications'
    }];

  certs = [
    {
      name: 'AWS Certified Security Specialist',
      details: 'Obtained 16th September 2020'
    },
    {
      name: 'AWS Certified Database Specialist',
      details: 'Obtained 32th September 1805'
    },
    {
      name: 'AWS Certified Cloud Practitioner (Foundational)',
      details: 'Obtained 16th September 2020'
    }];

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.userId = this.route.snapshot.paramMap.get('username');

    if (this.userId === 'self') {
      // Load the current user's account
      this.userService.getUserAccount().subscribe((res) => {
          this.profile = res;
          this.isCurrentUser = true;
        },
        (error: HttpErrorResponse) => {
          if(error.status == 403) {
            this.hasError = true;
            this.errorMessage = "403 Error - Not a valid login"
          } else {
            // Should not trigger but we'll fix this later
            this.profile = error;
          }
        });
    } else if (this.userId !== null) {
      // Attempt to fetch the supplied id
      this.userService.getUserAccountByEmail(this.userId).subscribe((res) => {
          this.profile = {
            userProfile: res
          };
          this.isCurrentUser = false;
        },
        (error: HttpErrorResponse) => {
          if (error.status == 403) {
            this.hasError = true;
            this.errorMessage = "403 Error - Not a valid login"
          } else if (error.status == 400) {
            // Should not trigger but we'll fix this later
            this.hasError = true;
            this.errorMessage = "400 Error - User does not exist"
          }
        });
    }
  }
}
