import { useState, useCallback } from 'react';
import { Pokemon } from '../types/pokemon';
import { pokemonData } from '../data/pokemon';
import { legendaryPokemon } from '../data/legendaryPokemon';

export function useEncounter() {
  const [encounterPokemon, setEncounterPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const allPokemon = [...pokemonData, ...legendaryPokemon];

  const generateEncounter = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * allPokemon.length);
      setEncounterPokemon(allPokemon[randomIndex]);
      setIsLoading(false);
    }, 1000);
  }, [allPokemon]);

  const clearEncounter = useCallback(() => {
    setEncounterPokemon(null);
  }, []);

  return {
    encounterPokemon,
    isLoading,
    generateEncounter,
    clearEncounter
  };
}