import React from 'react';
import { Pokemon } from '../data/pokemon';

interface PokemonCardProps {
  pokemon: Pokemon;
  onClick: () => void;
}

export function PokemonCard({ pokemon, onClick }: PokemonCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg shadow-lg p-4 cursor-pointer transform transition-transform hover:scale-105"
    >
      <img 
        src={pokemon.image} 
        alt={pokemon.name}
        className="w-32 h-32 mx-auto mb-4"
      />
      <h2 className="text-xl font-bold text-center mb-2">{pokemon.name}</h2>
      <div className="flex gap-2 justify-center">
        {pokemon.types.map((type) => (
          <span
            key={type}
            className={`px-3 py-1 rounded-full text-sm text-white
              ${type === 'Fire' ? 'bg-red-500' :
                type === 'Water' ? 'bg-blue-500' :
                type === 'Grass' ? 'bg-green-500' :
                type === 'Electric' ? 'bg-yellow-500' :
                type === 'Poison' ? 'bg-purple-500' :
                'bg-gray-500'}`}
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
}