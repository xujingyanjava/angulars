import {Component, OnInit} from "@angular/core";
import { ArticleType } from '../model/articleType.component'
import {ArticleTypeService} from "../service/articleType.service";

@Component({
  selector:'article-type',
  template:`
         <li class="layui-nav-item layui-this">
          <a href="articles"><i class="fa fa-home fa-fw"></i>&nbsp;网站首页</a>
        </li>
        <li class="layui-nav-item" *ngFor="let articleType of articleTypes">
          <a [routerLink]="['/articles',articleType.articleTypeId]"><i class="fa fa-info fa-fw"></i>{{articleType.articleTypeName}}</a>
        </li>
      `,
  providers:[ArticleTypeService]
})

export class ArticleTypeComponent implements OnInit{
    articleTypes:ArticleType [];

    constructor(
      private articleTypeService:ArticleTypeService,
    ){};

  ngOnInit():void{
    this.getArticleTypes();

  }
  getArticleTypes():void {
    this.articleTypeService.getArticleTypeList().then(articleTypes =>this.articleTypes = articleTypes);
    // this.articleService.getArticles()
  }

}
