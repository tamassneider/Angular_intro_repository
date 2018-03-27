import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'netacademia123';
  tomb = [1, 2, 3, 4, 5, 6, 7];
  events = ['sziget', 'effott', 'volt' ];
  show = true;
  whenclicked = false;
  inputContent: string;
  clonedEvents = [];
  inputEvent: string;

  pipeDemo = [
    {
      id: 1,
      name: 'Jani'
    },
    {
      id: 2,
      name: 'Peti'
    },
    {
      id: 3,
      name: 'Pali'
    }
  ];

  toggle() {
    this.show = !this.show;
    this.inputContent = 'bla bla bla';
  }

  demo(ev: MouseEvent) {
    console.log(ev.screenX);
  }
  addEvent(addedElem) {
    this.clonedEvents.push(addedElem);
    this.inputEvent = null;
  }
  removeEvent (removedEvent) {
    removedEvent = this.clonedEvents.filter((param: string) => param !== this.inputEvent);
    this.clonedEvents = removedEvent;
    this.inputEvent = null;
  }

  constructor() {
    /*console.log(this.tomb.filter((param: number) => param === 2));
    console.log(this.tomb.map((param: number) => param * 2));
    console.log(this.tomb.reduce((x, y) => x + y));
    this.clonedEvents = this.events; */
  }
}
