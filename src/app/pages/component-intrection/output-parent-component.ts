import{Component, Input} from '@angular/core';

@Component({
    selector : 'output-parent',
    template : `
      Parent componet
      <output-child [name] ="name" (voted)='displayCounter($event)'></output-child>
    `
})
export class OutputParentComponent{
    name = "Shankar Patil";


    displayCounter(count) {
        console.log(count);
    }

}