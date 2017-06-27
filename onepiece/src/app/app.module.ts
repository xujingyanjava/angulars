import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeadComponent } from './head/head.component';
import { ArticleDetailComponent } from './model/article-detail.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ,HeadComponent,ArticleDetailComponent],
  bootstrap:    [ HeadComponent ]
})
export class AppModule { }
