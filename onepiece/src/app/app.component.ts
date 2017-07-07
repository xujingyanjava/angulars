import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
   <a routerLink="/articles"></a>
   <router-outlet></router-outlet>`,
})
export class AppComponent  { name = 'Angular'; }
