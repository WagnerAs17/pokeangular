import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsComponent } from './home/pokemons/pokemons.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PokemonDetailsComponent } from './home/pokemons/pokemon-details/pokemon-details.component';
import { PokemonCharacteristicComponent } from './home/pokemons/pokemon-characteristic/pokemon-characteristic.component';

@NgModule({
    declarations: [ PokemonsComponent, HomeComponent, MenuComponent, PokemonDetailsComponent, PokemonCharacteristicComponent ],
    imports: [ CommonModule, RouterModule  ],
    exports: [HomeComponent, MenuComponent],
    providers: [],
})
export class NavigationModule {}