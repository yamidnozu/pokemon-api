import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { DataPokemon, IFavorite } from 'src/app/core/models/pokemons.model';
import { PokeapiService } from 'src/app/shared/services/pokeapi.service';
import { StateGlobalService } from 'src/app/shared/services/state-global.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {


  constructor(
    private router: Router,
    public stateGlobal: StateGlobalService,
  ) {

  }
  ngOnInit(): void {

  }

  changeStateIfFavorite(event: boolean, card: DataPokemon): void {
    const fav: IFavorite = {
      id: card.id,
      pokemon: card,
    };
    this.stateGlobal.updateFavorites(fav);
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }

}
