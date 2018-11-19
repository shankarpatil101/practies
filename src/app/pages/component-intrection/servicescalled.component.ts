import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'services-called',
  template: `
  <p>hi {{data}}</p>
  <li *ngFor="let h of itemsarray">
  <b> {{h}} </b>           
</li>
  `,
  styles: [`
 p
  {
    background-color:green;
  }

  `],
  providers:[DataService]
})
export class ServicesCalledComponent {
  data;
  itemsarray=[]
  constructor(private dataservice: DataService) {
    this.itemsarray = this.dataservice.hobbies;
    this.data = this.dataservice.servicemethod();
  }
 }