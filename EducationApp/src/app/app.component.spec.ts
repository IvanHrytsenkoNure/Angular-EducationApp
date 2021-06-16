import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';


import { AppComponent } from './app.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ModalService } from './services/modal-service.service';

describe('AppComponent', () => {
  let fixture : ComponentFixture<AppComponent>;
  let component: AppComponent;
  let serviceStub : Partial<ModalService>;
  serviceStub = {
    openModal: ()=>{console.log("inServiceStubMethod")}
  }
  let dropdownComponent: DropdownMock;
  let modalService: ModalService;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        DropdownMock,
      ],
      providers:[{ provide: ModalService, useValue: serviceStub }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    modalService = fixture.debugElement.injector.get(ModalService);

    fixture.detectChanges();
  });

  function getDropdownMockComponent(): DropdownMock {
    return fixture.debugElement.query(By.directive(DropdownMock)).componentInstance;
  }

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call writeValue in dropdown when we click change', async ()=>{
    //Assert
    fixture.detectChanges();
    await fixture.whenStable();

    //Act
    component.onChangeClick();   

    //Arrange
    
    expect(getDropdownMockComponent().writeValue).toHaveBeenCalled();
  })

  it('should change formControlValue when click onChange', ()=>{
    //Assert
    fixture.detectChanges()
    const value = component.formGroup.get('dropDown')?.value;
    //Act
    component.onChangeClick();
    //Assert
    expect(component.formGroup.get('dropDown')?.value).not.toEqual(value);
  })

  it('should call openModal service method', ()=> {
    //Arrange
    fixture.detectChanges();
    const openModalSpy = spyOn(modalService, 'openModal')

    //Act
    component.openModal();
    
    //Assert
    expect(openModalSpy).toHaveBeenCalled();
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