import { AfterContentChecked, AfterContentInit, Component, ContentChild } from '@angular/core';


//////////////////
@Component({
  selector: 'app-child',
  template: '<input [(ngModel)]="hero">'
})
export class ChildComponent {
  hero = 'Magneta';
}
