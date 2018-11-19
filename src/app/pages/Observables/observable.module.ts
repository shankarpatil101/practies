import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ObservableComponent } from './observable.component';

@NgModule({
  imports: [CommonModule],
    declarations: [ObservableComponent],
    exports : [ObservableComponent],
     
})
export class ObservableModule { }
