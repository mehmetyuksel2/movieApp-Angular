import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movie.datasource';
import { Observable,of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  private apiMoviesUrl = "api/movies";
  id: number = 0;
  constructor(private loggingService: LoggingService,
              private http: HttpClient
  ) { }

  getMovies(): Observable<Movie[]>{
    this.loggingService.add('MovieService: listing movies');
    return this.http.get<Movie[]>(this.apiMoviesUrl);
    //http üzerinden alınan bilgilerin geri döndürülmesi
  }


  getMovie(id:number): Observable<Movie>{


    if(id){
      this.loggingService.add('MovieService: get movie detail by id='+id);
      return this.http.get<Movie>(this.apiMoviesUrl+"/"+id);
    }else{
      throw new Error(`Movie with id ${id} not found`);
    }
  }
}
