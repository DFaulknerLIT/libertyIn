import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-skills-edit',
  templateUrl: './skills-edit.component.html',
  styleUrls: ['./skills-edit.component.css']
})
export class SkillsEditComponent implements OnInit {

  profile: any;
  skills: any;
  skillForm: FormGroup;
  hasSuccess: boolean = false;
  successMessage: string = "";

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
    this.skillForm = formBuilder.group({
      skill: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.userService.getUserAccount().subscribe((res) => {
      this.skills = res.userProfile.skills;
    });
  }

  onSkillAdd() {
    let skill = <string>this.skillForm.get('skill')?.value;
    let description =  <string>this.skillForm.get('description')?.value;

    this.userService.addSkillToUser(skill, description).subscribe((res) => {
      this.hasSuccess = true;
      this.successMessage = "Skill added successfully";
    });
  }

  onSkillDelete(skill: string) {
    this.userService.removeSkillFromUser(skill).subscribe((res) => {
      this.hasSuccess = true;
      this.successMessage = "Skill deleted successfully";
    });
  }

}
