import { Component,OnInit } from '@angular/core'

import { Hero } from './hero';
import { Heroservice } from  './hero.service';


@Component({
  selector:'my-dashboard',
  templateUrl:'./dashboard.component.html',
  styleUrls:['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{
  heroes:Hero[]=[];
  constructor(private heroservice:Heroservice){};
  ngOnInit(): void {
    this.heroservice.getHeroes().then(heroes => this.heroes=heroes.slice(1,5))
  }
}
