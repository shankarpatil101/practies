import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DependencyInjectionComponent } from './di.component';

@NgModule({
    declarations: [DependencyInjectionComponent],
    exports: [DependencyInjectionComponent],
  imports: [CommonModule],
})
export class DependencyInjectionModule { }