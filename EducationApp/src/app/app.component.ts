import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Route1ComponentComponent } from './components/route1-component/route1-component.component';
import { Route2ComponentComponent } from './components/route2-component/route2-component.component';
import { ModalService } from './services/modal-service.service';

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
  

  elemetsToDropdown: string[] = ["eng", "ru", "ukr", "blr"];

  constructor(private _modalService: ModalService, private fb: FormBuilder)
  {

  }
  ngOnInit(): void {
    
    this.dropDownFormControl = this.fb.control({value:"someDefault"});
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
    this.dropDownFormControl.setValue({value:"changedValue"});
  }



}
