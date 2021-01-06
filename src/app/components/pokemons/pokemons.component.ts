import { Component, OnInit } from '@angular/core';
import { PokemonsService, Pokemons } from "../../services/pokemons.service";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons:Pokemons[] = [];

  constructor( private pokemonsService:PokemonsService) 
  {
    
  }

  ngOnInit() {
    this.pokemons = this.pokemonsService.getPokemons();
    
  }



}
