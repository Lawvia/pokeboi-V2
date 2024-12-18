import { UserInventory, PartyPokemon } from '../types/party';
import { Pokemon } from '../types/pokemon';

const INVENTORY_KEY = 'pokemon_inventory';

export function getInventory(): UserInventory {
  const stored = localStorage.getItem(INVENTORY_KEY);
  if (stored) {
    const inventory = JSON.parse(stored);
    // Convert stored dates back to Date objects
    inventory.caughtPokemon = inventory.caughtPokemon.map((pokemon: PartyPokemon) => ({
      ...pokemon,
      caughtAt: new Date(pokemon.caughtAt)
    }));
    return inventory;
  }
  return {
    pokeballs: 0,
    caughtPokemon: []
  };
}

export function addPokeball() {
  const inventory = getInventory();
  inventory.pokeballs += 1;
  localStorage.setItem(INVENTORY_KEY, JSON.stringify(inventory));
  return inventory;
}

export function usePokeball(): boolean {
  const inventory = getInventory();
  if (inventory.pokeballs > 0) {
    inventory.pokeballs -= 1;
    localStorage.setItem(INVENTORY_KEY, JSON.stringify(inventory));
    return true;
  }
  return false;
}

export function addCaughtPokemon(pokemon: Pokemon, nickname?: string): PartyPokemon {
  const inventory = getInventory();
  const partyPokemon: PartyPokemon = {
    id: `${pokemon.id}-${Date.now()}`,
    baseId: pokemon.id,
    name: pokemon.name,
    nickname,
    types: pokemon.types,
    image: pokemon.image,
    stats: pokemon.stats,
    caughtAt: new Date()
  };
  
  inventory.caughtPokemon.push(partyPokemon);
  localStorage.setItem(INVENTORY_KEY, JSON.stringify(inventory));
  return partyPokemon;
}