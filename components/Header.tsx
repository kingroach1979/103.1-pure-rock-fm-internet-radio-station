
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-rock-gray shadow-md sticky top-0 z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
           <svg className="w-12 h-12 text-rock-red mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6zm-2 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
            </svg>
          <h1 className="text-2xl md:text-3xl font-display font-black text-rock-light tracking-widest">
            103.1 <span className="text-rock-red">PURE ROCK</span> FM
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
