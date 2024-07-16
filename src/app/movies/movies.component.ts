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

    add(name:string, imageUrl:string, description:string): void{
        this.moviesService.add({
            name,
            imageUrl,
            description
        } as Movie).subscribe(movie=> this.movies.push(movie)); //as ile obje cinsindeki veriyi Movie tipine convert ediyoruz

    }

    delete(movie: Movie): void{
        this.movies = this.movies.filter(m=> m!==movie);
        this.moviesService.delete(movie).subscribe();
    }
}
