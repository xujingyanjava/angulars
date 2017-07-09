import { Component, Input,OnInit } from '@angular/core'
import { ActivatedRoute,Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Article } from "../model/article";
import { ArticleService } from '../service/article.service'
@Component({
  selector:'article-detail',
  providers:[ArticleService],
  templateUrl:'/app/html/article-detail.component.html'
})



export class ArticleDetailComponent implements OnInit{
  @Input() article:Article;

  constructor(private articleService:ArticleService, private route:ActivatedRoute, private location:Location){};

  ngOnInit():void {
    this.route.params
      .switchMap((params: Params) => this.articleService.getArticle(+params['id']))
      .subscribe(article => this.article = article);
  };

  goBack():void {
    this.location.back();
  };
}

























