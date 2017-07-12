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
        this.baseUrl = 'http://api.onepiece.ren/demo/';
        this.articlesUrl = this.baseUrl + 'getArticleList';
    }
    ArticleService.prototype.getArticles = function () {
        var params = new http_1.URLSearchParams();
        params.set('pageNo', 1);
        params.set('pageSize', 10);
        var options = {
            search: params
        };
        return this.http.post(this.articlesUrl, options, {
            headers: this.headers
        }).toPromise().then(function (response) { return response.json().data.articleList; })
            .catch(this.handleError);
    };
    ArticleService.prototype.handleError = function (error) {
        console.error("an error occurred", error);
        return Promise.reject(error.message || error);
    };
    ArticleService.prototype.getArticle = function (id) {
        return this.getArticles().then(function (articles) { return articles.find(function (article) { return article.id === id; }); });
    };
    return ArticleService;
}());
ArticleService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ArticleService);
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.service.js.map