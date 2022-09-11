import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataPokemon, IFavorite } from 'src/app/core/models/pokemons.model';
import { PokeapiService } from 'src/app/shared/services/pokeapi.service';
import { StateGlobalService } from 'src/app/shared/services/state-global.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  pokemon: DataPokemon | null = null;
  height = 0;
  weigth = 0;
  urlImage = '';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public stateGlobal: StateGlobalService,
    private pokeapiService: PokeapiService,
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.pokeapiService.getPokemonById(id).subscribe(pokemon => {
        this.pokemon = new DataPokemon(pokemon.name, '');
        this.pokemon.id = pokemon.id + '';
        this.height = pokemon.height;
        this.weigth = pokemon.weight;
        this.pokemon.getImageUrl();
        this.urlImage = this.pokemon.imageURL;
      });
    });
  }

  goToPage(page: string) {
    this.router.navigate([page]);
  }

  addFavorite() {
    const fav:IFavorite = {
      id: this.pokemon?.id,
      pokemon: this.pokemon!,
    }
    this.stateGlobal.updateFavorites(fav);
   this.goToPage('pages/home');
  
  }
}
