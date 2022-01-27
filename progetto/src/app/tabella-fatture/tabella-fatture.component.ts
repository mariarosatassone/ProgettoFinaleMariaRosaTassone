import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fatture } from '../classes/fatture';

import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-tabella-fatture',
  templateUrl: './tabella-fatture.component.html',
  styleUrls: ['./tabella-fatture.component.css']
})
export class TabellaFattureComponent implements OnInit {

  fatture: Fatture [] = [];

  constructor(private fattureService: FattureService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.fattureService.getAllfatture().subscribe(data => {
     this.fatture = data.content;
   })

  }


  rimuovi(item: Fatture) {
    this.fattureService.rimuoviFatture(item).subscribe(data => {
      this.fatture = this.fatture.filter(ele => ele !== item);
    })




  }

  dettagliFattura(item: Fatture) {
    this.router.navigate(['fatture', item.id,'dettagli'])
  }



}
