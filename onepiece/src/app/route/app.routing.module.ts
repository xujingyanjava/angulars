import { NgModule }      from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleListComponent} from '../component/articleList.component';
import { ArticleDetailComponent } from '../component/article-detail.component';


const routes:Routes = [
  {
    path:'articles',
    component:ArticleListComponent
  },
  {
    path:"detail/:id",
    component:ArticleDetailComponent
  },
  {
    path:'articles/:id',
    component:ArticleListComponent
  },
  {
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
























