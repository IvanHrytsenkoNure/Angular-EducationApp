import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Route1ComponentComponent } from './components/route1-component/route1-component.component';
import { Route2ComponentComponent } from './components/route2-component/route2-component.component';
import { ModalService } from './services/modal-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild ("modalContent")
  modalContent: TemplateRef<any>;
  sharedModelHeaderName = "Shared modal header"

  constructor(private _modalService: ModalService)
  {

  }

  openModal()
  {
    this._modalService.openModal(this.modalContent);
  }


}
