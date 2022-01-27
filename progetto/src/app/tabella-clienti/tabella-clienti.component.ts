import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clienti } from '../classes/clienti';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-tabella-clienti',
  templateUrl: './tabella-clienti.component.html',
  styleUrls: ['./tabella-clienti.component.css']
})
export class TabellaClientiComponent implements OnInit {

  cliente: Clienti [] = [];
 
  constructor(private clientiService: ClientiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.clientiService.getAllClienti().subscribe(data => {
      this.cliente = data.content;
    })
  }

  dettagli(item: Clienti) { 
    this.router.navigate(['tabella', item.id])
  }

  rimuovi(item: Clienti) {
    this.clientiService.rimuoviCliente(item).subscribe(p => {
      this.cliente = this.cliente.filter(ele => ele !== item);

    })
    

  }

}
