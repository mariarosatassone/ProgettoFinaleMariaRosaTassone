import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Clienti } from '../classes/clienti';
import { Fatture } from '../classes/fatture';
import { Stato } from '../classes/stato';
import { FatturaData } from '../interfaces/fattura-data';

@Injectable({
  providedIn: 'root'
})

export class FattureService {
  getAllFatture: any;

  constructor(private http: HttpClient) { }


  getFattureByid(id: number) {
    return this.http.get<Fatture>(environment.serverAdress + "api/fatture/" + id)
  }


  rimuoviFatture(item: Fatture) {
    return this.http.get<Fatture>(environment.serverAdress +'api/fatture/' + item.id)
  }


  getAllfatture() {
   return this.http.get<FatturaData>(environment.serverAdress + 'api/fatture?page=0&size=20&sort=id,ASC');

  }

  modificafatture(fatture: Fatture) {
    return this.http.put<Fatture>(environment.serverAdress + "api/fatture/" + fatture.id, fatture)

  }


  aggiungifatture(fatture: Fatture) {
    return this.http.post<Fatture>(environment.serverAdress + "api/fatture", fatture)

  }

  getStatoById(stato: Stato) {
    return this.http.get<Stato>(environment.serverAdress + 'api/statifattura/' + stato.id)

  }

  creaNewFattura(fatture: Fatture) {
    return this.http.post<Fatture>(environment.serverAdress + 'api/fatture', fatture)


  }

  getByCliente(id: number) {
    return this.http.get<FatturaData>(environment.serverAdress + 'api/fatture/cliente/' +id + '?page=0&size=20&sort=id,DESC')
  }



  


}


