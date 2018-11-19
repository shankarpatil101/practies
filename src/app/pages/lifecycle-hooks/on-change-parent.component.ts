import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { OnChangeChildComponent } from './on-change-child.component';
@Component({
    selector : 'on-chang-parent',
    template : `
    <h2>{{title}}</h2>
        <span>Power :</span><input [(ngModel)]="power">
        <br>
        <span>Hero Name :</span><input [(ngModel)]="name">
        <p><button (click)="reset()">Reset Log</button></p>
        <on-chang-child [power]="power" [name]="name"></on-chang-child>
    `
})
export class OnChangeParentClassComponent implements OnInit{
    power : string;
    name: string;
    title : string ="ngOnChange";
    @ViewChild(OnChangeChildComponent) childView: OnChangeChildComponent;

    constructor() {
        this.power ="Super";
        this.name = "Amithabh";
        
      }
    ngOnInit(){
        this.reset();
        

    }

    reset() {
        if (this.childView) { this.childView.reset(); }
      }
}