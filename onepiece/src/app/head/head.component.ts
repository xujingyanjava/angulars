import { Component ,OnInit } from '@angular/core';
import { Article } from '../model/article'
import { ArticleService } from '../service/article.service';
@Component({
  selector:'article-list',
  template:`
          <!--<div class="article shadow" *ngFor="let article of articles" (click)="onSelect(article)"> -->
          <div class="article shadow" *ngFor="let article of articles" [routerLink]="['/detail',article.articleId]"> 
            <div class="article-left">
              <img src="{{article.contentImage}}" alt="基于laypage的layui扩展模块（pagesize.js）！" />
            </div>
            <div class="article-right">
              <div class="article-title">
                <!--<a routerLink="/detail">{{article.title}}</a>-->
                <a [routerLink]="['/detail',article.articleId]">{{article.title}}</a>
              </div>
              <div class="article-abstract">
                {{article.content}}
              </div>
            </div>
            <div class="clear"></div>
            <div class="article-footer">
              <span><i class="fa fa-clock-o"></i>&nbsp;&nbsp;{{article.createTime}}</span>
              <span class="article-author"><i class="fa fa-user"></i>&nbsp;&nbsp;{{article.author}}</span>
              <span><i class="fa fa-tag"></i>&nbsp;&nbsp;<a href="#">Web前端</a></span>
              <span class="article-viewinfo"><i class="fa fa-eye"></i>&nbsp;0</span>
              <span class="article-viewinfo"><i class="fa fa-commenting"></i>&nbsp;4</span>
            </div>
          </div>
          <div *ngIf="selectedArticle">
          <h2>{{selectedArticle.content}}</h2>
          </div>
          
          <article-detail [article]="selectedArticle"></article-detail>
           <router-outlet></router-outlet>
`
})

export class HeadComponent implements OnInit{
  ngOnInit(): void {
    this.getArticles();
  }
  constructor(private articleService:ArticleService){};
  articles:Article [];
  selectedArticle:Article;
  onSelect(article:Article):void {
    this.selectedArticle = article;
  };
  getArticles():void {
    this.articleService.getArticles().then(articles =>this.articles = articles);
  }
}

