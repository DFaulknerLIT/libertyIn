import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localstorage.service';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hasError: boolean = false;
  isLoggedIn: boolean = false;
  hasSuccess: boolean = false;
  successMessage: string = "";
  errorMessage: string = "";
  profile: any;

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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // TODO: Tidy up request error handling
    this.userService.getUserAccount().subscribe((res) => {
      if(res.statusCode == 403) {
        this.isLoggedIn = false;
        this.hasError = true;
        this.errorMessage = "403 Error - Not a valid login"
      } else {
        this.profile = res;
        this.isLoggedIn = true;
      }
    });
  }

}
