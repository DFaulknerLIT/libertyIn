import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertsEditComponent } from './certs-edit.component';

describe('CertsEditComponent', () => {
  let component: CertsEditComponent;
  let fixture: ComponentFixture<CertsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
