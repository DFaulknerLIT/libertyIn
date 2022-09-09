import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-certs-edit',
  templateUrl: './certs-edit.component.html',
  styleUrls: ['./certs-edit.component.css']
})
export class CertsEditComponent implements OnInit {

  profile: any;
  certs: any;
  certForm: FormGroup;
  hasSuccess: boolean = false;
  successMessage: string = "";

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
    this.certForm = formBuilder.group({
      cert: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.userService.getUserAccount().subscribe((res) => {
      this.certs = res.userProfile.certifications;
    });
  }

  onCertAdd() {
    let cert = <string>this.certForm.get('cert')?.value;
    let description =  <string>this.certForm.get('description')?.value;

    this.userService.addCertificationToUser(cert, description).subscribe((res) => {
      this.hasSuccess = true;
      this.successMessage = "Certification added successfully";
    });
  }

  onCertDelete(cert: string) {
    this.userService.removeCertificationFromUser(cert).subscribe((res) => {
      this.hasSuccess = true;
      this.successMessage = "Certification deleted successfully";
    });
  }
}
