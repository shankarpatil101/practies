import{Component} from '@angular/core';
import { HEROES } from '../../classes/hero';

@Component({
    selector : 'input-parent',
    template : `
    <h2>{{master}} controls {{heroes.length}} heroes</h2>
    
    <input-child *ngFor="let name of names" [name]="name"></input-child>
    `
    // <input-child *ngFor="let hero of heroes" [hero]="hero"  [master]="master"></input-child>
})
export class InputParentComponent{
    heroes = HEROES;
     master = 'Master';
     names = ['Mr. IQ', '   ', '  Bombasto  '];

}