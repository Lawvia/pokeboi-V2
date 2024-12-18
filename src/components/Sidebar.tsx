import React from 'react';
import { Menu } from 'lucide-react';

interface SidebarProps {
  currentView: 'starter' | 'legendary';
  onViewChange: (view: 'starter' | 'legendary') => void;
}

export function Sidebar({ currentView, onViewChange }: SidebarProps) {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg p-6">
      <div className="flex items-center gap-2 mb-8">
        <Menu size={24} />
        <h2 className="text-xl font-bold">Menu</h2>
      </div>
      
      <nav>
        <button
          onClick={() => onViewChange('starter')}
          className={`w-full text-left px-4 py-2 rounded-lg mb-2 ${
            currentView === 'starter' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
          }`}
        >
          Starter Pokémon
        </button>
        <button
          onClick={() => onViewChange('legendary')}
          className={`w-full text-left px-4 py-2 rounded-lg ${
            currentView === 'legendary' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
          }`}
        >
          Legendary Pokémon
        </button>
      </nav>
    </div>
  );
}