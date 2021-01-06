import { Component, OnInit, Input } from '@angular/core';
import { PokemonsService, Pokemons } from "../../../services/pokemons.service";
import { ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon:any={};

  constructor( private pokemonsService:PokemonsService, private router:Router) { }

  ngOnInit(): void {
  }

  verPokemon(idx:number)
  {
    this.router.navigate(['/pokemon', idx]);
  }

}
