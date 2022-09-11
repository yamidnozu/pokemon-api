

export class DataPokemon {
    id: string = '';
    imageURL: string = '';
    isFavorite?: boolean = false;
    constructor(
      public name: string,
      public url: string,
    ) {
      this.getId()
      this.getImageUrl()
    }
  
  
    getId(): string {
      const url = this.url;
      if (this.url) {
        const reg = url.match('([0-9]+)\/$') || '';
        this.id = reg[1];
      }
      return this.id;
    }
  
    getImageUrl() {
      this.imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.id}.svg`;
    }
  }
  
  export interface IFavorite {
    id?: string;
    pokemon: DataPokemon
  }
  
  export interface IResult {
    name: string;
    url: string;
  }
  
  export interface IResponsePokemons {
    count: number;
    next: string;
    previous?: any;
    results: IResult[];
  }
  

  

export interface Species {
  name: string;
  url: string;
}



export interface Type2 {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: Type2;
}

export interface ResponsePokemonById {
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  name: string;
  order: number;

  species: Species;
  types: Type[];
  weight: number;
}


