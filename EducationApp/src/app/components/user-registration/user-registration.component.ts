import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/models/userModel';
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

    let userModel: UserModel = {
      name: this.formGroup.get('name')?.value,
      surname: this.formGroup.get('surname')?.value,
      email: this.formGroup.get('email')?.value,
      password: this.formGroup.get('password')?.value,
      age: this.formGroup.get('age')?.value,
    }
    this._userRegistrationService.registrateUser(userModel);
    this._userRegistrationService.closeModal();
  }
  onCloseClick(){
    this._userRegistrationService.closeModal();
  }

}
