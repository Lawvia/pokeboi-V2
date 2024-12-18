import React from 'react';
import { Pokemon } from '../../types/pokemon';
import { PokemonCard } from './PokemonCard';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface PokemonGridProps {
  pokemon: Pokemon[];
  onPokemonClick: (pokemon: Pokemon) => void;
}

export function PokemonGrid({ pokemon, onPokemonClick }: PokemonGridProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className={`grid gap-4 md:gap-6 ${
      isMobile 
        ? 'grid-cols-2' 
        : 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
    }`}>
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