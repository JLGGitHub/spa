import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/interface/heroe';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
  lstHeroes: Heroe[] = []; 
  constructor(private heroes: HeroesService) { }

  ngOnInit(): void {
    this.lstHeroes = this.heroes.getHeroes(); 
  }

}
