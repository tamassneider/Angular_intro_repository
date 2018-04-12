import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, DoCheck, OnChanges,
  AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked{
  title = 'netacademia123';
  tomb = [1, 2, 3, 4, 5, 6, 7];
  events = ['sziget', 'effott', 'volt' ];
  show = true;
  whenclicked = false;
  inputContent: string;
  clonedEvents = [];
  inputEvent: string;
  hook = false;
  testData = new Date().toTimeString();
  testData2 = new Date().toDateString()


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
    console.log('app constructor');
  }

  ngOnInit () {
    console.log('app OnInit');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('app OnChanges: ', changes, this.testData,  this.testData2);
  }

  ngDoCheck() {
    console.log('app DoCheck: ', this.testData,  this.testData2);
  }

  ngOnDestroy() {
    console.log('app OnDestroy', this.testData,  this.testData2);
  }
  ngAfterViewInit() {
    console.log('app AfterViewInit');
  }

  ngAfterViewChecked () {
    console.log('app AfterViewChecked');
  }

  ngAfterContentInit() {
    console.log('app AfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('app AfterContentChecked');
  }

  changeInputTestData() {
    this.testData = new Date().toTimeString();
  }
  changeInputTestData2() {
    this.testData2 = new Date().toDateString();
  }
}
