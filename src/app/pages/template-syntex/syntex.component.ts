import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'template-syntex',
    templateUrl: './syntex.component.html',
    styleUrls: ['./syntex.component.scss']
  })
  export class SyntexComponent implements OnInit {
    currentHero: string;
  ngOnInit(): void {
    this.getVal();
    console.log("YYYYYYYYYYYy",this.getVal());
    
  }
  getVal(){
      return 5;
    }

  eventInfo(evant){
    console.log("WWWWW", evant);
    
  }
}

  