export interface PartyPokemon {
  id: string; // Unique ID for each caught Pokemon
  baseId: number; // Original Pokemon ID
  name: string; // Custom name if renamed, original name if not
  nickname?: string;
  types: string[];
  image: string;
  stats: {
    name: string;
    value: number;
  }[];
  caughtAt: Date;
}

export interface UserInventory {
  pokeballs: number;
  caughtPokemon: PartyPokemon[];
}