import {Injectable} from '@angular/core';
import {ArticleType} from '../model/articleType.component';
import {Headers, Http} from "@angular/http";

@Injectable()
export class ArticleTypeService{

  private headers = new Headers({'Content-Type': 'application/json'});
  private baseUrl='http://localhost:8087/demo/';
  private articleTypesUrl = this.baseUrl+'getArticleTypeList';

  constructor(private http:Http){};

  getArticleTypeList():Promise<ArticleType[]> {
    return this.http.post(this.articleTypesUrl,"",{
      headers:this.headers
    }).toPromise().then(response =>response.json().data.articleTypeList as ArticleType[])
  }
// .toPromise().then(response =>response.json().data.articleTypeList as ArticleType[])
}
