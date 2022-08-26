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

  it('should require id', () => {
    component.registerForm.setValue({
      'id': "",
      "email": "email123@liberty-it.co.uk",
      "displayName": "Test Display Name",
      "password": "password123",
      "passwordConfirm": "password123"
    });
    expect(component.registerForm.valid).toEqual(false);
  });

  it('should require email', () => {
    component.registerForm.setValue({
      'id': "n123456",
      "email": "",
      "displayName": "Test Display Name",
      "password": "password123",
      "passwordConfirm": "password123"
    });
    expect(component.registerForm.valid).toEqual(false);
  });

  it('should require displayName', () => {
    component.registerForm.setValue({
      'id': "n123456",
      "email": "email123@liberty-it.co.uk",
      "displayName": "",
      "password": "password123",
      "passwordConfirm": "password123"
    });
    expect(component.registerForm.valid).toEqual(false);
  });

  it('should not be able to enter less than 7 characters for id', () => {
    const ctrl = component.registerForm.get('id');
    ctrl?.setValue('n1234');
    expect(ctrl?.invalid).toBeTruthy();
  });

  it('should not be able to enter more than 7 characters for id', () => {
    const ctrl = component.registerForm.get('id');
    ctrl?.setValue('n123456789');
    expect(ctrl?.invalid).toBeTruthy();
  });

  it('should be able to enter 7 characters for id', () => {
    const ctrl = component.registerForm.get('id');
    ctrl?.setValue('n123456');
    expect(ctrl?.valid).toBeTruthy();
  });
});
