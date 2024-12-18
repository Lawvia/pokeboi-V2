import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import type { ChartData } from '../../types/statistics';
import { useMediaQuery } from '../../hooks/useMediaQuery';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface BattleChartProps {
  data: ChartData;
  type: 'bar' | 'pie';
  title: string;
}

export function BattleChart({ data, type, title }: BattleChartProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          boxWidth: isMobile ? 12 : 40,
          padding: isMobile ? 10 : 20,
          font: {
            size: isMobile ? 10 : 12
          }
        }
      },
      title: {
        display: true,
        text: title,
        font: {
          size: isMobile ? 14 : 16
        }
      }
    },
    scales: type === 'bar' ? {
      x: {
        ticks: {
          font: {
            size: isMobile ? 10 : 12
          }
        }
      },
      y: {
        ticks: {
          font: {
            size: isMobile ? 10 : 12
          }
        }
      }
    } : undefined
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-full">
      {type === 'bar' ? (
        <Bar options={options} data={data} />
      ) : (
        <Pie options={options} data={data} />
      )}
    </div>
  );
}