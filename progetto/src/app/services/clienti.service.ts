import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Clienti } from '../classes/clienti';
import { ClientiData } from '../interfaces/clienti-data';
import { ComuneData } from '../interfaces/comune-data';
import { ProvinciaData } from '../interfaces/provincia-data';
import { Comune } from '../classes/comune';
import { Provincia } from '../classes/provincia';
import { Fatture } from '../classes/fatture';


@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  //tenantID = 'fe_0621';
  //bearerToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA0MTEyNiwiZXhwIjoxNjQzOTA1MTI2fQ.HgwgFFhQhcK56ijITMIiPqGMFZqwJuTnCUnwEoA03aRMRmX3VZ4jIGHF4sSixzvQXZKmtbyl43zkbnERZqGZnA'
  //headers = new HttpHeaders();
  constructor(private http: HttpClient) {
    //this.headers = this.headers
    // .set("Authorization", this.bearerToken)
    //.set("X-TENANT-ID", this.tenantID)
  }


  getClientiById(id:number) {
    return this.http.get<Clienti>(environment.serverAdress + "api/clienti/" + id)
  }

  rimuoviCliente(cliente: Clienti) {
    return this.http.delete(environment.serverAdress + "api/clienti/" + cliente.id)
  }

  modificaCliente(cliente: Clienti) {
    return this.http.put<Clienti>(environment.serverAdress + "api/clienti/" + cliente.id, cliente)
  }



  getAllClienti() {
    //return this.http.get<ClientiData>(environment.serverAdress+'api/clienti?page=0&size=20&sort=id,ASC', {headers: this.headers})
    return this.http.get<ClientiData>(environment.serverAdress + 'api/clienti?page=0&size=20&sort=id,DESC');
  }


  aggiungiCliente(cliente: Clienti) {
    return this.http.post<Clienti>(environment.serverAdress + "api/clienti", cliente)

  }

  getTipiCliente() {
    return this.http.get<string[]>(environment.serverAdress + "api/clienti/tipicliente")
  }

  getAllComuni() {
    return this.http.get<ComuneData>(environment.serverAdress + 'api/comuni?page=0&size=20&sort=id,DESC')
    
  }


  getAllProvince() {
    return this.http.get<ProvinciaData>(environment.serverAdress + 'api/province?page=0&size=20&sort=id,DESC')
  }

  getNewComune(comune: Comune) {
    return this.http.post<Comune>(environment.serverAdress + 'api/comuni',comune)
  }

  getNewProvince(province: Provincia) {
    return this.http.post<Provincia>(environment.serverAdress + 'api/province',province)
  }


  


 





}
