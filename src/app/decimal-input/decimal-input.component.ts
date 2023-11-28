import { Component, EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-decimal-input',
  templateUrl: './decimal-input.component.html',
  styleUrls: ['./decimal-input.component.scss'],
  outputs: ['decimalPlaces']
})
export class DecimalInputComponent {
  @Output() selecionaDecimalPlaces = new EventEmitter<number>();
  decimalPlaces: number = 2;
  handleSelection($event){
    this.selecionaDecimalPlaces.emit(this.decimalPlaces);
  }
}
