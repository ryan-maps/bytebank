import { Component } from '@angular/core';
import { TransferirTipo } from './models/transferenciaDTO.model';
import { Transferencia } from './models/transferencia.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ByteBank';
  decimalPlaces: number;

  aoSelecionarDecimalPlaces($event: number){
    this.decimalPlaces = $event;
  }
} 
