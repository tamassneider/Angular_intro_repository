import { Component, OnInit } from '@angular/core';
import {EventModel} from './event-model';

@Component({
  selector: 'app-listdemo',
  templateUrl: './listdemo.component.html',
  styleUrls: ['./listdemo.component.css']
})
export class ListdemoComponent implements OnInit {
  events: EventModel[];
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
  }
  add(newEventNameInput: HTMLInputElement, newEventPicInput: HTMLInputElement) {
    // use spread operator and ternary operator
    // ternary operator (logikai vizsgalat) ? haigaz : hahamis;
    const maxId = this.events.reduce((x, y) => x.id > y.id ? x : y).id;
    this.events = [...this.events, new EventModel(maxId + 1, newEventNameInput.value, newEventPicInput.value)];
    newEventNameInput.value = '';
    newEventPicInput.value = '';
  }

  delete(id: number) {
    // filter [o,x,o,x](?o?) -> [o,o]
    this.events = this.events.filter((ev: EventModel) => ev.id !== id);
  }

  ngOnInit() {
  }

}
