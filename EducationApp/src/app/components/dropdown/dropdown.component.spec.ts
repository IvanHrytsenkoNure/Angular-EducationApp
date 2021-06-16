import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { timer } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { MaterialModuleModule } from '../modules/material-module/material-module.module';

import { DropdownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownComponent ],
      imports:[
        FormsModule,
        ReactiveFormsModule,
        MaterialModuleModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create simple selector when have no input to it', ()=>{
    //Arrange
    const a = "asd"   

    //Act
    component.ngOnInit();

    //Assert
    expect(component.valueSelector(a)).toEqual(a);
  })

  it('should not redefine valueSelector when it passed to component as Input', ()=>{
    //Arrange
    const a = "asd"
    component.valueSelector = (obj:any)=> obj.smth;


    //Act
    component.ngOnInit();

    //Assert
    expect(component.valueSelector(a)).not.toEqual(a);
  })

  it('should make a right selection when its passed from input', ()=>{
    //Arrange
    const a = {property:"asd"}

    //
    component.valueSelector = (obj:any)=> obj.property;     

    //Assert
    expect(component.valueSelector(a)).toEqual(a.property);
  })

  it('should call onChange with passed parameter', ()=>{
    //Arrange
    const a = {property:"asd"}    
    component.ngOnInit();
    const onChangeSpy = jasmine.createSpy('onChange');
    component.registerOnChange(onChangeSpy);    
    component.dataArray = [a];

    //Act
    component.onSelect(0);

    //Assert
    expect(onChangeSpy).toHaveBeenCalledWith(component.dataArray[0]);
  })


  it('should not render the menu before clicked', ()=>{
    //Arrange
    const hostElement: HTMLElement = fixture.nativeElement;

    //Act
    fixture.detectChanges()
    const elementDisplaying = hostElement.querySelector('.selectMenu')

    //Assert
    expect(elementDisplaying).toBeFalsy();

  })


  fit('should  render the menu after clicked', ()=>{
    //Arrange    
    const triggerButton: DebugElement = fixture.debugElement.query(By.css("#triggerButton"));
    const elementDisplaying = document.querySelector(".mat-menu-panel");
    console.log("There are triggetButton anyElement of dropdown fixture under");
    console.log(triggerButton)

    //Act
    triggerButton.nativeElement.click();
    fixture.detectChanges();

    
    

    //Assert
    expect(elementDisplaying).toBeTruthy();
  })

  it('should call valueSelector with passed value', ()=>{
    
    //Assert
    const a = {property:"asd"}
    component.ngOnInit();
    const speValueSelector = spyOn(component,'valueSelector');

    //Act
    component.writeValue(a);

    //Assert
    expect(speValueSelector).toHaveBeenCalledWith(a);
  })

  it('should redefine OnTouch function when called', ()=> {
    //Arrange    
    let predefindedFunction = component.onTouch;
    var newFunc = (obj:any)=>obj;
    //var someAnotherFunc = newFunc;


    //Act
    component.registerOnTouched(newFunc);

    //Assert
    expect(component.onTouch).toEqual(newFunc);
  })


  

});



