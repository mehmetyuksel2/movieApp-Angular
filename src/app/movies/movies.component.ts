import { Component } from "@angular/core";
import { Movie } from "../movie";
import { Movies } from "../movie.datasource";


@Component({
    selector: 'movies', // .movies ---> <div class="movies"></div> ---- movies <movies></movies>
    templateUrl: 'movies.component.html'
    
})
export class MoviesComponent{
    title = "Movies App(title)";

    selectedMovie = new Movie;
    showMovies : Boolean = false;

    moviess = Movies;

    onSelect(movie:Movie): void{
        this.selectedMovie= movie;
        this.showMovies=true;
    }
}
