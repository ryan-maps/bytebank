import { Component, EventEmitter, Output } from "@angular/core";
import { TransferirTipo } from "../models/transferenciaDTO.model";
import { TransferenciaService } from "../services/transferencia.service";
import { Router } from "@angular/router";
import { element } from "protractor";


@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss',]
})
export default class NovaTransferenciaComponent {
    transferencia: TransferirTipo = {
        valor: 0,
        destino: 0
    }
    constructor(private service: TransferenciaService, private router: Router){

    }
    transferir() {
        this.service.adicionarTransferencia(this.transferencia)
        .subscribe(resultado => {
            console.log(resultado);
            this.limparCampos();
            this.router.navigateByUrl('extrato')
        },
        (error) => console.error(error));
    }
    limparCampos() {
        this.transferencia = {
            valor: 0,
            destino: 0
        }
    }
}