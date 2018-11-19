import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
    selector: 'rective-form',
    template: `<h2>Forn Component</h2>
        <form [formGroup]="profileForm">
            <label>
               First Name:<input type="text" formControlName="firstName" required>
            </label>

            <label>
               Last Name: <input type="text" formControlName="lastName">
            </label>

            <button type="submit" (click)="updateValue()">Submit</button>

        </form>
 
    `
})
export class RecativeFormComponent {
    constructor(private fb: FormBuilder) { }
    profileForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: [''],
      });

      updateValue(){
        this.profileForm.patchValue({
            firstName: 'Nancy',
            lastName : 'Koli'
          });
      }
  
}