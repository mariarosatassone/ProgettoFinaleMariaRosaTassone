import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Clienti } from '../classes/clienti';
import { Fatture } from '../classes/fatture';
import { ClientiService } from '../services/clienti.service';
import { FattureService } from '../services/fatture.service';


@Component({
  selector: 'app-fatture-cliente',
  templateUrl: './fatture-cliente.component.html',
  styleUrls: ['./fatture-cliente.component.css']
})
export class FattureClienteComponent implements OnInit {

 cliente: Clienti = new Clienti;
 fattura: Fatture[] = [];



 
 


  

  constructor(private clienteService: ClientiService, private router: Router,private route: ActivatedRoute,private fattureService: FattureService) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.fattureService.getByCliente(data['id']).subscribe(response => {
        this.fattura = response.content;

      })
      
    
       
    })
  }

}
