import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DisplayDataComponent } from './display.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [DisplayDataComponent],
    exports: [DisplayDataComponent],
  imports: [CommonModule],
})
export class DisplayDataModule { }
