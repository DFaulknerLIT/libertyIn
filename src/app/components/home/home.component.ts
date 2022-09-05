import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // TODO: Remove these testing variables later
  teamMembers = [
    {
      img: '../../../assets/images/placeholder_image.png',
      name: 'David Faulkner',
      position: 'Associate Software Engineer'
    },
    {
      img: '../../../assets/images/placeholder_image.png',
      name: 'Joe Bell',
      position: 'Associate Software Engineer'
    },
    {
      img: '../../../assets/images/placeholder_image.png',
      name: 'Steven Oyinlola',
      position: 'Associate Software Engineer'
    },
    {
      img: '../../../assets/images/placeholder_image.png',
      name: 'Gerard Gray',
      position: 'Intern Software Engineer'
    },
    {
      img: '../../../assets/images/placeholder_image.png',
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

  constructor() { }

  ngOnInit(): void {
  }

}
