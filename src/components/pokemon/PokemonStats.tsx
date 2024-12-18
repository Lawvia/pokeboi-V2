import React from 'react';
import type { PokemonStat } from '../../types/pokemon';

interface PokemonStatsProps {
  stats: PokemonStat[];
}

export function PokemonStats({ stats }: PokemonStatsProps) {
  return (
    <div className="space-y-2">
      {stats.map((stat) => (
        <div key={stat.name} className="flex items-center">
          <span className="w-20 text-gray-600">{stat.name}</span>
          <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-300"
              style={{ width: `${(stat.value / 100) * 100}%` }}
            />
          </div>
          <span className="w-12 text-right text-gray-600">{stat.value}</span>
        </div>
      ))}
    </div>
  );
}