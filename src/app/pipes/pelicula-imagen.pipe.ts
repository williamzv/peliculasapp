import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {

  transform(pelicula: any, poster: boolean = false): string {
    const url = 'https://image.tmdb.org/t/p/w500';
    if (poster){
      return url + pelicula.poster_path;
    }
    if (pelicula.backdrop_path) {
      return url + pelicula.backdrop_path;
    } else {
      if (pelicula.poster_path) {
        return url + pelicula.poster_path;
      } else {
        return 'assets/img/noimage.png';
      }
    }
  }

}
