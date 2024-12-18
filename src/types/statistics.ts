export interface BattleStatistics {
  totalBattles: number;
  wins: number;
  losses: number;
  pokemonUsage: Record<string, number>;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string[];
    borderColor?: string;
    borderWidth?: number;
  }[];
}