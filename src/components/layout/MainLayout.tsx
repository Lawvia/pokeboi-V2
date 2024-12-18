import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface MainLayoutProps {
  children: React.ReactNode;
  currentView: 'starter' | 'legendary' | 'catch' | 'battle' | 'statistics';
  onViewChange: (view: 'starter' | 'legendary' | 'catch' | 'battle' | 'statistics') => void;
}

export function MainLayout({ children, currentView, onViewChange }: MainLayoutProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);

  // Auto-close sidebar on mobile when view changes
  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  }, [currentView, isMobile]);

  // Update sidebar state when screen size changes
  useEffect(() => {
    setIsSidebarOpen(!isMobile);
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        currentView={currentView}
        onViewChange={(view) => {
          onViewChange(view);
          if (isMobile) setIsSidebarOpen(false);
        }}
      />
      
      {/* Floating toggle button - visible only on mobile when sidebar is collapsed */}
      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="fixed top-4 left-4 z-40 p-2 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Open sidebar"
        >
          <Menu size={24} />
        </button>
      )}

      <main 
        className={`transition-all duration-300 ${
          isSidebarOpen && !isMobile ? 'md:pl-64' : 'pl-0'
        }`}
      >
        <div className="p-4 md:p-6">
          {children}
        </div>
      </main>
    </div>
  );
}