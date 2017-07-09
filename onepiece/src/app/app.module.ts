import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { HeadComponent } from './head/head.component';

import { ArticleDetailComponent } from './model/article-detail.component';

import { AppRoutingModule } from './model/app.routing.module';
import {ArticleService} from "./service/article.service";

@NgModule({
  imports:[
    BrowserModule ,
    AppRoutingModule
  ],
  declarations: [ AppComponent ,HeadComponent,ArticleDetailComponent],
  providers:[ArticleService],
  bootstrap:    [ AppComponent ]
})


export class AppModule {

}
