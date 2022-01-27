import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fatture } from '../classes/fatture';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-modifica-fatture',
  templateUrl: './modifica-fatture.component.html',
  styleUrls: ['./modifica-fatture.component.css']
})
export class ModificaFattureComponent implements OnInit {

  fatture: Fatture = new Fatture;

  constructor(private route: ActivatedRoute, private fattureService: FattureService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.fattureService.getFattureByid(data['id']).subscribe(response => this.fatture = response);
    })
  }


  aggiornare() {
    this.fattureService.modificafatture(this.fatture).subscribe()
    this.router.navigate(['fatture'])
  }


  

}
