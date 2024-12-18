import React, { useState, useCallback } from 'react';
import { pokemonData } from '../data/pokemon';
import { legendaryPokemon } from '../data/legendaryPokemon';
import { Pokemon } from '../types/pokemon';
import { PokemonSelector } from '../components/battle/PokemonSelector';
import { BattleArena } from '../components/battle/BattleArena';
import { handleBattleResult } from '../utils/battle';

export function BattlePage() {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [opponentPokemon, setOpponentPokemon] = useState<Pokemon | null>(null);
  const [battleResult, setBattleResult] = useState<'win' | 'lose' | null>(null);

  const allPokemon = [...pokemonData, ...legendaryPokemon];

  const selectRandomOpponent = useCallback(() => {
    const availableOpponents = allPokemon.filter(p => p.id !== selectedPokemon?.id);
    const randomIndex = Math.floor(Math.random() * availableOpponents.length);
    return availableOpponents[randomIndex];
  }, [allPokemon, selectedPokemon]);

  const startBattle = useCallback((pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
    setOpponentPokemon(selectRandomOpponent());
    setBattleResult(null);
    
    setTimeout(() => {
      const won = Math.random() > 0.5;
      setBattleResult(won ? 'win' : 'lose');
      handleBattleResult(pokemon.name, won);
    }, 1000);
  }, [selectRandomOpponent]);

  const handleBattleEnd = useCallback(() => {
    setSelectedPokemon(null);
    setOpponentPokemon(null);
    setBattleResult(null);
  }, []);

  if (!selectedPokemon || !opponentPokemon) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Choose Your Pokémon</h1>
        <PokemonSelector
          availablePokemon={allPokemon}
          onSelect={startBattle}
        />
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Pokémon Battle</h1>
      <BattleArena
        userPokemon={selectedPokemon}
        opponentPokemon={opponentPokemon}
        battleResult={battleResult}
        onBattleEnd={handleBattleEnd}
      />
    </div>
  );
}