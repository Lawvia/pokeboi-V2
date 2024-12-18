import { useState, useCallback } from 'react';
import { Pokemon } from '../types/pokemon';
import { usePokeball, addCaughtPokemon } from '../utils/inventory';

export function useCatchPokemon() {
  const [isAttempting, setIsAttempting] = useState(false);
  const [catchResult, setCatchResult] = useState<boolean | undefined>();
  const [showRename, setShowRename] = useState(false);

  const attemptCatch = useCallback((pokemon: Pokemon) => {
    if (!usePokeball()) {
      alert('No Pokeballs left! Win battles to get more.');
      return false;
    }

    setIsAttempting(true);
    setCatchResult(undefined);
    
    setTimeout(() => {
      const success = Math.random() >= 0.5;
      setCatchResult(success);
    }, 2000);

    return true;
  }, []);

  const handleCatchAnimationComplete = useCallback(() => {
    setIsAttempting(false);
    if (catchResult) {
      setShowRename(true);
    }
  }, [catchResult]);

  const handleRename = useCallback((pokemon: Pokemon, nickname: string) => {
    addCaughtPokemon(pokemon, nickname);
    setShowRename(false);
    setCatchResult(undefined);
  }, []);

  return {
    isAttempting,
    catchResult,
    showRename,
    attemptCatch,
    handleCatchAnimationComplete,
    handleRename,
    setShowRename,
    setCatchResult
  };
}