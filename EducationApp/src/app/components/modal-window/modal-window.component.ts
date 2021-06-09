import { NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal-service.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {

  content: TemplateRef<any>;
  header: string = "ModalHeader";

  isOpen : boolean = false 

  constructor(private _modalService: ModalService) { }

  
  ngOnInit(): void {
    console.log("OnInitModal")
    this._modalService.modalOpenStatusSource.subscribe((status)=> 
    {
      this.isOpen = status;
      this.content = this._modalService.modalContent;
    }
    )
  }


  onCloseClick()
  {
    this._modalService.closeModal();
  }
  
}
