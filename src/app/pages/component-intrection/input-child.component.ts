import{Component, Input} from '@angular/core';
import { Hero } from '../../classes/hero';

@Component({
    selector : 'input-child',
    template : `
        

         <h3>"{{name}}"</h3>'

    `
    // <h3>{{hero.name}} says:</h3>
    //      <p>I, {{hero.name}}, am at your service, {{masterName}}.</p>
})
export class InputChildComponent{
    @Input() hero: Hero;
    @Input('master') masterName: string;
  
    private _name = '';
 
  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }
 
  get name(): string { return this._name; }

}