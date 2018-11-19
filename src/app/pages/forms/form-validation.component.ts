import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'recative-form-validation',
    template: `<h2>Recative Form Validation</h2>
    <form [formGroup]="heroForm" #formDir="ngForm">
         <div [hidden]="formDir.submitted">
            <div class="cross-validation">
                    <div class="form-group">

                    <label for="name">Name</label>
                    <input id="name" class="form-control"
                        formControlName="name" required >
        
                    <div *ngIf="name.invalid && (name.dirty || name.touched)"
                        class="alert alert-danger">
        
                    <div *ngIf="!!name.errors.required">
                        Name is required.
                    </div>
                    <div *ngIf="!!name.errors.minlength">
                        Name must be at least 4 characters long.
                    </div>

                    </div>

                    <button type="submit" class="btn btn-default" [disabled]="heroForm.invalid">Submit</button>
                </div>
            </div>
         </div>
    
    </form>

<div class="submitted-message" *ngIf="formDir.submitted">
<p>You've submitted your hero, {{ heroForm.value.name }}!</p>
<button (click)="formDir.resetForm({})">Add new hero</button>
</div>
    `
})
export class FormValidationComponent {
    powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

    hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };

     heroForm: FormGroup;

     ngOnInit(): void {
        this.heroForm = new FormGroup({
          'name': new FormControl(this.hero.name, [
            Validators.required,
            Validators.minLength(4),
          ])
      });
    }


      get name() { return this.heroForm.get('name'); }
}