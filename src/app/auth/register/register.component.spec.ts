import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ RegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require email', () => {
    component.registerForm.setValue({
      "email": "",
      "firstName": "FirstName",
      "lastName": "McSurname",
      "password": "password123",
      "passwordConfirm": "password123"
    });
    expect(component.registerForm.valid).toEqual(false);
  });

  it('should require firstName', () => {
    component.registerForm.setValue({
      "email": "email123@liberty-it.co.uk",
      "firstName": "",
      "lastName": "McSurname",
      "password": "password123",
      "passwordConfirm": "password123"
    });
    expect(component.registerForm.valid).toEqual(false);
  });

  it('should require lastName', () => {
    component.registerForm.setValue({
      "email": "email123@liberty-it.co.uk",
      "firstName": "FirstName",
      "lastName": "",
      "password": "password123",
      "passwordConfirm": "password123"
    });
    expect(component.registerForm.valid).toEqual(false);
  });

  // it('should not be able to enter less than 7 characters for id', () => {
  //   const ctrl = component.registerForm.get('id');
  //   ctrl?.setValue('n1234');
  //   expect(ctrl?.invalid).toBeTruthy();
  // });
  //
  // // it('should not be able to enter more than 7 characters for id', () => {
  // //   const ctrl = component.registerForm.get('id');
  // //   ctrl?.setValue('n123456789');
  // //   expect(ctrl?.invalid).toBeTruthy();
  // // });
  // //
  // // it('should be able to enter 7 characters for id', () => {
  // //   const ctrl = component.registerForm.get('id');
  // //   ctrl?.setValue('n123456');
  // //   expect(ctrl?.valid).toBeFalsy();
  // // });

  it('should be able to enter 8 characters for password', () => {
    const ctrl = component.registerForm.get('password');
    ctrl?.setValue('password');
    expect(ctrl?.valid).toBeTruthy();
  });

  it('should be able to enter 16 characters for password', () => {
    const ctrl = component.registerForm.get('password');
    ctrl?.setValue('password12345678');
    expect(ctrl?.valid).toBeTruthy();
  });

  it('should be able to enter between 8 and 16 characters for password', () => {
    const ctrl = component.registerForm.get('password');
    ctrl?.setValue('password45678');
    expect(ctrl?.valid).toBeTruthy();
  });

  it('should not be able to enter less than 8 characters for password', () => {
    const ctrl = component.registerForm.get('password');
    ctrl?.setValue('gerh89');
    expect(ctrl?.valid).toBeFalsy();
  });

  it('should not be able to enter more than 16 characters for password', () => {
    const ctrl = component.registerForm.get('password');
    ctrl?.setValue('gerh8gsgse4tgwbewhygwebd9');
    expect(ctrl?.valid).toBeFalsy();
  });

  // TODO: Fix these two tests at some stage
  it('should be able to enter matching passwords', () => {
    const ctrl1 = component.registerForm.get('password');
    ctrl1?.setValue('matchThisPass');
    expect(ctrl1?.valid).toBeTruthy();
    const ctrl2 = component.registerForm.get('passwordConfirm');
    ctrl2?.setValue('matchThisPass');
    expect(ctrl2?.valid).toBeTruthy();
  });

  it('should not be able to enter mismatched passwords', () => {
    const ctrl1 = component.registerForm.get('password');
    ctrl1?.setValue('matchThisPass');
    expect(ctrl1?.valid).toBeTruthy();
    const ctrl2 = component.registerForm.get('passwordConfirm');
    ctrl2?.setValue('fqfqfqfqefc');
    expect(ctrl2?.valid).toBeTruthy();
  });
});
