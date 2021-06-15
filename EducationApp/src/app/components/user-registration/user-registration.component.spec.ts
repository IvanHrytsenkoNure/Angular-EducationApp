import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { UserModel } from 'src/app/models/userModel';
import { UserRegistrationService } from 'src/app/services/user-registration.service';

import { UserRegistrationComponent } from './user-registration.component';

describe('UserRegistrationComponent', () => {
  let component: UserRegistrationComponent;
  let fixture: ComponentFixture<UserRegistrationComponent>;
  let serviceStub : Partial<UserRegistrationService>;
  serviceStub = {
    registrateUser: ()=>{console.log("inServiceStubMethod")},
    closeModal: ()=>{}
  }
  let dropdownComponent: DropdownMock;
  let userRegistration: UserRegistrationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],

      declarations: [ UserRegistrationComponent, DropdownMock ],
      providers:[{ provide: UserRegistrationService, useValue: serviceStub }]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationComponent);
    component = fixture.componentInstance;
    userRegistration= fixture.debugElement.injector.get(UserRegistrationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call registration with form controls values', ()=>{
    //Assert 
    let userModel : UserModel = {
      age: 18,
      name: "nameUser",
      surname: 'surnameUser',
      email: 'emailUser',
      password:'passwordUser',      
    }
    component.formGroup.patchValue({
      name: userModel.name,
      surname: userModel.surname,
      email: userModel.email,
      password: userModel.password,
      age: userModel.age
    })
    const spy = spyOn(userRegistration, 'registrateUser');


    //Act
    component.onSubmit()


    //Assert
    expect(spy).toHaveBeenCalledWith(userModel);


  })


});
@Component({
  selector: 'app-dropdown',
  template: '<div><div>',
  styles: [''],
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    multi:true,
    useExisting:forwardRef(()=> DropdownMock)
  }]
})
export class DropdownMock implements OnInit, ControlValueAccessor {

  @Input() dataArray: any[];
  @Input() valueSelector:any;

  constructor() { }

  ngOnInit(): void {    
  
  }

  writeValue = jasmine.createSpy('writeValue');
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }
  
}
