import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clienti } from '../classes/clienti';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-modifica-clienti',
  templateUrl: './modifica-clienti.component.html',
  styleUrls: ['./modifica-clienti.component.css']
})
export class ModificaClientiComponent implements OnInit {


  cliente: Clienti = new Clienti;
  tipiCliente: string[] = [];

  constructor(private route: ActivatedRoute, private clientiService: ClientiService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.clientiService.getClientiById(data['id']).subscribe(response => this.cliente = response)
    })
      

  }

  salva() {
    this.clientiService.modificaCliente(this.cliente).subscribe(data => {
      this.cliente = data
    })
    this.router.navigate(['cliente/aggiungi'])
  }

}
