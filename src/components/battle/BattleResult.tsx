import React from 'react';
import { Pokemon } from '../../types/pokemon';
import { motion } from 'framer-motion';
import { Sparkles, Frown, Package } from 'lucide-react';

interface BattleResultProps {
  result: 'win' | 'lose';
  winner: Pokemon;
  onRematch: () => void;
}

export function BattleResult({ result, winner, onRematch }: BattleResultProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <div className="text-6xl mb-4">
          {result === 'win' ? <Sparkles className="text-yellow-500 mx-auto" /> : <Frown className="text-blue-500 mx-auto" />}
        </div>
        <h2 className="text-2xl font-bold mb-4">
          {result === 'win' ? 'Victory!' : 'Defeat!'}
        </h2>
        <p className="mb-2">{winner.name} wins the battle!</p>
        {result === 'win' && (
          <p className="flex items-center justify-center gap-2 text-green-600 mb-4">
            <Package size={20} />
            Received 1 Pokéball!
          </p>
        )}
        <button
          onClick={onRematch}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Battle Again
        </button>
      </div>
    </motion.div>
  );
}