import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IFavorite, DataPokemon } from 'src/app/core/models/pokemons.model';
import { getObjectLocalStorage, setObjectLocalStorage } from 'src/app/core/utils/utils';


const TOKEN_FAVORITES ='listPokemonFavorites'
@Injectable({
  providedIn: 'root'
})
export class StateGlobalService {

  private _favorites = new BehaviorSubject<IFavorite[]>([]);
  readonly favorites$ = this._favorites.asObservable();

  private _listPokemons = new BehaviorSubject<DataPokemon[]>([]);
  readonly listPokemons$ = this._listPokemons.asObservable();

  /**
   * It checks if the favorite exists in the local storage, if it does, it removes it, if it doesn't,
   * it adds it
   * @param {IFavorite} fav - IFavorite - The favorite object that will be added or removed from the
   * list.
   */
  updateFavorites(fav: IFavorite): void {

    let favorites: IFavorite[] = this.getFavoritesInStorage();

    const existFavorite = favorites.some(favStore => favStore.id === fav.id)

    let newState = [];

    fav.pokemon.isFavorite = !existFavorite;

    if (!existFavorite) {
      newState = [...favorites, fav];
    } else {
      newState = favorites.filter(favStore => favStore.id !== fav.id);
    }

    setObjectLocalStorage(TOKEN_FAVORITES, newState);

    this._favorites.next(newState);

    this.updateListPokemonWidthFavorites();
  }

  private getFavoritesInStorage() {
    let favorites: IFavorite[];

    try {
      favorites = getObjectLocalStorage<IFavorite[]>(TOKEN_FAVORITES);
    } catch (error) {
      favorites = [];
    }
    return favorites;
  }

  /**
   * It takes a list of DataPokemon as a parameter, and then it updates the list of pokemons in the
   * store
   * @param {DataPokemon[]} list - DataPokemon[]
   */
  updateListPokemon(list: DataPokemon[]): void {
    const listPokemons = this._listPokemons.value;

    let newState = [];

    newState = [...listPokemons, ...list];

    this._listPokemons.next(newState)
    this.updateListPokemonWidthFavorites();
  }


  /**
   * We get the list of favorites from the local storage, we get the list of pokemons from the state,
   * we loop through the list of pokemons and we check if the pokemon is in the list of favorites. If
   * it is, we set the isFavorite property to true
   */
  updateListPokemonWidthFavorites(): void {

    let favorites: IFavorite[] = this.getFavoritesInStorage();

    const listPokemons = this._listPokemons.value;

    let newState: DataPokemon[] = [];

    newState = listPokemons
      .map(pkn => {
        const isFavorite = favorites.some(fav => fav.id === pkn.getId())
        pkn.isFavorite = isFavorite;
        return pkn
      });

    this._listPokemons.next(newState);
    this._favorites.next(favorites);
  }

}


