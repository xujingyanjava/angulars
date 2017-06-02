"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HeadComponent = (function () {
    function HeadComponent() {
    }
    return HeadComponent;
}());
HeadComponent = __decorate([
    core_1.Component({
        selector: 'my-nav',
        template: '<nav class="blog-nav layui-header"> ' +
            '<div class="blog-container"> ' +
            '<!-- QQ互联登陆 --> ' +
            '<a href="javascript:;" class="blog-user"> ' +
            '<i class="fa fa-qq"></i> ' +
            '</a> ' +
            '<a href="javascript:;" class="blog-user layui-hide"> ' +
            '<img src="images/Absolutely.jpg" alt="Absolutely" title="Absolutely" /> ' +
            '</a> <!-- 不落阁 --> <a class="blog-logo" href="home.html">onepiece码农</a> ' +
            '<!-- 导航菜单 --> ' +
            '<ul class="layui-nav" lay-filter="nav"> ' +
            '<li class="layui-nav-item layui-this"> ' +
            '<a href="home.html"><i class="fa fa-home fa-fw"></i>&nbsp;网站首页</a> ' +
            '</li> ' +
            '<li class="layui-nav-item"> ' +
            '<a href="article.html"><i class="fa fa-file-text fa-fw"></i>&nbsp;文章专栏</a> ' +
            '</li> ' +
            '<li class="layui-nav-item"> ' +
            '<a href="resource.html"><i class="fa fa-tags fa-fw"></i>&nbsp;资源分享</a> ' +
            '</li> ' +
            '<li class="layui-nav-item"> <a href="timeline.html"><i class="fa fa-hourglass-half fa-fw"></i>&nbsp;点点滴滴</a> ' +
            '</li> ' +
            '<li class="layui-nav-item"> ' +
            '<a href="about.html"><i class="fa fa-info fa-fw"></i>&nbsp;关于本站</a> ' +
            '</li> ' +
            '</ul> ' +
            '<!-- 手机和平板的导航开关 --> ' +
            '<a class="blog-navicon" href="javascript:;"><i class="fa fa-navicon"></i> </a></div></nav>'
    })
], HeadComponent);
exports.HeadComponent = HeadComponent;
//# sourceMappingURL=head.component.js.map