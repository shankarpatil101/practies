import{Component, Input} from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { ViewChildComponent } from './view-child-component';


@Component({
    selector : 'view-parent',
    template : `
    <h3>Countdown to Liftoff (via ViewChild)</h3>
    <button (click)="start()">Start</button>
    <button (click)="stop()">Stop</button>
    <div class="seconds">{{ seconds() }}</div>
    <view-child></view-child>
     
    `
})
export class ViewParentComponent{
    name = "Shankar Patil";

    @ViewChild(ViewChildComponent)
  private timerComponent: ViewChildComponent;
 
  seconds() { return 0; }
 
  ngAfterViewInit() {
  
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }
 
  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }
    
}