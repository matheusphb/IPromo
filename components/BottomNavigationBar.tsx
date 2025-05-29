
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { RoutePaths } from '../constants';
import { HomeIcon } from './icons/HomeIcon';
import { TagIcon } from './icons/TagIcon';
import { UserIcon } from './icons/UserIcon';
// import { SearchIcon } from './icons/SearchIcon'; // If search is added to bottom nav later

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label, isActive }) => {
  const activeClasses = 'text-yellow-400';
  const inactiveClasses = 'text-violet-300 hover:text-white';

  return (
    <NavLink
      to={to}
      className={`flex flex-col items-center justify-center flex-1 p-2 transition-colors duration-200 ${isActive ? activeClasses : inactiveClasses}`}
    >
      <span className="w-6 h-6 mb-0.5">{icon}</span>
      <span className="text-xs font-medium">{label}</span>
    </NavLink>
  );
};

export const BottomNavigationBar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { to: RoutePaths.HOME, icon: <HomeIcon />, label: 'Início' },
    // Placeholder for Offers/Scan page - currently links to home. Create RoutePaths.OFFERS if a dedicated page is made.
    { to: RoutePaths.HOME, icon: <TagIcon />, label: 'Ofertas' }, 
    // { to: RoutePaths.SEARCH, icon: <SearchIcon />, label: 'Buscar' }, // Example if search is added
    { to: RoutePaths.PROFILE, icon: <UserIcon />, label: 'Perfil' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-violet-700 shadow-top-md flex justify-around items-center h-16 z-40 border-t border-violet-600">
      {navItems.map(item => (
        <NavItem
          key={item.to + item.label}
          to={item.to}
          icon={item.icon}
          label={item.label}
          isActive={location.pathname === item.to}
        />
      ))}
    </nav>
  );
};

// Add shadow-top-md to tailwind.config.js if it's a custom project with its own config.
// For CDN, we can use a simple top shadow or rely on border.
// For now, using border-t for separation. A custom style might be needed for a more pronounced top shadow.
// The style tag below is a simple way to add a top shadow if not using a config file.
// It's better to add this globally or via tailwind config if possible.
// <style>
// .shadow-top-md { box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06); }
// </style>
// Using border-t for now as adding style tags directly here isn't ideal.
