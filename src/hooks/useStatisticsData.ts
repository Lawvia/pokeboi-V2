import { useMemo } from 'react';
import { getStoredStatistics } from '../utils/localStorage';
import { getInventory } from '../utils/inventory';
import type { ChartData } from '../types/statistics';

export function useStatisticsData() {
  const stats = getStoredStatistics();
  const inventory = getInventory();
  
  const battleResultsData: ChartData = useMemo(() => ({
    labels: ['Wins', 'Losses'],
    datasets: [{
      data: [stats.wins, stats.losses],
      backgroundColor: ['rgba(34, 197, 94, 0.6)', 'rgba(239, 68, 68, 0.6)'],
      borderColor: 'white',
      borderWidth: 2,
    }],
  }), [stats.wins, stats.losses]);

  const pokemonUsageData: ChartData = useMemo(() => ({
    labels: Object.keys(stats.pokemonUsage),
    datasets: [{
      label: 'Times Used',
      data: Object.values(stats.pokemonUsage),
      backgroundColor: 'rgba(59, 130, 246, 0.6)',
    }],
  }), [stats.pokemonUsage]);

  const mostUsedPokemon = useMemo(() => 
    Object.entries(stats.pokemonUsage)
      .reduce((a, b) => a[1] > b[1] ? a : b, ['None', 0])[0],
    [stats.pokemonUsage]
  );

  return {
    stats,
    inventory,
    battleResultsData,
    pokemonUsageData,
    mostUsedPokemon
  };
}