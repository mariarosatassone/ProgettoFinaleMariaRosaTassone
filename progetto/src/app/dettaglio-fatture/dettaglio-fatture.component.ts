import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fatture } from '../classes/fatture';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-dettaglio-fatture',
  templateUrl: './dettaglio-fatture.component.html',
  styleUrls: ['./dettaglio-fatture.component.css']
})
export class DettaglioFattureComponent implements OnInit {

  fatture!: Fatture;

  constructor(private route: ActivatedRoute,private fattureService: FattureService,private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.fattureService.getFattureByid(data['id']).subscribe(response => this.fatture = response)
    })
  }

  modificaFattura(fatture: Fatture) {
    this.router.navigate(['fatture', fatture.id,'modifica'])

  }

}
