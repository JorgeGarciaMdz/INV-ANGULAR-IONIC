import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  @Input() class_item:string = '';
  @Input() type:string = '';
  @Input() name:string = '';
  @Input() placeholder: string = '';
  @Output() outputValue = new EventEmitter<string>();

  value:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  changeValue(e:any){
    if( e && e.target){
      this.value = e.target.value;
      this.outputValue.emit(this.value);
    }
  }

}
