import{Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
    selector : 'output-child',
    template : `
      child componet {{name}}
      <button (click)="vote()" >Send Data</button>
    `
})
export class OutputChildComponent{
    @Input()  name: string;
    @Output() voted = new EventEmitter<string>();

    
    vote(agreed: boolean) {
        this.voted.emit("Raje");
      }
    
}