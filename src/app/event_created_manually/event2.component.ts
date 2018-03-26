import {Component} from '@angular/core';

@Component({
  selector: 'app-event2',
  templateUrl: './event2.component.html',
  styleUrls: ['./event2.component.css']
})

export class Event2Component {
  title = 'This Component';

  constructor() {
    console.log(`${this.title} strings can follow a variable`);
    this.greetings();
  }

  greetings() {
    console.log('not implemented yet');
  }
}
