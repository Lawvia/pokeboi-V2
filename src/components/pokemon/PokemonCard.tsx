import React from 'react';
import { Pokemon } from '../../types/pokemon';
import { PokemonTypeTag } from './PokemonTypeTag';

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
          <PokemonTypeTag key={type} type={type} />
        ))}
      </div>
    </div>
  );
}