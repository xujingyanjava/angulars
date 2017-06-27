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
var HeadComponent = (function () {
    function HeadComponent(articleService) {
        this.articleService = articleService;
    }
    HeadComponent.prototype.ngOnInit = function () {
        this.getArticles();
    };
    ;
    HeadComponent.prototype.onSelect = function (article) {
        this.selectedArticle = article;
    };
    ;
    HeadComponent.prototype.getArticles = function () {
        var _this = this;
        this.articleService.getArticles().then(function (articles) { return _this.articles = articles; });
    };
    return HeadComponent;
}());
HeadComponent = __decorate([
    core_1.Component({
        selector: 'article-list',
        providers: [article_service_1.ArticleService],
        template: "\n          <div class=\"article shadow\" *ngFor=\"let article of articles\" (click)=\"onSelect(article)\"> \n            <div class=\"article-left\">\n              <img src=\"{{article.contentImage}}\" alt=\"\u57FA\u4E8Elaypage\u7684layui\u6269\u5C55\u6A21\u5757\uFF08pagesize.js\uFF09\uFF01\" />\n            </div>\n            <div class=\"article-right\">\n              <div class=\"article-title\">\n                <a href=\"detail.html\">{{article.title}}</a>\n              </div>\n              <div class=\"article-abstract\">\n                {{article.content}}\n              </div>\n            </div>\n            <div class=\"clear\"></div>\n            <div class=\"article-footer\">\n              <span><i class=\"fa fa-clock-o\"></i>&nbsp;&nbsp;{{article.createTime}}</span>\n              <span class=\"article-author\"><i class=\"fa fa-user\"></i>&nbsp;&nbsp;{{article.author}}</span>\n              <span><i class=\"fa fa-tag\"></i>&nbsp;&nbsp;<a href=\"#\">Web\u524D\u7AEF</a></span>\n              <span class=\"article-viewinfo\"><i class=\"fa fa-eye\"></i>&nbsp;0</span>\n              <span class=\"article-viewinfo\"><i class=\"fa fa-commenting\"></i>&nbsp;4</span>\n            </div>\n          </div>\n          <div *ngIf=\"selectedArticle\">\n          <h2>{{selectedArticle.content}}</h2>\n          </div>\n          \n          <article-detail [article]=\"selectedArticle\"></article-detail>\n           \n"
    }),
    __metadata("design:paramtypes", [article_service_1.ArticleService])
], HeadComponent);
exports.HeadComponent = HeadComponent;
//# sourceMappingURL=head.component.js.map