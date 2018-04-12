import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import {Event2Component} from './event_created_manually/event2.component';
import {FormsModule} from '@angular/forms';
import { ListdemoComponent } from './listdemo/listdemo.component';
import { MyPipePipe } from './my-pipe.pipe';
import { TestComponent } from './test/test.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarItemComponent } from './nav-bar-item/nav-bar-item.component';
import { ChangeDetectorHomeComponent } from './change-detector-home/change-detector-home.component';
import { ChangeDetectorOnePageComponent } from './change-detector-one-page/change-detector-one-page.component';
import { ChangeDetectorTes1Component } from './change-detector-tes1/change-detector-tes1.component';
import { ChangeDetectorTest2Component } from './change-detector-test2/change-detector-test2.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    Event2Component,
    ListdemoComponent,
    MyPipePipe,
    TestComponent,
    NavBarComponent,
    NavBarItemComponent,
    ChangeDetectorHomeComponent,
    ChangeDetectorOnePageComponent,
    ChangeDetectorTes1Component,
    ChangeDetectorTest2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
