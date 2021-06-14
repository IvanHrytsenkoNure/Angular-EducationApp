import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Route1ComponentComponent } from './components/route1-component/route1-component.component';
import { Route2ComponentComponent } from './components/route2-component/route2-component.component';
import { ModalService } from './services/modal-service.service';
import { UserRegistrationService } from './services/user-registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild ("modalContent")
  modalContent: TemplateRef<any>;
  sharedModelHeaderName = "Shared modal header"
  formGroup: FormGroup;
  dropDownFormControl: FormControl;    
  objectsToDropDown: any[] = [];
  objectValueSelector = (obj:any)=> obj.property; 

  constructor(
    private _modalService: ModalService,
     private fb: FormBuilder,
     private _userRegistrationService : UserRegistrationService
     )
  {
  }
  
  ngOnInit(): void {
    this.fillObjectsArray(10);
    this.dropDownFormControl = this.fb.control({property:"someDefault"});
    this.formGroup = this.fb.group({ 
      dropDown: this.dropDownFormControl, 
      someAnotherControl: this.fb.control("asd")})
     console.log(this.formGroup);
  }

  openModal()
  {    
    this._modalService.openModal(this.modalContent);
  }

  onChangeClick()
  {
    console.log(this.dropDownFormControl);
    this.dropDownFormControl.setValue({property:"changedValue"});
  }

  fillObjectsArray(numberOfObjects: number)
  {
    for(let i = 0; i< numberOfObjects; i++)
    {
      this.objectsToDropDown.push({property: Math.floor(Math.random() * (100 + 100 + 1)) -100})
    }
  }


  openRegister()
  {    
    this._userRegistrationService.openModal();
  }
}
