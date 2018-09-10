import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs-compat';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apikey = '75aae1ff4c70d5a20f40478420a93835';
  private urlMoviedb = 'https://api.themoviedb.org/3';
  public peliculas: any[] = [];

  constructor( private jsonp: Jsonp ) { }

  getCartelera() {
    const desde = new Date();
    const hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    const desdeStr = `${desde.getFullYear()}-${desde.getMonth() + 1}-${desde.getDate()}`;
    const hastaStr = `${hasta.getFullYear()}-${hasta.getMonth() + 1}-${hasta.getDate()}`;
    // tslint:disable-next-line:max-line-length
    const url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url)
          .map( res => res.json().results);
  }

  getPopulares() {
    const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url)
          .map( res => res.json().results);
  }

  getPopularesNinos() {
    // tslint:disable-next-line:max-line-length
    const url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url)
          .map( res => res.json().results);
  }

  buscarPelicula( texto: string ) {
    // tslint:disable-next-line:max-line-length
    const url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res => {
                  this.peliculas = res.json().results;
                  return res.json().results;
                });
  }

  getPelicula( id: string) {
    // tslint:disable-next-line:max-line-length
    const url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url)
          .map( res => res.json());
  }
}
