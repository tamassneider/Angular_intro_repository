import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'netacademia123';
  tomb = [1,2,3,4,5,6,7,];
  constructor(){
    console.log(this.tomb.filter((param: number) => param === 2));
    console.log(this.tomb.map((param:number) => param * 2));
    console.log(this.tomb.reduce((x,y) => x+y));
  }
}
