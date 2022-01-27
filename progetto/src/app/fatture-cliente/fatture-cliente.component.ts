import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clienti } from '../classes/clienti';
import { Fatture } from '../classes/fatture';
import { ClientiService } from '../services/clienti.service';


@Component({
  selector: 'app-fatture-cliente',
  templateUrl: './fatture-cliente.component.html',
  styleUrls: ['./fatture-cliente.component.css']
})
export class FattureClienteComponent implements OnInit {

 cliente: Clienti = new Clienti;
 


  

  constructor(private clienteService: ClientiService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.cliente.id  = data['id'];
       
    })
  }

}
