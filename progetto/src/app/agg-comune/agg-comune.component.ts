import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comune } from '../classes/comune';
import { Provincia } from '../classes/provincia';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-agg-comune',
  templateUrl: './agg-comune.component.html',
  styleUrls: ['./agg-comune.component.css']
})
export class AggComuneComponent implements OnInit {

  comune: Comune = new Comune();
  provincia : Provincia [] = [];

  constructor(private clientiService: ClientiService,private router: Router) { }

  ngOnInit(): void {
    this.clientiService.getAllProvince().subscribe(data => {
      this.provincia = data.content;
    })

  }


  aggComune() {
    this.clientiService.getNewComune(this.comune).subscribe(data => {
      this.comune = data;
     
    })
    this.router.navigate(['cliente/aggiungi'])
  }

}
