import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pokemons } from './pokemons';
import { PokemonService } from './pokemons.service';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons: Pokemons;
  urlImg = environment.urlImg;

  constructor(
    private activated: ActivatedRoute,
    private pokemonsService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemons = this.activated.snapshot.data['pokemons'];
  }

  getPokemonId(pokemonUrl){
    return pokemonUrl.split('pokemon/')[1].replace('/', '');
  }

  getPokemons(url: string){
    let params = this.getQueryParams(url);

    this.pokemonsService.getAll(params.offSet, params.limit)
      .subscribe(pokemons => {
        this.pokemons = pokemons
    });
  }

  getQueryParams(url: string) {
    let params = url.split('?')[1];
    let offSet = parseInt(params.substring('offset='.length, params.indexOf('&')));
    let limit = parseInt(params.split('&')[1].split('=')[1])

    return { offSet , limit };
  }
}
