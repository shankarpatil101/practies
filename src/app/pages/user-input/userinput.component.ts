import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'user-input',
    templateUrl: './userinput.component.html',
    styleUrls: ['./userinput.component.scss']
  })
  export class UserInputComponent{

    message = '';
   
    onClickMe(){
        this.message = "this is click event Trigger !!!!";
    }
    
}


@Component({
    selector: 'user-input-keyup',
    template: ` <input (keyup)="onKey($event)">
    <p>{{values}}</p> `,
  })
  export class UserInputKeyUpComponent{

    values = '';

    onKey(event: KeyboardEvent) { 
      this.values += (<HTMLInputElement>event.target).value + ' | ';
    }
}


@Component({
  selector: 'app-loop-back',
  template: `
    <input #box (keyup)="0">By Template Reference
    <p>{{box.value}}</p>
  `
})
export class LoopbackComponent {
  values = '';
  onKey(value: string) {
    this.values += value + ' | ';
  }
 }

@Component({
  selector : 'key-up-enter',
  template : `
    <input #demo (keyup.enter)="keyEnter(demo.value)">keyup.enter event
    <p>{{value}}</p>
  `
})
export class KayUpEnter{
  value = '';
  keyEnter(value: string){
    this.value = value; 
  }
}
  

@Component({
  selector : 'put-all-together',
  template : `
      <input #demo (keyup.enter)= "PutTogether(demo.value);demo.value=''" >

      <ul>
        <li *ngFor="let kk of names">{{kk}}</li>
       </ul> 
  `
})
export class AllTogether{
  names =['Arya', 'Shabhu', 'Anushri', 'gaytri'];

  PutTogether(value: string){
    this.names.push(value);
  }
}