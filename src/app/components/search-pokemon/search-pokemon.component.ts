import { Component, OnInit } from '@angular/core';
import { PokemonsService, Pokemons } from "../../services/pokemons.service";
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: [
  ]
})
export class SearchPokemonComponent implements OnInit {
  
  pokemons:Pokemons[] = [];
  parametro:String = "";

  constructor( private activatedRoute:ActivatedRoute, private pokemonsService:PokemonsService) 
  { 
   
    this.activatedRoute.params.subscribe(parametros =>
      {
        this.pokemons = this.pokemonsService.searchPokemons(parametros['termino']);
        this.parametro = parametros['termino'];
      })
  }

  ngOnInit(): void {
  }

}
