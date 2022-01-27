import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AggComuneComponent } from './agg-comune/agg-comune.component';
import { AggProvinceComponent } from './agg-province/agg-province.component';
import { AggiungiFattureComponent } from './aggiungi-fatture/aggiungi-fatture.component';
import { AggiungiComponent } from './aggiungi/aggiungi.component';
import { DettaglioClientiComponent } from './dettaglio-clienti/dettaglio-clienti.component';
import { DettaglioFattureComponent } from './dettaglio-fatture/dettaglio-fatture.component';
import { FattureClienteComponent } from './fatture-cliente/fatture-cliente.component';
import { HomeComponent } from './home/home.component';
import { ModificaClientiComponent } from './modifica-clienti/modifica-clienti.component';
import { ModificaFattureComponent } from './modifica-fatture/modifica-fatture.component';
import { TabellaClientiComponent } from './tabella-clienti/tabella-clienti.component';
import { TabellaFattureComponent } from './tabella-fatture/tabella-fatture.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'tabella', component: TabellaClientiComponent},
  { path: 'cliente/aggiungi', component: AggiungiComponent},
  { path: 'fatture', component: TabellaFattureComponent},
  { path: 'fatture/:id/dettagli', component: DettaglioFattureComponent},
  { path: 'fatture/:id/modifica', component: ModificaFattureComponent},
  { path: 'tabella/:id', component: DettaglioClientiComponent},
  { path: 'tabella/:id/modifica', component: ModificaClientiComponent},
  { path: 'fatture/aggiungi', component: AggiungiFattureComponent},
  { path: 'cliente/id:/aggiungiFatture', component: AggiungiFattureComponent},
  { path: 'aggComune', component: AggComuneComponent},
  { path: 'aggProvince', component: AggProvinceComponent},
  { path: 'fattureCliente/id:', component: FattureClienteComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
