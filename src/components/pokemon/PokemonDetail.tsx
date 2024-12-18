import React from 'react';
import { X, ChevronRight } from 'lucide-react';
import { Pokemon } from '../../types/pokemon';
import { PokemonTypeTag } from './PokemonTypeTag';
import { PokemonStats } from './PokemonStats';
import { pokemonData } from '../../data/pokemon';
import { legendaryPokemon } from '../../data/legendaryPokemon';

interface PokemonDetailProps {
  pokemon: Pokemon;
  onClose: () => void;
}

export function PokemonDetail({ pokemon, onClose }: PokemonDetailProps) {
  const allPokemon = [...pokemonData, ...legendaryPokemon];
  const evolutions = pokemon.evolution
    ? pokemon.evolution.map(id => allPokemon.find(p => p.id === id))
    : [];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <img 
              src={pokemon.image} 
              alt={pokemon.name}
              className="w-48 h-48 mx-auto"
            />
            <h2 className="text-2xl font-bold text-center mt-4">{pokemon.name}</h2>
            <div className="flex gap-2 justify-center mt-2">
              {pokemon.types.map((type) => (
                <PokemonTypeTag key={type} type={type} />
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-600">{pokemon.description}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Stats</h3>
              <PokemonStats stats={pokemon.stats} />
            </div>
            
            {evolutions.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Evolution Chain</h3>
                <div className="flex items-center gap-2">
                  <div className="text-center">
                    <img
                      src={pokemon.image}
                      alt={pokemon.name}
                      className="w-20 h-20"
                    />
                    <p className="text-sm mt-1">{pokemon.name}</p>
                  </div>
                  {evolutions.map((evolution, index) => evolution && (
                    <React.Fragment key={evolution.id}>
                      <ChevronRight className="text-gray-400" />
                      <div className="text-center">
                        <img
                          src={evolution.image}
                          alt={evolution.name}
                          className="w-20 h-20"
                        />
                        <p className="text-sm mt-1">{evolution.name}</p>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}