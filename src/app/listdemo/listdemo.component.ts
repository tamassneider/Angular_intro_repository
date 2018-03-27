import { Component, OnInit } from '@angular/core';
import {EventModel} from './event-model';

@Component({
  selector: 'app-listdemo',
  templateUrl: './listdemo.component.html',
  styleUrls: ['./listdemo.component.css']
})
export class ListdemoComponent implements OnInit {
  events: EventModel[];
  modifyEvent: EventModel;
  constructor() {
    this.events = [
      {
        id: 1,
        name: 'sziget',
        pic: 'http://www.korkep.sk/wp-content/uploads/2018/01/660-sziget-fesztival-budapest-770x470-1.png'
      },
      {
        id: 2,
        name: 'fezen',
        pic: 'http://www.femforgacs.hu/images/kposterng/n-2018_julius_25_FEZEN_Fesztival_2018.jpg'
      },
      {
        id: 3,
        name: 'rockmaraton',
        pic: 'https://tixa.hu/kepek/0004/4101-1.jpg'
      }
    ];
    console.log('listdemo module started');

    this.modifyEvent = new EventModel('');
  }
  save(newEventNameInput: HTMLInputElement, newEventPicInput: HTMLInputElement) {
    if (this.modifyEvent.id === 0) {
      // this is the code for creating new element
      // use spread operator and ternary operator
      // ternary operator (logikai vizsgalat) ? haigaz : hahamis;
      const maxId = this.events.reduce((x, y) => x.id > y.id ? x : y).id;
      this.events = [...this.events, new EventModel( newEventNameInput.value, maxId + 1, newEventPicInput.value)];
    } else {
      // this is the code for editing an existing item
      this.events = this.events.map( (ev) => {
        if (ev.id === this.modifyEvent.id) {
          // we know that we want to modify this item
          return {
            id: ev.id,
            name: newEventNameInput.value,
            pic: newEventPicInput.value
          };
        } else {
          // we know that we do not want to modify
          return ev;
        }
      });
      // create a new editor object
      this.modifyEvent = new EventModel('');
    }
      newEventNameInput.value = '';
      newEventPicInput.value = '';

  }
  edit(id: number) {
    // IF this certainly exists
    // If it is known that there is only one of this
    this.modifyEvent = this.events.filter((ev) => ev.id === id)[0];
    console.log(this.modifyEvent);
  }

  delete(id: number) {
    // filter [o,x,o,x](?o?) -> [o,o]
    this.events = this.events.filter((ev: EventModel) => ev.id !== id);
  }

  ngOnInit() {
  }

}
