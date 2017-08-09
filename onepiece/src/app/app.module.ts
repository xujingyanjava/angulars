import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { } from 'angular-in-memory-web-api';
import {} from './in-memory-data.service'

import { AppComponent }  from './app.component';

import { ArticleListComponent } from './component/articleList.component';
import { ArticleDetailComponent } from './component/article-detail.component';
import { ArticleTypeComponent } from './component/article-type.component';

import { AppRoutingModule } from './route/app.routing.module';
import { ArticleService } from "./service/article.service";

@NgModule({
  imports:[
    BrowserModule ,
    AppRoutingModule,
    HttpModule,
  ],
  declarations: [ AppComponent ,ArticleListComponent,ArticleDetailComponent,ArticleTypeComponent],
  providers:[ArticleService],
  bootstrap:    [ AppComponent,ArticleTypeComponent]
})


export class AppModule {

}
