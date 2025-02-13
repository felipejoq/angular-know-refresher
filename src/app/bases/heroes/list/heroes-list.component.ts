import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css'
})
export class HeroesListComponent {

  private heroesList = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  public lastHeroRemoved: string | undefined;

  get hideButton() {
    return this.heroesList.length > 0;
  }

  get heroes() {
    return this.heroesList;
  }

  removeLastHero() {
    this.lastHeroRemoved = this.heroesList.pop();
  }

  removeFirstHero() {
    this.lastHeroRemoved = this.heroesList.shift();
  }
  reset() {
    this.heroesList = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  }
}
