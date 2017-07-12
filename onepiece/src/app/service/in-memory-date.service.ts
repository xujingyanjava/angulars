import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    let articles = [
      {id:1,
        author:'666',
        content:'111111111111111111111111',
        title:'基于laypage的layui扩展模块（pagesize.js）！',
        createTime:'2017-06-05 11:55',
        viewCount:20,
        commentCount:30,
        contentImage:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1515512934,2885760229&fm=26&gp=0.jpg'},
      {id:2,
        author:'222',
        content:'222222222222222222222',
        title:'基于laypage的layui扩展模块（pagesize.js）！',
        createTime:'2017-06-05 11:55',
        viewCount:20,
        commentCount:30,
        contentImage:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1515512934,2885760229&fm=26&gp=0.jpg',},
      {id:3,
        author:'333',
        content:'333333333333333333333333333',
        title:'基于laypage的layui扩展模块（pagesize.js）！',
        createTime:'2017-06-05 11:55',
        viewCount:20,
        commentCount:30,
        contentImage:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1515512934,2885760229&fm=26&gp=0.jpg',},
      {id:5,
        author:'555',
        content:'5555555555555555555555555555555555',
        title:'基于laypage的layui扩展模块（pagesize.js）！',
        createTime:'2017-06-05 11:55',
        viewCount:20,
        commentCount:30,
        contentImage:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1515512934,2885760229&fm=26&gp=0.jpg',},
    ];
    return {articles}
  }
}
