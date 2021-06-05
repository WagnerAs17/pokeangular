import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PokemonService } from '../pokemons.service';

const LANGUAGE_EN = 1;
@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  constructor(
    private modalService: NgbModal, 
    private pokemonService: PokemonService
  ) {}

  @Input() pokemonName: string;
  @Input() pokemonId;

  abilities: any;
  effect: string;

  ngOnInit(): void {
    this.pokemonService.getAbility(this.pokemonId)
      .subscribe(ab => {
        this.abilities = ab;
        this.effect = this.abilities.effect_entries[LANGUAGE_EN].effect;
      })
  }

  openLg(content) {
    this.modalService.open(content, { scrollable: true });
  }
}
