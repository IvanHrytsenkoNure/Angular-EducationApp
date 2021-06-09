import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route2ComponentComponent } from './route2-component.component';

describe('Route2ComponentComponent', () => {
  let component: Route2ComponentComponent;
  let fixture: ComponentFixture<Route2ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Route2ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Route2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
