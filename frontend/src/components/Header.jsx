import React from 'react';

const Header = ({ onLogout }) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 md:px-8 shadow-lg fixed top-0 left-0 w-full z-30">
      <div className="flex items-center justify-between max-w-7xl mx-auto gap-2">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          
          <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
            Student Course Enrollment<br className="sm:hidden" /> Management System
          </h1>
        </div>
        
        {onLogout && (
          <button
            onClick={onLogout}
            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-4 md:px-6 py-2 rounded-lg transition-colors shadow-md text-sm md:text-base whitespace-nowrap flex-shrink-0"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
