import React from 'react';
import { Pokemon } from '../data/pokemon';
import { PokemonCard } from './PokemonCard';

interface PokemonGridProps {
  pokemon: Pokemon[];
  onPokemonClick: (pokemon: Pokemon) => void;
}

export function PokemonGrid({ pokemon, onPokemonClick }: PokemonGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {pokemon.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onClick={() => onPokemonClick(pokemon)}
        />
      ))}
    </div>
  );
}