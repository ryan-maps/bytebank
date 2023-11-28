import { Component, Input, OnInit, Self} from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
  providers: [TransferenciaService]
})
export class ExtratoComponent implements OnInit {
  @Input() transferencias: Transferencia[] = []
  @Input() decimalPlaces: number
  constructor(@Self() private service: TransferenciaService){
    
  }
  ngOnInit(): void {
    this.service.todas()
    .subscribe(
      (transferencias: Transferencia[]) => 
      {
        console.table(transferencias)
        this.transferencias = transferencias
      }
      );
  }
}
