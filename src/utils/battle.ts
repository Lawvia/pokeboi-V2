import { updateBattleStatistics } from './localStorage';
import { addPokeball } from './inventory';

export function handleBattleResult(pokemonName: string, won: boolean) {
  updateBattleStatistics(pokemonName, won);
  if (won) {
    addPokeball();
  }
  return won;
}