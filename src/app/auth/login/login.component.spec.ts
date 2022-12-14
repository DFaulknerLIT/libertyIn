import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require email', () => {
    component.loginForm.setValue({
      'email': "",
      "password": "testPassword123"
    });
    expect(component.loginForm.valid).toEqual(false);
  });

  it('should require password', () => {
    component.loginForm.setValue({
      'email': "TestUsername123",
      "password": ""
    });
    expect(component.loginForm.valid).toEqual(false);
  });

  it('should require both username and password', () => {
    component.loginForm.setValue({
      'email': "TestUsername123",
      "password": "testpassword123"
    });
    expect(component.loginForm.valid).toEqual(true);
  });

});
