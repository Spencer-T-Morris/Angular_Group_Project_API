import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movies } from '../movies';
import { MoviesService } from '../movies.service'
@Component({
  selector: 'app-watchlist-page',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css']
})
export class WatchlistPageComponent implements OnInit {
  @Input()
  posts : any;

  @Input()
  movies : Movies[]=[];
  watchlist: Movies[]=[];
  constructor(public service: MoviesService) { 
  }

  ngOnInit(): void {
    this.posts=this.service.watchList
  }
 
}