import{Component, OnInit, Input} from '@angular/core';
class Hero {
    constructor(public name: string) {}
  }

@Component({
    selector : 'do-check',
    template : `
    <h2>{{title}}</h2>
    <table>
            <tr><td>Power: </td><td><input [(ngModel)]="power"></td></tr>
            <tr><td>Hero.name: </td><td><input [(ngModel)]="hero.name"></td></tr>
    </table>
    <docheck-child [power]="power" [hero]="hero" ></docheck-child>
    `

})
export class DoCheckComponent implements OnInit{
    power : string = "Swimming";
    hero: Hero;
    title = 'DoCheck';

    ngOnInit(){
        this.hero = new Hero('Shankar');
    }
}