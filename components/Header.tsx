
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchIcon } from './icons/SearchIcon';
import { BellIcon } from './icons/BellIcon';
import { UserIcon } from './icons/UserIcon';
import { APP_NAME, RoutePaths } from '../constants';

export const Header: React.FC = () => {
  const navigate = useNavigate();

  // Placeholder actions
  const handleSearch = () => console.log('Search clicked');
  const handleNotifications = () => console.log('Notifications clicked');
  const handleProfile = () => navigate(RoutePaths.PROFILE); // Navigate to Profile Page

  return (
    <header className="bg-violet-700 text-white p-4 flex items-center justify-between sticky top-0 z-50 shadow-md">
      <Link to={RoutePaths.HOME} className="text-xl sm:text-2xl font-bold tracking-tight">
        {APP_NAME}
      </Link>
      <div className="flex items-center space-x-2 sm:space-x-3">
        <button onClick={handleSearch} aria-label="Search" className="p-2 hover:bg-violet-600 rounded-full transition-colors">
          <SearchIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button onClick={handleNotifications} aria-label="Notifications" className="p-2 hover:bg-violet-600 rounded-full transition-colors">
          <BellIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button onClick={handleProfile} aria-label="Profile" className="p-2 hover:bg-violet-600 rounded-full transition-colors">
          <UserIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </header>
  );
};