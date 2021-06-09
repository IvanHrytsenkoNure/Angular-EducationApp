import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route2-component',
  templateUrl: './route2-component.component.html',
  styleUrls: ['./route2-component.component.scss']
})
export class Route2ComponentComponent implements OnInit {
  
  isOpen:boolean = false;
  modalHeader: string = "Default header";  
  modalContent: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  modalClosed()
  {
    this.isOpen = false;
  }

  modal1Clicked()
  {
    this.isOpen = true;
    this.modalContent ="Modal 1 Content";
  }

  modal2Clicked()
  {
    this.isOpen = true;
    this.modalContent = "Modal 2 Content";
  }

}
