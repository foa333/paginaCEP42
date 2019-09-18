import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule}from '@angular/common/http';

import { AppComponent } from './app.component';

import { HolamundoComponenteComponent } from './holamundo-componente/holamundo-componente.component';
import { DatosService } from './datos.service';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { InfoEscuelaComponenteComponent } from './info-escuela-componente/info-escuela-componente.component';
import { EgresadosComponenteComponent } from './egresados-componente/egresados-componente.component';
import { GaleriaComponenteComponent } from './galeria-componente/galeria-componente.component';


@NgModule({
  declarations: [
    AppComponent,
    HolamundoComponenteComponent,
    BarraNavegacionComponent,
    InfoEscuelaComponenteComponent,
    EgresadosComponenteComponent,
    GaleriaComponenteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
