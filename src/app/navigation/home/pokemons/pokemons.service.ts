import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemons } from './pokemons';
import { environment } from '../../../../environments/environment';

const API_V2 = environment.apiPokemonV2;
@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    
    constructor(private http: HttpClient){}

    getAll(offSet = 0, limit = 8){
        return this.http.get<Pokemons>(API_V2 + `pokemon?offset=${offSet}&limit=${limit}`);
    }

    getcharacteristic(pokemonId){
        return this.http
            .get(API_V2 + `characteristic/${pokemonId}`);
    }

    getAbility(pokemonId){
        return this.http.get(API_V2 + `ability/${pokemonId}`);
    }
}