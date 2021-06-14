import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    multi:true,
    useExisting:forwardRef(()=> DropdownComponent)
  }]
})
export class DropdownComponent implements OnInit, ControlValueAccessor {

  @Input() dataArray: any[];
  @Input() valueSelector:any;
  displayingValue = "inDropDownDefinedValue";

  isMenuDisplayed: boolean = false;
  constructor() { }

  ngOnInit(): void {    
    if(!this.valueSelector)
    {
      this.valueSelector = (obj:any) => obj;
    }
  }

  writeValue(obj: any): void {    
    this.displayingValue = this.valueSelector(obj);    
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  
  onChange :any;
  onTouch:any;

  onDisplayingElementClick()
  {
    this.isMenuDisplayed = !this.isMenuDisplayed;
  }

  onSelect(index: number)
  {    
    this.displayingValue = this.valueSelector(this.dataArray[index]);
    this.onChange(this.dataArray[index]);
    this.isMenuDisplayed = !this.isMenuDisplayed;
  }
}
