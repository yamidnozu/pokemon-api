import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { DataPokemon, IFavorite } from 'src/app/core/models/pokemons.model';
import { PokeapiService } from 'src/app/shared/services/pokeapi.service';
import { StateGlobalService } from 'src/app/shared/services/state-global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private pokeapiService: PokeapiService,
    public stateGlobal: StateGlobalService,
    private router: Router,
  ) {
    this.getMorePokemons({ isDelay: false })
  }
  ngOnInit(): void {
    
  }

  getMorePokemons(props = { isDelay: true }) {

    this.pokeapiService.getPokemons()
      .pipe(delay(props.isDelay ? 200 : 0))
      .subscribe(lista => {
        this.stateGlobal.updateListPokemon(lista)
      })
  }

  changeStateIfFavorite(event: boolean, card: DataPokemon): void {
    const fav: IFavorite = {
      id: card.getId(),
      pokemon: card,
    };
    this.stateGlobal.updateFavorites( fav );
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
