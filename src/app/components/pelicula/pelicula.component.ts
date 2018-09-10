import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {
  pelicula: any;
  pageBack: string;
  textoBuscar: string;

  constructor( private route: ActivatedRoute, private ps: PeliculasService) {
    this.route.params.subscribe( parametros => {
      this.pageBack = parametros['pag'];
      if (parametros['busqueda']) {
        this.textoBuscar = parametros['busqueda'];
      }
      this.ps.getPelicula( parametros['id'] )
        .subscribe( pelicula => this.pelicula = pelicula);
    });
   }

  ngOnInit() {
  }

}
