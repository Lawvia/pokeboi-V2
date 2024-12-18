import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TreePine } from 'lucide-react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface WildPokemonAreaProps {
  onExplore: () => void;
  isLoading?: boolean;
}

export function WildPokemonArea({ onExplore, isLoading }: WildPokemonAreaProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="relative min-h-[300px] md:min-h-[400px] rounded-xl overflow-hidden">
      {/* Background Image - Optimized for mobile */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=1280)',
          filter: 'brightness(0.9)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-green-800/50 to-transparent" />
      
      <div className="relative h-full flex flex-col items-center justify-center text-white p-4 md:p-8">
        <AnimatePresence>
          <div className="mb-6 flex gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: 0 }}
                animate={{ y: [-5, 0] }}
                transition={{
                  duration: 1,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <TreePine size={isMobile ? 20 : 24} className="text-green-400" />
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
        
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center text-shadow">
          Explore the Wild
        </h2>
        <p className="text-sm md:text-base text-center mb-6 max-w-md text-shadow">
          Wild Pokémon are hiding in the tall grass. Click to explore and encounter them!
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onExplore}
          disabled={isLoading}
          className="px-6 py-3 bg-green-600 text-white rounded-lg text-lg md:text-xl font-bold shadow-lg 
                   hover:bg-green-700 transition-colors disabled:opacity-50"
        >
          {isLoading ? 'Searching...' : 'Search for Wild Pokémon'}
        </motion.button>
      </div>
    </div>
  );
}