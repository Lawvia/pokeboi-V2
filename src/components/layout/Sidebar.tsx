import React from 'react';
import { ChevronLeft, Book, Crown, Swords, BarChart, Target } from 'lucide-react';
import { NavLink } from './NavLink';

interface SidebarProps {
  currentView?: 'starter' | 'legendary' | 'catch' | 'battle' | 'statistics';
  onViewChange?: (view: 'starter' | 'legendary' | 'catch' | 'battle' | 'statistics') => void;
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({ currentView = 'starter', onViewChange, isOpen, onToggle }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full bg-white shadow-lg z-30 transition-all duration-300 ${
        isOpen ? 'w-64 translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <button
                onClick={onToggle}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close sidebar"
              >
                <ChevronLeft size={24} />
              </button>
              <h2 className="text-xl font-bold">Menu</h2>
            </div>
          </div>
          
          <nav className="space-y-2">
            <NavLink
              isActive={currentView === 'starter'}
              onClick={() => onViewChange?.('starter')}
            >
              <div className="flex items-center gap-2">
                <Book size={20} />
                <span>Starter Pokémon</span>
              </div>
            </NavLink>
            <NavLink
              isActive={currentView === 'legendary'}
              onClick={() => onViewChange?.('legendary')}
            >
              <div className="flex items-center gap-2">
                <Crown size={20} />
                <span>Legendary Pokémon</span>
              </div>
            </NavLink>
            <NavLink
              isActive={currentView === 'catch'}
              onClick={() => onViewChange?.('catch')}
            >
              <div className="flex items-center gap-2">
                <Target size={20} />
                <span>Catch Pokémon</span>
              </div>
            </NavLink>
            <NavLink
              isActive={currentView === 'battle'}
              onClick={() => onViewChange?.('battle')}
            >
              <div className="flex items-center gap-2">
                <Swords size={20} />
                <span>Battle Arena</span>
              </div>
            </NavLink>
            <NavLink
              isActive={currentView === 'statistics'}
              onClick={() => onViewChange?.('statistics')}
            >
              <div className="flex items-center gap-2">
                <BarChart size={20} />
                <span>Statistics</span>
              </div>
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
}