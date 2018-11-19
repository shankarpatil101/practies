import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'template-form',
    template: `<h2>Template Driven Component</h2>
    <div class="container">
    <h1>Hero Form</h1>
    <form  #heroForm="ngForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" required [(ngModel)]="model.name" name="name">
        
      </div>

      <div class="form-group">
        <label for="alterEgo">Alter Ego</label>
        <input type="text" class="form-control" id="alterEgo" [(ngModel)]="model.alterEgo" name="alterEgo">
      </div>

      <div class="form-group">
  <label for="power">Hero Power</label>
  <select class="form-control" id="power" required [(ngModel)]="model.power" name="power"s>
    <option *ngFor="let pow of powers" [value]="pow">{{pow}}</option>
  </select>
</div>

      <button type="submit" class="btn btn-success">Submit</button>

    </form>
</div>
    `
})
export class TemplateDrivenComponent {
    powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }
  newHero() {
    this.model = new Hero(42, '', '');
  }

  get diagnostic() { return JSON.stringify(this.model); }
}