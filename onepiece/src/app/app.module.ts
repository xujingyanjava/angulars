import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { } from 'angular-in-memory-web-api';
import {} from './in-memory-data.service'

import { AppComponent }  from './app.component';

import { HeadComponent } from './head/head.component';

import { ArticleDetailComponent } from './model/article-detail.component';
import { InMemoryDataService } from './service/in-memory-date.service';

import { AppRoutingModule } from './model/app.routing.module';
import { ArticleService } from "./service/article.service";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
@NgModule({
  imports:[
    BrowserModule ,
    AppRoutingModule,
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [ AppComponent ,HeadComponent,ArticleDetailComponent],
  providers:[ArticleService],
  bootstrap:    [ AppComponent ]
})


export class AppModule {

}
