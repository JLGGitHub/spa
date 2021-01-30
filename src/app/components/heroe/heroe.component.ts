import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { Heroe } from 'src/app/interface/heroe';
import { HeroesService } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;
  constructor(private activatedRoute: ActivatedRoute, 
              private heroesService: HeroesService) { 
    this.activatedRoute.params.subscribe(params => {
      this.heroe = heroesService.getHeroe(params["id"]); 
      console.log(this.heroe);
    });
  }

  ngOnInit(): void {
  }

}
