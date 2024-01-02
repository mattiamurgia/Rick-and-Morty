import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Output() sliceNumber = new EventEmitter<number>();
  currentValue!: string | number;

  setSlice(value: number) {
    this.sliceNumber.emit(value);
    this.currentValue = value === 20 ? '' : value;
  }
}
