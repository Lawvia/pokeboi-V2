export interface PokemonStat {
  name: string;
  value: number;
}

export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  image: string;
  stats: PokemonStat[];
  evolution?: number[];
  description: string;
}