import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Temporary variable for testing only. REMOVE THIS LATER
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
      position: 'Associate Software Engineer'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
