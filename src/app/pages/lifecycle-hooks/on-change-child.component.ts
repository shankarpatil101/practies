import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
@Component({
    selector : 'on-chang-child',
    template : `
        
        <h4>-- Change Log --</h4>
    <div *ngFor="let chg of changeLog">{{chg}}</div>
    `
})
export class OnChangeChildComponent implements OnInit{
    @Input() power: string;
  @Input() name: string;

  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  ngOnInit(){
    console.log("NG Onit");
  }


  reset() { this.changeLog = []; }
  
}