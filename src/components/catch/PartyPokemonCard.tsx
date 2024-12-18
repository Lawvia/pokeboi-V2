import React from 'react';
import { PartyPokemon } from '../../types/party';
import { PokemonTypeTag } from '../pokemon/PokemonTypeTag';
import { formatDistanceToNow } from '../../utils/date';

interface PartyPokemonCardProps {
  pokemon: PartyPokemon;
  onClick: () => void;
}

export function PartyPokemonCard({ pokemon, onClick }: PartyPokemonCardProps) {
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
      <h2 className="text-xl font-bold text-center mb-1">
        {pokemon.nickname || pokemon.name}
      </h2>
      {pokemon.nickname && (
        <p className="text-sm text-gray-500 text-center mb-2">({pokemon.name})</p>
      )}
      <div className="flex gap-2 justify-center mb-2">
        {pokemon.types.map((type) => (
          <PokemonTypeTag key={type} type={type} />
        ))}
      </div>
      <p className="text-sm text-gray-500 text-center">
        Caught {formatDistanceToNow(pokemon.caughtAt)} ago
      </p>
    </div>
  );
}