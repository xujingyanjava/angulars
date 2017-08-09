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
var articleType_service_1 = require("../service/articleType.service");
var ArticleTypeComponent = (function () {
    function ArticleTypeComponent(articleTypeService) {
        this.articleTypeService = articleTypeService;
    }
    ;
    ArticleTypeComponent.prototype.ngOnInit = function () {
        this.getArticleTypes();
    };
    ArticleTypeComponent.prototype.getArticleTypes = function () {
        var _this = this;
        this.articleTypeService.getArticleTypeList().then(function (articleTypes) { return _this.articleTypes = articleTypes; });
        // this.articleService.getArticles()
    };
    return ArticleTypeComponent;
}());
ArticleTypeComponent = __decorate([
    core_1.Component({
        selector: 'article-type',
        template: "\n        <ul class=\"layui-nav\" lay-filter=\"nav\" >\n         <li class=\"layui-nav-item layui-this\">\n          <a href=\"articles\"><i class=\"fa fa-home fa-fw\"></i>&nbsp;\u7F51\u7AD9\u9996\u9875</a>\n        </li>\n        <li class=\"layui-nav-item\" *ngFor=\"let articleType of articleTypes\">\n          <a [routerLink]=\"['/articles',articleType.articleTypeId]\"><i class=\"fa fa-info fa-fw\"></i>{{articleType.articleTypeName}}</a>\n        </li>\n      </ul>",
        providers: [articleType_service_1.ArticleTypeService]
    }),
    __metadata("design:paramtypes", [articleType_service_1.ArticleTypeService])
], ArticleTypeComponent);
exports.ArticleTypeComponent = ArticleTypeComponent;
//# sourceMappingURL=article-type.component.js.map