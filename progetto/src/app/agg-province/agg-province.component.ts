import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Provincia } from '../classes/provincia';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-agg-province',
  templateUrl: './agg-province.component.html',
  styleUrls: ['./agg-province.component.css']
})
export class AggProvinceComponent implements OnInit {

  provincia : Provincia = new Provincia;

  constructor(private clienteService: ClientiService, private router: Router) { }

  ngOnInit(): void {
  }

  aggProvincia() {
    this.clienteService.getNewProvince(this.provincia).subscribe(data => {
      this.provincia = data;
    
    })
    this.router.navigate(['aggComune'])
  }




}
