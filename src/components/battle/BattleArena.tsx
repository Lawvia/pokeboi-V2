import React from 'react';
import { motion } from 'framer-motion';
import { Pokemon } from '../../types/pokemon';
import { BattleResult } from './BattleResult';

interface BattleArenaProps {
  userPokemon: Pokemon;
  opponentPokemon: Pokemon;
  battleResult?: 'win' | 'lose' | null;
  onBattleEnd: () => void;
}

export function BattleArena({ userPokemon, opponentPokemon, battleResult, onBattleEnd }: BattleArenaProps) {
  const userPokemonVariants = {
    win: {
      x: [0, -50, 50, -50, 50, 0],
      transition: { duration: 1, ease: "easeInOut" }
    },
    lose: {
      rotate: 90,
      y: 50,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative min-h-[400px] bg-gradient-to-b from-blue-100 to-blue-50 rounded-xl p-8 shadow-lg">
      <div className="flex justify-between items-center mb-8">
        {/* User Pokemon */}
        <motion.div
          className="w-48"
          animate={battleResult ? battleResult : {}}
          variants={userPokemonVariants}
        >
          <img
            src={userPokemon.image}
            alt={userPokemon.name}
            className="w-full h-auto"
          />
          <h3 className="text-center font-bold mt-2">{userPokemon.name}</h3>
        </motion.div>

        {/* VS Symbol */}
        <div className="text-4xl font-bold text-red-500">VS</div>

        {/* Opponent Pokemon */}
        <div className="w-48">
          <img
            src={opponentPokemon.image}
            alt={opponentPokemon.name}
            className="w-full h-auto"
          />
          <h3 className="text-center font-bold mt-2">{opponentPokemon.name}</h3>
        </div>
      </div>

      {battleResult && (
        <BattleResult 
          result={battleResult} 
          winner={battleResult === 'win' ? userPokemon : opponentPokemon}
          onRematch={onBattleEnd}
        />
      )}
    </div>
  );
}