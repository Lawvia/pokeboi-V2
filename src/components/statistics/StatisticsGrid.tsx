import React from 'react';
import { StatCard } from './StatCard';

interface StatData {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  color: string;
}

interface StatisticsGridProps {
  stats: StatData[];
}

export function StatisticsGrid({ stats }: StatisticsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          color={stat.color}
        />
      ))}
    </div>
  );
}