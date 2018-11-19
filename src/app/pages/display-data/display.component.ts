import { Component } from '@angular/core';
import { Hero } from '../../classes/hero';

@Component({
  selector: 'display-data',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayDataComponent {
  title = 'ambition';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myheroes = this.heroes[0].name;
}
