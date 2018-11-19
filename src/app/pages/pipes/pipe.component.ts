import { Component } from '@angular/core';
 
@Component({
    selector: 'pipe-message',
    template: `<h2>PipeComponent</h2>
    {{ birthday | date | uppercase}}
    {{  birthday | date:'fullDate' | uppercase}}

    {{ name | reverseStr }}

    `
})
export class PipeComponent {

    birthday = new Date(1988, 3, 15); // April 15, 1988
    toggle = true; // start with true == shortDate
    name = "Mr Shankar Patil";
  
    get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
    toggleFormat() { this.toggle = !this.toggle; }
}
