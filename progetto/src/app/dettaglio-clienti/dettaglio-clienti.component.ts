import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Clienti } from '../classes/clienti';
import { Fatture } from '../classes/fatture';
import { ClientiService } from '../services/clienti.service';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-dettaglio-clienti',
  templateUrl: './dettaglio-clienti.component.html',
  styleUrls: ['./dettaglio-clienti.component.css']
})
export class DettaglioClientiComponent implements OnInit {

  cliente!: Clienti;
  fattura: Fatture[] = [];

  constructor(private route: ActivatedRoute,private clientiService: ClientiService, private router: Router, private fattureService: FattureService) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.clientiService.getClientiById(data['id']).subscribe(response => this.cliente = response)
      this.fattureService.getByCliente(data['id']).subscribe(response => this.fattura = response.content
        )
    });
  }


  modifica(cliente: Clienti) {
    this.router.navigate(['tabella', cliente.id, 'modifica'])
    
  }

  aggFattura(cliente: Clienti) {
    this.router.navigate(['cliente', cliente.id,'aggiungiFatture']);

  }

  dettaglifattura(cliente: Clienti) {
    this.router.navigate(['fatture',cliente.id,'cliente'])
  }


  

}
