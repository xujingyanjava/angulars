import { Injectable } from '@angular/core';
import { Article } from '../model/article';
import { ARTICLES } from '../model/mock-articles';

@Injectable()
export class ArticleService {
  getArticles():Promise<Article[]> {
    return Promise.resolve(ARTICLES);
  }
}
