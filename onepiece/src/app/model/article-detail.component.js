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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var article_1 = require("../model/article");
var article_service_1 = require("../service/article.service");
var ArticleDetailComponent = (function () {
    function ArticleDetailComponent(articleService, route, location) {
        this.articleService = articleService;
        this.route = route;
        this.location = location;
    }
    ;
    ArticleDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.articleService.getArticle(+params['id']); })
            .subscribe(function (article) { return _this.article = article; });
    };
    ;
    ArticleDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ;
    return ArticleDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", article_1.Article)
], ArticleDetailComponent.prototype, "article", void 0);
ArticleDetailComponent = __decorate([
    core_1.Component({
        selector: 'article-detail',
        providers: [article_service_1.ArticleService],
        templateUrl: '/app/html/article-detail.component.html'
    }),
    __metadata("design:paramtypes", [article_service_1.ArticleService, router_1.ActivatedRoute, common_1.Location])
], ArticleDetailComponent);
exports.ArticleDetailComponent = ArticleDetailComponent;
//# sourceMappingURL=article-detail.component.js.map