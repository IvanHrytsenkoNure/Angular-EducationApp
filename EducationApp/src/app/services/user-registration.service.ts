import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserModel } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  registrationModalOpenStatusSource = new Subject<boolean>();

  constructor() { }

  openModal()
  {
    this.registrationModalOpenStatusSource.next(true);
  }

  closeModal()
  {
    this.registrationModalOpenStatusSource.next(false);
  }

  registrateUser(userModel: UserModel)
  {
    console.log(userModel);
  }

}
