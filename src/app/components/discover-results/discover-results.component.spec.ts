import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverResultsComponent } from './discover-results.component';

describe('DiscoverResultsComponent', () => {
  let component: DiscoverResultsComponent;
  let fixture: ComponentFixture<DiscoverResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
