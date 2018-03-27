import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import {Event2Component} from './event_created_manually/event2.component';
import {FormsModule} from '@angular/forms';
import { ListdemoComponent } from './listdemo/listdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    Event2Component,
    ListdemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
