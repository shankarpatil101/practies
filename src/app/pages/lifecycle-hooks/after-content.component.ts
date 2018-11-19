import { Component, AfterContentChecked, AfterContentInit, ContentChild } from '@angular/core';
import { LoggerService } from '../../services/logger.services';

@Component({
    selector: 'after-content-parent',
    template: `
    <div class="parent">
      <h2>AfterContent</h2>
  
      <div *ngIf="show">` +
       `<after-content>
          <app-child></app-child>
        </after-content>`
  + `</div>
  
      <h4>-- AfterContent Logs --</h4>
      <p><button (click)="reset()">Reset</button></p>
      
      
    </div>
    `,
    styles: ['.parent {background: burlywood}'],
    providers: [LoggerService]
  })
  export class AfterContentParentComponent {
    show = true;
  
    constructor(public logger: LoggerService) {
    }
  
    reset() {
      this.logger.clear();
      // quickly remove and reload AfterContentComponent which recreates it
      this.show = false;
      this.logger.tick_then(() => this.show = true);
    }
  }
  
  
  /*
  Copyright 2017-2018 Google Inc. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at http://angular.io/license
  */