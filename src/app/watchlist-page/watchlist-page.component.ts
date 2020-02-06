import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movies } from '../movies';

@Component({
  selector: 'app-watchlist-page',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css']
})
export class WatchlistPageComponent implements OnInit {
@Input()
  add: Movies;
@Input()
  watchList : Movies[] =[];
@Output() newMovie= new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
  }
 addWatchList(){
  //this.newMovie.emit({add: Movies.data})
 }
}
