import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {

  @Input() content: string = "";
  @Input() header: string = "";

  @Output() closeEvent = new EventEmitter<string>();

  constructor() { }

  onCloseClick()
  {
    this.closeEvent.emit();
  }

  ngOnInit(): void {
    
  }

}
