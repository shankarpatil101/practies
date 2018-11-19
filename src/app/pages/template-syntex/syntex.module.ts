import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SyntexComponent } from './syntex.component';

@NgModule({
    declarations: [SyntexComponent],
    exports: [SyntexComponent],
  imports: [CommonModule],
})
export class SyntexModule { }
