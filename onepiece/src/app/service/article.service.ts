import { Injectable } from '@angular/core';
import { Article } from '../model/article';
// import { ARTICLES } from '../model/mock-articles';
import {Http, Headers, URLSearchParams, RequestOptionsArgs} from "@angular/http";
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ArticleService {

  private headers = new Headers({'Content-Type': 'application/json'});
  // private baseUrl='http://api.onepiece.ren/demo/';
  private baseUrl='http://localhost:8087/demo/';
  private articlesUrl = this.baseUrl+'getArticleList';
  private articleInfoUrl = this.baseUrl+'getArticleInfo';

  constructor(private http:Http){}
  /**
   * 获取文章列表
   * @returns {Promise<R>|Promise<any|T>|webdriver.promise.Promise<R>|Promise<any>|Observable<R>|any}
   */
  getArticles():Promise<Article[]> {
    let params = new URLSearchParams();
    params.set('pageNo',"1");
    params.set('pageSize',"1");

    let body = JSON.stringify({
      pageNo:1,
      pageSize:1
    });
     return this.http.post(this.articlesUrl,body,{
      headers: this.headers
    }).toPromise(). then(response => response.json().data.articleList as Article[])
       .catch(this.handleError)
  }

  /**
   * 获取详情信息
   * @param id
   * @returns {any}
   */
  getArticle(id:number):Promise<Article> {
    let body = JSON.stringify({
      articleId : id
    });
    return this.http.post(this.articleInfoUrl,body,{
      headers:this.headers
    }).toPromise().then(response => response.json().data.article as Article);
    // return this.getArticles().then(articles =>articles.find(article =>article.id === id));
  }

  private handleError(error :any):Promise<any> {
    console.error("an error occurred",error);
    return Promise.reject(error.message || error);
  }

}
