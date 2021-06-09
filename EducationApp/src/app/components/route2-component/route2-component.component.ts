import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/services/modal-service.service';

@Component({
  selector: 'app-route2-component',
  templateUrl: './route2-component.component.html',
  styleUrls: ['./route2-component.component.scss']
})
export class Route2ComponentComponent implements OnInit {
  
  @ViewChild ("modalContent1")
  modalContent1: TemplateRef<any>;

  @ViewChild ("modalContent2")
  modalContent2: TemplateRef<any>;

  constructor(private _modalService : ModalService) { }

  ngOnInit(): void {
  }

  modal1Clicked()
  {
    this._modalService.openModal(this.modalContent1);
  }

  modal2Clicked()
  {
    this._modalService.openModal(this.modalContent2);
  }

}
