import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  title='Heros-component';
  hero : Hero={
    id:1,
    name:'Windstorm'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
