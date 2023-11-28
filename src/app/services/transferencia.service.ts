import { Injectable, Self } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferirTipo } from '../models/transferenciaDTO.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private _listaTransferencias: Transferencia[] = [];
  private url = 'http://localhost:3000/transferencias'
  constructor(private httpClient: HttpClient) {
    console.log('Novo transferênciaService');
    this._listaTransferencias = [];
  }

  public get listaTransferencias(): Transferencia[] {
    return this._listaTransferencias;
  }

  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionarTransferencia(transferenciaDTO: TransferirTipo): Observable<Transferencia>{
    const transferencia = new Transferencia(transferenciaDTO);
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }


}
