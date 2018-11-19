import { Component } from "@angular/core";
// import {Observable} from 'rxjs/Observable';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'observable-component',
    template: `<h2>Observable</h2>
    <p class="card-text" ngNonBindable>{{ observable$ | async }}  </p>
    <p class="card-text">{{ observable$ | async }}</p>
  
    <p class="card-text" ngNonBindable>{{ observableData }}  </p>
    <p class="card-text">{{ observableData }}</p>
    `
})
export class ObservableComponent {
    observable$: Observable<number>;
  subscription: Object = null;
  observableData: number;

    constructor() {
        this.observable$ = this.getObservable();
        this.subscribeObservable();
      }

    getObservable() { 
        return Observable.interval(1000)
            .take(10)
            .map((v) => v * v);
      }

      subscribeObservable() {
        this.subscription = this.getObservable().subscribe(
          v => (this.observableData = v)
        );
      }

}