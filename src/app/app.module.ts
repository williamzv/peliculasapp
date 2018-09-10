import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';

// Componentes
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

// Rutas
import { APP_ROUTING } from './app.routes';
import { BuscarComponent } from './components/buscar/buscar.component';

// Pipes
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { GaleriaComponent } from './components/home/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PeliculaComponent,
    BuscarComponent,
    PeliculaImagenPipe,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
