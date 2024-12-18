import React from 'react';
import { Swords, Trophy, XCircle, Activity, Package, Backpack } from 'lucide-react';
import { StatisticsGrid } from '../components/statistics/StatisticsGrid';
import { StatisticsCharts } from '../components/statistics/StatisticsCharts';
import { useStatisticsData } from '../hooks/useStatisticsData';

export function StatisticsPage() {
  const { stats, inventory, battleResultsData, pokemonUsageData, mostUsedPokemon } = useStatisticsData();

  const statsCards = [
    {
      title: "Total Battles",
      value: stats.totalBattles,
      icon: <Swords className="text-blue-500" />,
      color: "border-l-4 border-blue-500"
    },
    {
      title: "Victories",
      value: stats.wins,
      icon: <Trophy className="text-green-500" />,
      color: "border-l-4 border-green-500"
    },
    {
      title: "Defeats",
      value: stats.losses,
      icon: <XCircle className="text-red-500" />,
      color: "border-l-4 border-red-500"
    },
    {
      title: "Most Used",
      value: mostUsedPokemon,
      icon: <Activity className="text-purple-500" />,
      color: "border-l-4 border-purple-500"
    },
    {
      title: "Pokéballs",
      value: inventory.pokeballs,
      icon: <Package className="text-amber-500" />,
      color: "border-l-4 border-amber-500"
    },
    {
      title: "Pokémon Caught",
      value: inventory.caughtPokemon.length,
      icon: <Backpack className="text-teal-500" />,
      color: "border-l-4 border-teal-500"
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Battle Statistics</h1>
      <StatisticsGrid stats={statsCards} />
      <StatisticsCharts 
        battleResultsData={battleResultsData}
        pokemonUsageData={pokemonUsageData}
      />
    </div>
  );
}