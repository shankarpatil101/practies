import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'template-form-validation',
    template: `<h2>Template Form Validation</h2>
    <form #heroForm="ngForm" appIdentityRevealed>
        <div [hidden]="heroForm.submitted">
            <div class="form-group">
            <label for="name">Name</label>
            <input id="name" name="name" class="form-control"
                required minlength="4" appForbiddenName="bob"
                [(ngModel)]="hero.name" #name="ngModel" >

            <div *ngIf="name.invalid && (name.dirty || name.touched)"
                class="alert alert-danger">

            <div *ngIf="!!name.errors.required">
                Name is required.
            </div>
            <div *ngIf="!!name.errors.minlength">
                Name must be at least 4 characters long.
            </div>
            <div *ngIf="!!name.errors.forbiddenName">
                Name cannot be Bob.
            </div>

            </div>
        </div>

        <button type="submit" class="btn btn-default"
        [disabled]="heroForm.invalid">Submit</button>

        </div>
    </form>
    `
})
export class TemplateValidationComponent {
    powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

    hero = {name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0]};
}