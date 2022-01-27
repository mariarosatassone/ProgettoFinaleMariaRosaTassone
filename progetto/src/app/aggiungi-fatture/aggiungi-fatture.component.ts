import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Fatture } from '../classes/fatture';


import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-aggiungi-fatture',
  templateUrl: './aggiungi-fatture.component.html',
  styleUrls: ['./aggiungi-fatture.component.css']
})
export class AggiungiFattureComponent implements OnInit {

  fattura = {"data":"2019-07-31T16:09:43.763+00:00","numero":0,"anno":2019,"importo":1692.16,"stato":{
    "id": 2,
    "nome": "NON PAGATA"
  },
  "cliente":{"id":1}}

  fatture: Fatture = new Fatture;
 
  
  

  constructor(private fattureService: FattureService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(data=> {
      this.fattura.cliente.id = data['id']; 
       })
    

    
    
  }


  addNewFattura(): void {
    this.fattura.data = "2019-07-31T16:09:43.763+00:00";
    this.fattura.stato.nome = 'NON PAGATA';
    this.fattura.stato.id = 2;

    this.fattureService.creaNewFattura(this.fatture).subscribe();
   
    this.router.navigate(['fatture'])

  }

}
