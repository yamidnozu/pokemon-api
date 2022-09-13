import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { DataPokemon, IResponsePokemons, ResponsePokemonById } from 'src/app/core/models/pokemons.model';
@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private baseURL: string = "https://pokeapi.co/api/v2/";
  private nextUrl: string = `${this.baseURL}pokemon`;
  constructor(
    private http: HttpClient
  ) { }

  getPokemons(): Observable<DataPokemon[]> {
    return this.http.get<IResponsePokemons>(this.nextUrl)
      .pipe(
        tap(response=>  this.nextUrl = response.next),
        map(response => [...response.results.map(result => new DataPokemon(result.name, result.url))]),
      );
  }

  getPokemonById(id: number): Observable<ResponsePokemonById> {
    return this.http.get<ResponsePokemonById>(`${this.baseURL}pokemon/${id}`)
      .pipe(
        map(response => response)
      )
  }
}
