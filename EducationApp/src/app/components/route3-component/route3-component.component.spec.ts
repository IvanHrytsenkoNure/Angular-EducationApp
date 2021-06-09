import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route3ComponentComponent } from './route3-component.component';

describe('Route3ComponentComponent', () => {
  let component: Route3ComponentComponent;
  let fixture: ComponentFixture<Route3ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Route3ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Route3ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
