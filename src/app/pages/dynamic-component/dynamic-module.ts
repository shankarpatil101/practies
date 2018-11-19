import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessageComponent } from './alert.component';
import { AppsComponent } from './main.component';

@NgModule({
  imports: [CommonModule],
    declarations: [MessageComponent,AppsComponent],
    exports: [MessageComponent,AppsComponent
      ],
      entryComponents: [
        MessageComponent
    ]

  
})
export class DynamicModule { }
