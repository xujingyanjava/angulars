"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
// import { ARTICLES } from '../model/mock-articles';
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var ArticleService = (function () {
    function ArticleService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        // private baseUrl='http://api.onepiece.ren/demo/';
        this.baseUrl = 'http://localhost:8087/demo/';
        this.articlesUrl = this.baseUrl + 'getArticleList';
        this.articleInfoUrl = this.baseUrl + 'getArticleInfo';
    }
    /**
     * 获取文章列表
     * @returns {Promise<R>|Promise<any|T>|webdriver.promise.Promise<R>|Promise<any>|Observable<R>|any}
     */
    ArticleService.prototype.getArticles = function (articleTypeId) {
        var body = JSON.stringify({
            pageNo: 1,
            pageSize: 10,
            articleTypeId: articleTypeId
        });
        return this.http.post(this.articlesUrl, body, {
            headers: this.headers
        }).toPromise().then(function (response) { return response.json().data.articleList; })
            .catch(this.handleError);
    };
    /**
     * 获取详情信息
     * @param id
     * @returns {any}
     */
    ArticleService.prototype.getArticle = function (id) {
        var body = JSON.stringify({
            articleId: id
        });
        return this.http.post(this.articleInfoUrl, body, {
            headers: this.headers
        }).toPromise().then(function (response) { return response.json().data.article; });
        // return this.getArticles().then(articles =>articles.find(article =>article.id === id));
    };
    ArticleService.prototype.handleError = function (error) {
        console.error("an error occurred", error);
        return Promise.reject(error.message || error);
    };
    return ArticleService;
}());
ArticleService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ArticleService);
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.service.js.map