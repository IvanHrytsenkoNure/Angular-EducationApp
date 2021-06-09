import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route1ComponentComponent } from './route1-component.component';

describe('Route1ComponentComponent', () => {
  let component: Route1ComponentComponent;
  let fixture: ComponentFixture<Route1ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Route1ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Route1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
