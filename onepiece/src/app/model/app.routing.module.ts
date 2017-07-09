import { NgModule }      from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { HeadComponent } from '../head/head.component';

import { ArticleDetailComponent } from '../model/article-detail.component';

const routes:Routes = [
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
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
























