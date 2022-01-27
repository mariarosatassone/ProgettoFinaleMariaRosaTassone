import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TabellaClientiComponent } from './tabella-clienti/tabella-clienti.component';
import { HomeComponent } from './home/home.component';
import { DettaglioClientiComponent } from './dettaglio-clienti/dettaglio-clienti.component';
import { HttpinterceptorInterceptor } from './httpinterceptor.interceptor';
import { AggiungiComponent } from './aggiungi/aggiungi.component';
import { FormsModule } from '@angular/forms';
import { ModificaClientiComponent } from './modifica-clienti/modifica-clienti.component';
import { TabellaFattureComponent } from './tabella-fatture/tabella-fatture.component';
import { DettaglioFattureComponent } from './dettaglio-fatture/dettaglio-fatture.component';
import { ModificaFattureComponent } from './modifica-fatture/modifica-fatture.component';
import { AggiungiFattureComponent } from './aggiungi-fatture/aggiungi-fatture.component';
import { AggComuneComponent } from './agg-comune/agg-comune.component';
import { AggProvinceComponent } from './agg-province/agg-province.component';
import { FattureClienteComponent } from './fatture-cliente/fatture-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TabellaClientiComponent,
    HomeComponent,
    DettaglioClientiComponent,
    AggiungiComponent,
    ModificaClientiComponent,
    TabellaFattureComponent,
    DettaglioFattureComponent,
    ModificaFattureComponent,
    AggiungiFattureComponent,
    AggComuneComponent,
    AggProvinceComponent,
    FattureClienteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpinterceptorInterceptor,
    multi: true,
   
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
