import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Clienti } from '../classes/clienti';
import { Comune } from '../classes/comune';
import { Fatture } from '../classes/fatture';
import { Provincia } from '../classes/provincia';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-aggiungi',
  templateUrl: './aggiungi.component.html',
  styleUrls: ['./aggiungi.component.css']
})
export class AggiungiComponent implements OnInit {

  cliente: Clienti = new Clienti();
  tipiCliente: string[] = [];
  comuni: Comune[] = [];
  province: Provincia[] = [];





  constructor(private clientiService: ClientiService, private router: Router) { }

  ngOnInit(): void {
    this.clientiService.getTipiCliente().subscribe(data => {
      this.tipiCliente = data;
    });
    this.clientiService.getAllComuni().subscribe(data => {
      this.comuni = data.content;
    })

  }


  add(): void {
    this.cliente.dataInserimento = "2019-06-01T08:11:01.911+00:00"
    this.cliente.dataUltimoContatto = "2021-03-24T21:32:06.375+00:00"
    this.clientiService.aggiungiCliente(this.cliente).subscribe(response => {
      this.cliente = response;
   
    })
    this.router.navigate(['tabella'])


  }



}
