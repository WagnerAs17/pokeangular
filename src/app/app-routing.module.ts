import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './navegacao/home/home.component';
import { PokemonsResolve } from './navegacao/home/pokemons/pokemons.resolve';
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' , 
        resolve: { pokemons: PokemonsResolve}
    },
    { path: 'home', component: HomeComponent, resolve: { pokemons: PokemonsResolve} },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
