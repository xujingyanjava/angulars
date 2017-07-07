import { Component,OnInit} from '@angular/core';
import { Article } from './model/article';
import { ArticleService } from './service/article.service';

@Component({

})

export class ArticleComponent implements OnInit {
  articles:Article[] = [];

  constructor(private articleService:ArticleService){}

  ngOnInit(): void {
    this.articleService.getArticles()
      .then(articles => this.articles = articles.slice(1, 5));
  }
}
