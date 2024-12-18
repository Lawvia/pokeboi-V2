import React from 'react';
import { BattleChart } from './BattleChart';
import type { ChartData } from '../../types/statistics';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface StatisticsChartsProps {
  battleResultsData: ChartData;
  pokemonUsageData: ChartData;
}

export function StatisticsCharts({ battleResultsData, pokemonUsageData }: StatisticsChartsProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
      <div className={isMobile ? 'h-[300px]' : 'h-[400px]'}>
        <BattleChart
          data={battleResultsData}
          type="pie"
          title="Battle Results"
        />
      </div>
      <div className={isMobile ? 'h-[300px]' : 'h-[400px]'}>
        <BattleChart
          data={pokemonUsageData}
          type="bar"
          title="Pokémon Usage"
        />
      </div>
    </div>
  );
}