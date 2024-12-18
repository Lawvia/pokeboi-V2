import React, { useState, useMemo } from 'react';
import { pokemonData } from './data/pokemon';
import { legendaryPokemon } from './data/legendaryPokemon';
import { PokemonDetail } from './components/pokemon/PokemonDetail';
import { SearchBar } from './components/common/SearchBar';
import { PokemonGrid } from './components/pokemon/PokemonGrid';
import { MainLayout } from './components/layout/MainLayout';
import { BattlePage } from './pages/BattlePage';
import { CatchPage } from './pages/CatchPage';
import { StatisticsPage } from './pages/StatisticsPage';
import type { Pokemon } from './types/pokemon';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentView, setCurrentView] = useState<'starter' | 'legendary' | 'catch' | 'battle' | 'statistics'>('starter');

  const currentPokemonList = currentView === 'starter' ? pokemonData : legendaryPokemon;

  const filteredPokemon = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return currentPokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(query) ||
      pokemon.types.some(type => type.toLowerCase().includes(query))
    );
  }, [currentPokemonList, searchQuery]);

  const renderContent = () => {
    switch (currentView) {
      case 'catch':
        return <CatchPage />;
      case 'battle':
        return <BattlePage />;
      case 'statistics':
        return <StatisticsPage />;
      default:
        return (
          <>
            <h1 className="text-4xl font-bold text-center mb-8">Pokédex</h1>
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <PokemonGrid
              pokemon={filteredPokemon}
              onPokemonClick={setSelectedPokemon}
            />
            {selectedPokemon && (
              <PokemonDetail
                pokemon={selectedPokemon}
                onClose={() => setSelectedPokemon(null)}
              />
            )}
          </>
        );
    }
  };

  return (
    <MainLayout currentView={currentView} onViewChange={setCurrentView}>
      {renderContent()}
    </MainLayout>
  );
}

export default App;