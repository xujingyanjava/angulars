import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeadComponent } from './head/head.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ,HeadComponent],
  bootstrap:    [ HeadComponent ]
})
export class AppModule { }
