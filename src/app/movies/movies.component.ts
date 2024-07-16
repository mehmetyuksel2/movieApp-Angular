import { Component } from "@angular/core";
import { Movie } from "../movie";
import { MovieService } from "../movie.service";


@Component({
    selector: 'movies', // .movies ---> <div class="movies"></div> ---- movies <movies></movies>
    templateUrl: 'movies.component.html'

})
export class MoviesComponent {
    title = "Movies App(title)";

    selectedMovie = new Movie;
    showMovies: Boolean = false;

    movies: Movie[] = [];

    constructor(private moviesService: MovieService) { }

    ngOnInit(): void {
        this.getMovies();
    }
    onSelect(movie: Movie): void {
        this.selectedMovie = movie;
    }
    getMovies(): void {
        this.moviesService.getMovies()
            .subscribe(movies => { this.movies = movies });
    }
}
