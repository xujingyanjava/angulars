import {Component, OnInit} from '@angular/core';

import { Hero } from './hero';

import { Heroservice } from './hero.service';

import { Router} from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl:'./heroes.component.html',
  styleUrls:['./heroes.component.css'],
  providers:[Heroservice],
})
export class HeroesComponent implements OnInit{
  ngOnInit(): void {
    this.getHeroes();
  };
  name = 'Angular';
  heroes:Hero[];
  selectedHero:Hero;
  onSelect(hero:Hero):void {
    this.selectedHero = hero;
  };
  constructor(private heroservice:Heroservice,private router:Router){};
  getHeroes():void {
    // this.heroes = this.heroservice.getHeroes();
    this.heroservice.getHeroes().then(heroes => this.heroes=heroes);
  };
  gotoDetail():void{
    this.router.navigate(['./detail',this.selectedHero.id]);
  }
}


