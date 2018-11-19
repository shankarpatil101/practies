import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipeComponent } from './pipe.component';
import { ReverseStr } from './reverse-str.pipe';

@NgModule({
  imports: [CommonModule],
    declarations: [PipeComponent, ReverseStr],
    exports: [ PipeComponent],
     
})
export class PipeModule { }
