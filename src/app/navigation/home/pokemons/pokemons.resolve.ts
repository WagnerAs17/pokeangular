import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { Pokemons } from "./pokemons";
import { PokemonService } from './pokemons.service';

@Injectable({providedIn : 'root'})
export class PokemonsResolve implements Resolve<Pokemons>{
    
    constructor(private pokemonsService: PokemonService){}
    
    resolve() : Observable<Pokemons> {
        return this.pokemonsService.getAll();
    }

}