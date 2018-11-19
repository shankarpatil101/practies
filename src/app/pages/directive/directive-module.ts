import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DirectiveComponent } from './directive.component';
import { HighlightDirective } from './attribute.directive';
import { UnlessDirective } from './structure.directive';

@NgModule({
  imports: [CommonModule],
    declarations: [DirectiveComponent, HighlightDirective,UnlessDirective],
    exports: [DirectiveComponent ],
     
})
export class DirectiveModule { }
