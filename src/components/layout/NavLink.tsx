import React from 'react';

interface NavLinkProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  isCollapsed?: boolean;
}

export function NavLink({ children, isActive, onClick, isCollapsed }: NavLinkProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-2 rounded-lg transition-colors
        ${isActive 
          ? 'bg-blue-500 text-white' 
          : 'hover:bg-gray-100'
        } ${isCollapsed 
          ? 'justify-center items-center' 
          : ''
        }`}
    >
      {!isCollapsed ? children : (
        <span className="block text-center" title={children?.toString()}>
          {children?.toString().charAt(0)}
        </span>
      )}
    </button>
  );
}