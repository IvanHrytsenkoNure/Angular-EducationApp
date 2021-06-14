import { Injectable, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }


  modalOpenStatusSource = new Subject<boolean>();
  modalContent :TemplateRef<any>;


  openModal(content : TemplateRef<any>)
  {
    this.modalContent = content;
    this.modalOpenStatusSource.next(true);
  }

  closeModal()
  {
    this.modalOpenStatusSource.next(false);
  }

}
