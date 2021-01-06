import { Injectable } from '@angular/core';

@Injectable()
export class PokemonsService { 

    private pokemons:Pokemons[] = 
    [
        {
            id:1,
            nombre: "Bulbasaur",
            tipo: "Planta",
            numPokedex:"001",
            poder:10,
            img:"Pokedex001.png",
            estadisticas:{
                vida:25,
                ataque:100,
                defensa:50
            }
        },
        {
            id:2,
            nombre: "Ivysaur",
            tipo: "Planta",
            numPokedex:"002",
            poder:50,
            img:"Pokedex002.png",
            estadisticas:{
                vida:50,
                ataque:60,
                defensa:60
            }
        },
        {
            id:3,
            nombre: "Venusaur",
            tipo: "Planta",
            numPokedex:"003",
            poder:100,
            img:"Pokedex003.png",
            estadisticas:{
                vida:100,
                ataque:50,
                defensa:80
            }
        },
        {
            id:4,
            nombre: "Charmander",
            tipo: "Fuego",
            numPokedex:"004",
            poder:20,
            img:"Pokedex004.png",
            estadisticas:{
                vida:40,
                ataque:80,
                defensa:30
            }
        }
    ]

    constructor() {
    }

    getPokemons(){
        return this.pokemons;
    }

    getPokemon(idx:number){
        return this.pokemons[idx-1];
    }

    searchPokemons(searchPok:string)
    {
        let pokemonsArr:Pokemons[] = [];
        searchPok = searchPok.toLowerCase();

        for(let pokemon of this.pokemons)
        {
            let nombre = pokemon.nombre.toLowerCase();
            if(nombre.indexOf(searchPok) >= 0 )
            {
                pokemonsArr.push(pokemon);
            }
        }

        return pokemonsArr;

    }

    
}
export interface Pokemons
    {
        id:number;
        nombre:String;
        tipo:String;
        numPokedex:String;
        poder:number;
        img:String;
        estadisticas:{vida:number, ataque:number, defensa:number};
    };