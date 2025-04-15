
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const NavBar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="w-full py-4 px-6 md:px-10 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="text-4xl font-bold">
          TORR<span className="text-torrex-primary">EX</span>
        </Link>
      </div>
      
      <nav className="hidden md:flex items-center gap-8 mx-4">
        <Link 
          to="/downloads" 
          className={`text-lg font-medium py-2 relative ${isActive('/downloads') ? 'text-black' : 'text-gray-600 hover:text-black'}`}
        >
          DOWNLOADS
          {isActive('/downloads') && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-torrex-primary"></div>
          )}
        </Link>
        <Link 
          to="/uploads" 
          className={`text-lg font-medium py-2 relative ${isActive('/uploads') ? 'text-black' : 'text-gray-600 hover:text-black'}`}
        >
          UPLOADS
          {isActive('/uploads') && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-torrex-primary"></div>
          )}
        </Link>
        <Link 
          to="/preferences" 
          className={`text-lg font-medium py-2 relative ${isActive('/preferences') ? 'text-black' : 'text-gray-600 hover:text-black'}`}
        >
          PREFERENCES
          {isActive('/preferences') && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-torrex-primary"></div>
          )}
        </Link>
      </nav>
      
      <div className="relative w-64 md:w-80">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <Input 
          type="text" 
          placeholder="Search.." 
          className="w-full bg-gray-200 pl-10 rounded-full focus:outline-none focus:ring-2 focus:ring-torrex-primary" 
        />
      </div>
    </header>
  );
};

export default NavBar;
