import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit {
  
  @Input() movie = new Movie;

  constructor(){

  }
  ngOnInit(): void {
    
  }
}
