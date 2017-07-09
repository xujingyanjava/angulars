import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';

import { HeadComponent } from './head/head.component';

import { ArticleDetailComponent } from './model/article-detail.component';


@NgModule({
  imports:[
    BrowserModule ,
    RouterModule.forRoot([
      {
        path:'articles',
        component:HeadComponent
      },
      {
        path:"detail/:id",
        component:ArticleDetailComponent
      },{
        path:'',
        redirectTo:'/articles',
        pathMatch:'full'
      }
    ])
  ],
  declarations: [ AppComponent ,HeadComponent,ArticleDetailComponent],
  bootstrap:    [ AppComponent ]
})


export class AppModule {

}
