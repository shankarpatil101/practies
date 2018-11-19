import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LifecycleHooksComponent } from './lifecycle-hooks.component';
import { OnChangeParentClassComponent } from './on-change-parent.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { OnChangeChildComponent } from './on-change-child.component';
import { DoCheckComponent } from './docheck-parent.component';
import { DocheckChildComponent } from './docheck-child.component';
import { AfterContentParentComponent } from './after-content.component';
import { ChildComponent } from './after-content-child.component';
import { AfterContentComponent } from './app-child';
import { ChildViewComponent, AfterViewComponent, AfterViewParentComponent } from './after-view.component';


@NgModule({
    declarations: [LifecycleHooksComponent, 
                  OnChangeParentClassComponent, 
                  OnChangeChildComponent,
                  DoCheckComponent,
                  DocheckChildComponent,
                  AfterContentParentComponent,
                  ChildComponent,
                  AfterContentComponent,
                  ChildViewComponent,
                  AfterViewComponent,
                  AfterViewParentComponent],
    exports: [LifecycleHooksComponent,
               OnChangeParentClassComponent,
              OnChangeChildComponent, 
              DoCheckComponent, 
              DocheckChildComponent,
              AfterContentParentComponent,
              ChildComponent,
              AfterContentComponent,
              ChildViewComponent,
              AfterViewComponent,
              AfterViewParentComponent
              ],
  imports: [CommonModule, BrowserModule, FormsModule],
})
export class LifecycleHooksModule { }