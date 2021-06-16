import { Component, forwardRef, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers:[
    
    ]
})
export class InputComponent implements OnInit, ControlValueAccessor {

  displayingValue: any;
  onChange :any;
  onTouch:any;
  @Input() warningMessage: string;
  @Input() labelContent:string


  constructor(@Self() @Optional() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
    
  } 
  writeValue(obj: any): void {
    this.displayingValue = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }


  onInputChange(event:any)
  {
        
    this.onChange(this.displayingValue);
    //this.ngControl.control?.updateValueAndValidity();
  }

  ngOnInit(): void {
  }

}
