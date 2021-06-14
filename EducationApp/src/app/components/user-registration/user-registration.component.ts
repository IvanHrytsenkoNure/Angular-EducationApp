import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserRegistrationService } from 'src/app/services/user-registration.service';
import { equalityValidator } from 'src/app/validator/equalityValidator';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  formGroup: FormGroup 
  ageArray = [17,18,19,20,21,22,23,24,25];
  openStatus = this._userRegistrationService.registrationModalOpenStatusSource;

  valueValiditySubscription$ : Subscription;

  constructor(
    private _userRegistrationService : UserRegistrationService,
    private _formBuilder: FormBuilder
    ) 
    {      
    }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      name:'',
      surname:'',
      email: this._formBuilder.control('', Validators.email),
      password:this._formBuilder.control('', Validators.minLength(6)),
      passwordMatch:this._formBuilder.control('', equalityValidator('password')),
      age: this._formBuilder.control('15', Validators.min(18)),
    })
    
    this.valueValiditySubscription$ = this.formGroup.controls.password.valueChanges.subscribe(() => {
      this.formGroup .controls.passwordMatch.updateValueAndValidity();      
    });
  }

  onSubmit() {    
    console.log(this.formGroup)
    this._userRegistrationService.closeModal();
  }
  onCloseClick(){
    this._userRegistrationService.closeModal();
  }

}
