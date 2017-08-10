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
var article_service_1 = require("../service/article.service");
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var ArticleListComponent = (function () {
    function ArticleListComponent(articleService, route) {
        this.articleService = articleService;
        this.route = route;
    }
    ArticleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.getArticles(+params['id']);
        });
    };
    ;
    ArticleListComponent.prototype.onSelect = function (article) {
        this.selectedArticle = article;
    };
    ;
    ArticleListComponent.prototype.getArticles = function (articleTypeId) {
        var _this = this;
        this.articleService.getArticles(articleTypeId).then(function (articles) { return _this.articles = articles; });
    };
    return ArticleListComponent;
}());
ArticleListComponent = __decorate([
    core_1.Component({
        selector: 'article-list',
        template: "\n          <div class=\"article shadow\" *ngFor=\"let article of articles\" [routerLink]=\"['/detail',article.articleId]\"> \n            <div class=\"article-left\">\n              <img src=\"{{article.contentImage}}\" alt=\"\u57FA\u4E8Elaypage\u7684layui\u6269\u5C55\u6A21\u5757\uFF08pagesize.js\uFF09\uFF01\" />\n            </div>\n            <div class=\"article-right\">\n              <div class=\"article-title\">\n                <!--<a routerLink=\"/detail\">{{article.title}}</a>-->\n                <a [routerLink]=\"['/detail',article.articleId]\">{{article.title}}</a>\n              </div>\n              <div class=\"article-abstract\">\n                {{article.content}}\n              </div>\n            </div>\n            <div class=\"clear\"></div>\n            <div class=\"article-footer\">\n              <span><i class=\"fa fa-clock-o\"></i>&nbsp;&nbsp;{{article.createTime}}</span>\n              <span class=\"article-author\"><i class=\"fa fa-user\"></i>&nbsp;&nbsp;{{article.author}}</span>\n              <span><i class=\"fa fa-tag\"></i>&nbsp;&nbsp;<a href=\"#\">Web\u524D\u7AEF</a></span>\n              <span class=\"article-viewinfo\"><i class=\"fa fa-eye\"></i>&nbsp;0</span>\n              <span class=\"article-viewinfo\"><i class=\"fa fa-commenting\"></i>&nbsp;4</span>\n            </div>\n          </div>\n          <div *ngIf=\"selectedArticle\">\n          <h2>{{selectedArticle.content}}</h2>\n          </div>\n           <router-outlet></router-outlet>\n"
    }),
    __metadata("design:paramtypes", [article_service_1.ArticleService,
        router_1.ActivatedRoute])
], ArticleListComponent);
exports.ArticleListComponent = ArticleListComponent;
//# sourceMappingURL=articleList.component.js.map