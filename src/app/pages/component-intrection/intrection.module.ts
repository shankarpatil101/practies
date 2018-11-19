import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputParentComponent } from './input-parent.component';
import { InputChildComponent } from './input-child.component';
import { VersionChildComponent } from './version-child.component';
import { VersionParentComponent } from './version-parent.component';
import { OutputParentComponent } from './output-parent-component';
import { OutputChildComponent } from './output-child-component';
import { ViewParentComponent } from './view-parent-component';
import { ViewChildComponent } from './view-child-component';
import { DataService } from '../../services/data.service';
import { ServicesCalledComponent } from './servicescalled.component';

@NgModule({
    declarations: [InputParentComponent,
                  InputChildComponent,
                  VersionChildComponent,
                  VersionParentComponent,
                  OutputParentComponent,
                  OutputChildComponent,
                  ViewParentComponent,
                  ViewChildComponent ,
                  ServicesCalledComponent],
    exports: [InputParentComponent,
             InputChildComponent,
             VersionChildComponent,
             VersionParentComponent,
             OutputParentComponent,
             OutputChildComponent,
             ViewParentComponent,
             ViewChildComponent,
             ServicesCalledComponent
                            ],
  imports: [CommonModule],
  providers: [DataService]
})
export class ComponentIntrectionModule { }