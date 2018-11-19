import{Component, OnInit, Input} from '@angular/core';
class Hero {
    constructor(public name: string) {}
  }
@Component({
    selector : 'docheck-child',
    template : `
        hero name is {{hero.name}} and Hoobies {{power}}
        <div *ngFor="let chg of changeLog">{{chg}}</div>
    `

})
export class DocheckChildComponent implements OnInit{
    @Input() hero: Hero;
    @Input() power: string;

    changeDetected = false;
    changeLog: string[] = [];
    oldHeroName = '';
    oldPower = '';
    oldLogLength = 0;
    noChangeCount = 0;

    ngOnInit(){

    }
    ngDoCheck(){
        if (this.hero.name !== this.oldHeroName) {
            this.changeDetected = true;
            this.changeLog.push(`DoCheck: Hero name changed to "${this.hero.name}" from "${this.oldHeroName}"`);
            this.oldHeroName = this.hero.name;
          }
    }
}