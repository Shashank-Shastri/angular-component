import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  favoriteFood = '';
  favoriteMusic = '';
  favoriteCountry = '';

  updateFavoriteFood(food: string) {
    this.favoriteFood = food;
  }

  updateFavoriteMusic(music: string) {
    this.favoriteMusic = music;
  }

  updateFavoriteCountry(country: string) {
    this.favoriteCountry = country;
  }

  title = 'drop-down';
}
