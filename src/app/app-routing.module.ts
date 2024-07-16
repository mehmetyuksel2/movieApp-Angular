import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  {path:'movies',component:MoviesComponent},//endpoint movies olması durumunda MoviesComponent i getir
  {path:'dashboard',component:DashboardComponent},
  {path:'',redirectTo:'/dashboard', pathMatch:"full"},//eğer endpoint boş ise dashboard'a yönlendir
  
  {path:'detail/:id',component:MovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
