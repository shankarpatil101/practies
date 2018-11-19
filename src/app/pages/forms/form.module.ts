import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RecativeFormComponent } from './reactive-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TemplateDrivenComponent } from './Template-driven-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormValidationComponent } from './form-validation.component';
import { TemplateValidationComponent } from './template-validation.component';
@NgModule({
  imports: [CommonModule, ReactiveFormsModule,  BrowserModule,
    FormsModule],
    declarations: [RecativeFormComponent, TemplateDrivenComponent, FormValidationComponent, TemplateValidationComponent],
    exports : [ RecativeFormComponent, TemplateDrivenComponent, FormValidationComponent, TemplateValidationComponent],
     
})
export class FormModule { }
