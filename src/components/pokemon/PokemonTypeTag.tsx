import React from 'react';

interface PokemonTypeTagProps {
  type: string;
}

const TYPE_COLORS = {
  Fire: 'bg-red-500',
  Water: 'bg-blue-500',
  Grass: 'bg-green-500',
  Electric: 'bg-yellow-500',
  Poison: 'bg-purple-500',
  Ice: 'bg-cyan-500',
  Flying: 'bg-indigo-500',
  Psychic: 'bg-pink-500',
  Normal: 'bg-gray-500',
  Ground: 'bg-amber-600',
  Rock: 'bg-stone-600',
  Dragon: 'bg-violet-600',
  Ghost: 'bg-purple-800',
  Dark: 'bg-gray-800',
  Steel: 'bg-slate-500',
  Fairy: 'bg-pink-400',
  Fighting: 'bg-red-700',
  Bug: 'bg-lime-600',
};

export function PokemonTypeTag({ type }: PokemonTypeTagProps) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-sm text-white ${TYPE_COLORS[type as keyof typeof TYPE_COLORS] || 'bg-gray-500'}`}
    >
      {type}
    </span>
  );
}