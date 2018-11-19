import { Component } from '@angular/core';

@Component({
  selector: 'attribute-directive',
  template: `

  <h2 id="appUnless">UnlessDirective</h2>
<p>
  The condition is currently
  <span [ngClass]="{ 'a': !condition, 'b': condition, 'unless': true }">{{condition}}</span>.
  <button
    (click)="condition = !condition"
    [ngClass] = "{ 'a': condition, 'b': !condition }" >
    Toggle condition to {{condition ? 'false' : 'true'}}
  </button>
</p>
<p *appUnless="condition" class="unless a">
  (A) This paragraph is displayed because the condition is false.
</p>

<p *appUnless="!condition" class="unless b">
  (B) Although the condition is true,
  this paragraph is displayed because appUnless is set to false.
</p>


<h4>UnlessDirective with template</h4>

<p *appUnless="condition">Show this sentence unless the condition is true.</p>

<p *appUnless="condition" class="code unless">
  (A) &lt;p *appUnless="condition" class="code unless"&gt;
</p>

<ng-template [appUnless]="condition">
  <p class="code unless">
    (A) &lt;ng-template [appUnless]="condition"&gt;
  </p>
</ng-template>



  <h4>Pick a highlight color</h4>
<div>
  <input type="radio" name="colors" (click)="color='lightgreen'">Green
  <input type="radio" name="colors" (click)="color='yellow'">Yellow
  <input type="radio" name="colors" (click)="color='cyan'">Cyan
</div>
<p [appHighlight]="color">Highlight me!</p>
 
<p [appHighlight]="color" defaultColor="violet">
  Highlight me too!
</p>

  `
})
export class DirectiveComponent {
 
}
