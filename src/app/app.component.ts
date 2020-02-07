import { Component } from '@angular/core';
import { Movies } from './movies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies-api';
  showOnStart = true
  show = false
  appear(){
    this.show=!this.show;
    this.showOnStart=!this.showOnStart;
  }
}

