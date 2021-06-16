import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { Component, forwardRef, Input, OnInit, Optional, Self } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlValueAccessor, FormsModule, NgControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from 'rxjs';
import { UserModel } from 'src/app/models/userModel';
import { UserRegistrationService } from 'src/app/services/user-registration.service';
import { InputComponent } from '../input/input.component';
import { MaterialModuleModule } from '../modules/material-module/material-module.module';
import { UserRegistrationComponent } from './user-registration.component';

describe('UserRegistrationComponent', () => {
  let component: UserRegistrationComponent;
  let fixture: ComponentFixture<UserRegistrationComponent>;
  let serviceStub : Partial<UserRegistrationService>;
  serviceStub = {
    registrationModalOpenStatusSource: new Subject<boolean>(),
    registrateUser: ()=>{console.log("inServiceStubMethod")},
    closeModal: ()=>{},    
  }

  let dropdownComponent: DropdownMock;
  let InputComponent: InputMock;
  let userRegistrationService: UserRegistrationService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModuleModule,
        RouterTestingModule,
        MatNativeDateModule
      ],
      declarations: [ UserRegistrationComponent, DropdownMock, InputMock],
      providers:[{ provide: UserRegistrationService, useValue: serviceStub }],      

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationComponent);
    component = fixture.componentInstance;
    
    userRegistrationService= fixture.debugElement.injector.get(UserRegistrationService);
    fixture.detectChanges();
  });
  afterAll(()=>{
    component.openStatus.next(false);
    fixture.detectChanges();
  })

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
    const spy = spyOn(userRegistrationService, 'registrateUser');

    //Act
    component.onSubmit()

    //Assert
    expect(spy).toHaveBeenCalledWith(userModel);
  })

  

    describe('', ()=>{
      it('should render warning messages when there are invalid data in form', ()=>{
        //Assert  
        component.openStatus.next(true);
        let userModel : UserModel = {
          age: 17,
          name: "nameUser",
          surname: 'surnameUser',
          email: 'emailUser',
          password:'12345',      
        }
        component.formGroup.patchValue({
          name: userModel.name,
          surname: userModel.surname,
          email: userModel.email,
          password: userModel.password,
          age: userModel.age,
          passwordMatch: userModel.password+"6"
        })
        component.formGroup.controls['age'].markAsTouched({onlySelf:true});
    
        //Act
        fixture.detectChanges();    
        
        const invalidMessagesArray = fixture.debugElement.queryAll(By.css('.invalid-data'));
    
        //Assert
        expect(invalidMessagesArray.length).toEqual(4);
      })      
    })

    describe('form is valid', () => {
      it('should not render warning messages when there are invalid data in form', ()=>{
        //Assert  
        component.openStatus.next(true);
        let userModel : UserModel = {
          age: 19,
          name: "nameUser",
          surname: 'surnameUser',
          email: 'emailUser@asd',
          password:'123456',      
        }
        component.formGroup.patchValue({
          name: userModel.name,
          surname: userModel.surname,
          email: userModel.email,
          password: userModel.password,
          age: userModel.age,
          passwordMatch: userModel.password
        })
        component.formGroup.controls['age'].markAsTouched({onlySelf:true});
          
        //Act
        fixture.detectChanges();          
        const invalidMessageDiv = fixture.debugElement.query(By.css('.invalid-data'));
        
        //Assert
        expect(invalidMessageDiv).toBeFalsy();
      })
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


@Component({
  selector: 'app-input',
  template: ' <label for="field">{{labelContent}}</label>'+
  ' <input id="field" type="text" (input)="onInputChange($event)" [(ngModel)]="displayingValue">'+
  ' <div class="invalid-data"  *ngIf="ngControl.control?.invalid "> {{warningMessage}}  </div>' ,
  styles: [],
  providers:[
    
    ]
})
export class InputMock implements OnInit, ControlValueAccessor {

  displayingValue: any;
  onChange :any;
  onTouch:any;
  @Input() warningMessage: string;
  @Input() labelContent:string


  constructor(@Self() @Optional() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
    
  } 
  writeValue(obj: any): void {
    this.displayingValue = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }


  onInputChange(event:any)
  {
        
    this.onChange(this.displayingValue);
    
  }

  ngOnInit(): void {
  }

}

