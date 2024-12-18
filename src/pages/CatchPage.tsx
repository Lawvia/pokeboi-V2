import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CatchAnimation } from '../components/catch/CatchAnimation';
import { RenameModal } from '../components/catch/RenameModal';
import { PartyPokemonCard } from '../components/catch/PartyPokemonCard';
import { WildPokemonArea } from '../components/catch/WildPokemonArea';
import { PokemonDetail } from '../components/pokemon/PokemonDetail';
import { getInventory } from '../utils/inventory';
import { useCatchPokemon } from '../hooks/useCatchPokemon';
import { useEncounter } from '../hooks/useEncounter';

type TabType = 'roam' | 'party';

export function CatchPage() {
  const [currentTab, setCurrentTab] = useState<TabType>('roam');
  const [selectedPartyPokemon, setSelectedPartyPokemon] = useState<Pokemon | null>(null);

  const {
    encounterPokemon,
    isLoading,
    generateEncounter,
    clearEncounter
  } = useEncounter();

  const {
    isAttempting,
    catchResult,
    showRename,
    attemptCatch,
    handleCatchAnimationComplete,
    handleRename,
    setShowRename,
    setCatchResult
  } = useCatchPokemon();

  const inventory = getInventory();

  const renderRoamContent = () => (
    <div className="text-center">
      {!encounterPokemon ? (
        <WildPokemonArea onExplore={generateEncounter} isLoading={isLoading} />
      ) : (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
          <img
            src={encounterPokemon.image}
            alt={encounterPokemon.name}
            className="w-48 h-48 mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold mb-4">
            A wild {encounterPokemon.name} appeared!
          </h2>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => attemptCatch(encounterPokemon)}
              disabled={isAttempting}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50"
            >
              Throw Pokéball ({inventory.pokeballs} left)
            </button>
            <button
              onClick={clearEncounter}
              disabled={isAttempting}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50"
            >
              Run Away
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const renderPartyContent = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {inventory.caughtPokemon.map((pokemon) => (
        <PartyPokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onClick={() => setSelectedPartyPokemon(pokemon)}
        />
      ))}
    </div>
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Catch Pokémon</h1>
        <div className="text-lg">
          <span className="mr-4">Pokéballs: {inventory.pokeballs}</span>
          <span>Caught: {inventory.caughtPokemon.length}</span>
        </div>
      </div>

      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setCurrentTab('roam')}
          className={`px-6 py-2 rounded-lg ${
            currentTab === 'roam'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Roam
        </button>
        <button
          onClick={() => setCurrentTab('party')}
          className={`px-6 py-2 rounded-lg ${
            currentTab === 'party'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Party ({inventory.caughtPokemon.length})
        </button>
      </div>

      {currentTab === 'roam' ? renderRoamContent() : renderPartyContent()}

      <CatchAnimation
        isAttempting={isAttempting}
        isSuccess={catchResult}
        onComplete={handleCatchAnimationComplete}
      />

      {showRename && encounterPokemon && (
        <RenameModal
          pokemonName={encounterPokemon.name}
          onSubmit={(nickname) => {
            handleRename(encounterPokemon, nickname);
            clearEncounter();
          }}
          onClose={() => {
            setShowRename(false);
            clearEncounter();
            setCatchResult(undefined);
          }}
        />
      )}

      {selectedPartyPokemon && (
        <PokemonDetail
          pokemon={selectedPartyPokemon}
          onClose={() => setSelectedPartyPokemon(null)}
        />
      )}
    </div>
  );
}