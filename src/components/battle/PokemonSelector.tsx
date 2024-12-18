import React from 'react';
import { Pokemon } from '../../types/pokemon';

interface PokemonSelectorProps {
  availablePokemon: Pokemon[];
  onSelect: (pokemon: Pokemon) => void;
}

export function PokemonSelector({ availablePokemon, onSelect }: PokemonSelectorProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
      {availablePokemon.map((pokemon) => (
        <button
          key={pokemon.id}
          onClick={() => onSelect(pokemon)}
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="w-24 h-24 mx-auto"
          />
          <h3 className="text-center font-semibold mt-2">{pokemon.name}</h3>
          <div className="flex gap-1 justify-center mt-1">
            {pokemon.types.map((type) => (
              <span
                key={type}
                className="px-2 py-1 text-xs rounded-full bg-gray-100"
              >
                {type}
              </span>
            ))}
          </div>
        </button>
      ))}
    </div>
  );
}