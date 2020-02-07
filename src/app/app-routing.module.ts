import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WatchlistPageComponent } from './watchlist-page/watchlist-page.component';
import { AppComponent } from './app.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'home',
    component: WatchlistPageComponent
  },
  {
    path: 'home',
    component: SearchCriteriaComponent
  },
  {
    path: 'home',
    component: MovieListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
