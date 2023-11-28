import { TransferirTipo } from "./transferenciaDTO.model";

export class Transferencia {
    public static _id: number = 0;
    public valor: number;
    public destino: number;
    public id: number;
    public data: Date;

    constructor({valor, destino}: TransferirTipo) {
        this.valor = valor;
        this.destino = destino;
        this.id = Transferencia._id++;
        this.data = new Date();
    }
}