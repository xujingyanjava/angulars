import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroesComponent }  from './heroes.component';
import { HeroDetailComponent } from './hero-detail-component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Heroservice } from './hero.service';

import { DashboardComponent } from  './dashboard.component';

import { AppRoutingModule } from './app-routing.module';

import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule ,
                  FormsModule,
                  AppRoutingModule,
                  HttpModule
    ],
  declarations: [ HeroesComponent ,HeroDetailComponent,AppComponent,DashboardComponent],
  providers:[
    Heroservice
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

}

