import { BattleStatistics } from '../types/statistics';

const STATS_KEY = 'pokemon_battle_statistics';

export function getStoredStatistics(): BattleStatistics {
  const storedStats = localStorage.getItem(STATS_KEY);
  if (storedStats) {
    return JSON.parse(storedStats);
  }
  return {
    totalBattles: 0,
    wins: 0,
    losses: 0,
    pokemonUsage: {}
  };
}

export function updateBattleStatistics(pokemonName: string, won: boolean) {
  const stats = getStoredStatistics();
  
  // Update battle counts
  stats.totalBattles += 1;
  if (won) {
    stats.wins += 1;
  } else {
    stats.losses += 1;
  }
  
  // Update pokemon usage
  stats.pokemonUsage[pokemonName] = (stats.pokemonUsage[pokemonName] || 0) + 1;
  
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  return stats;
}