import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit {
  
  @Input() movie = new Movie;//movies.ts den gönderilen değişken çekiliyor
  id:number=0;
  constructor(private movieService: MovieService,
              private route: ActivatedRoute,//id bilgisine ulaşabilmek için route bilgisini saklıyoruz 
              private location : Location
            ){ }
  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void{
    const idParams = this.route.snapshot.paramMap.get('id');//url deki id parametresini alabilmek için
    //yazmış olduğumuz kod satırı
    if(idParams!==null){
      const id2= parseInt(idParams);//numbera çevir
      const id = this.movieService.getMovie(id2).subscribe(movie => this.movie=movie);
      //route dan gelen id parametresine bağlı olan film bilgisini this.movie ye aktar
    }
  }
  save(): void{
      this.movieService.update(this.movie).subscribe(() =>{//movie service deki update metodunu-
        //çalıştır
          this.location.back();//bir önceki sayfaya dön
      })
  }
}
