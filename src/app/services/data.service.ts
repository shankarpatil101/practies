import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  // Create array
  hobbies = [
    'dancing',
    'singing',
    'internet'
  ];
  constructor() { }
  servicemethod(){
      return 'Its just a simple service method';
  }

}