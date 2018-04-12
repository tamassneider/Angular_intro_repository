import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnDestroy, DoCheck, OnChanges,
  AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {
  @Input() testData;
  @Input() testData2;

  constructor() {
    console.log('Test component constructor: ', this.testData);
  }

  ngOnInit() {
    console.log('Test component OnInit: ', this.testData, this.testData2);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Test component OnChanges: ', changes, this.testData,  this.testData2);
  }

  ngDoCheck() {
    console.log('Test component DoCheck: ', this.testData,  this.testData2);
  }

  ngOnDestroy() {
    console.log('Test component OnDestroy', this.testData,  this.testData2);
  }
  ngAfterViewInit() {
    console.log('Test Component AfterViewInit');
  }

  ngAfterViewChecked () {
    console.log('Test Component AfterViewChecked');
  }

  ngAfterContentInit() {
    console.log('Test Component AfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('Test Component AfterContentChecked');
  }

}
