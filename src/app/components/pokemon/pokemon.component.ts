import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService, Pokemons } from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styles: [
  ]
})
export class PokemonComponent implements OnInit {
  pokemon:Pokemons;

  constructor( private activatedRoute:ActivatedRoute, private pokemonsService:PokemonsService, private router:Router) {
    this.activatedRoute.params.subscribe(parametros =>
      {
        this.pokemon = this.pokemonsService.getPokemon(parametros['id']);
      })
   }

  ngOnInit(): void {
  }
  verPokemons()
  {
    this.router.navigate(['/pokemons']);
  }
}
