import { Injectable } from '@angular/core';
import { Article } from '../model/article';
// import { ARTICLES } from '../model/mock-articles';
import {Http, Headers, URLSearchParams, RequestOptionsArgs} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArticleService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private baseUrl='http://api.onepiece.ren/demo/';
  private articlesUrl = this.baseUrl+'getArticleList';

  constructor(private http:Http){}

  getArticles():Promise<Article[]> {
    let params = new URLSearchParams();
    params.set('pageNo', 1);
    params.set('pageSize', 10);
    let options:RequestOptionsArgs = {
      search: params
    };
     return this.http.post(this.articlesUrl,options,{
      headers: this.headers
    }).toPromise(). then(response => response.json().data.articleList as Article[])
       .catch(this.handleError)
  }

  private handleError(error :any):Promise<any> {
    console.error("an error occurred",error);
    return Promise.reject(error.message || error);
  }

  getArticle(id:number):Promise<Article> {
    return this.getArticles().then(articles =>articles.find(article =>article.id === id));
  }
}
