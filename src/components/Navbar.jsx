import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = ({ isDark, setIsDark, activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isDark ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-md border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="max-w-full mx-auto px-8 sm:px-12 lg:px-16">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-linear-to-r from-pink-500 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
            Narendra
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {['Home', 'Projects', 'Skills', 'Academic', 'Contact'].map(item => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())} 
                className={`relative pb-1 transition-colors ${activeSection === item.toLowerCase() ? 'text-fuchsia-500' : 'hover:text-pink-400'}`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-pink-500 via-fuchsia-500 to-purple-600"></span>
                )}
              </button>
            ))}
            <button 
              onClick={() => setIsDark(!isDark)} 
              className={`p-2 rounded-full transition-all duration-300 ${isDark ? 'bg-indigo-500/20 hover:bg-indigo-500/30' : 'bg-yellow-500/20 hover:bg-yellow-500/30'}`}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-500" />
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={() => setIsDark(!isDark)} 
              className={`p-2 rounded-full transition-all duration-300 ${isDark ? 'bg-indigo-500/20 hover:bg-indigo-500/30' : 'bg-yellow-500/20 hover:bg-yellow-500/30'}`}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-500" />
              )}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className={`md:hidden ${isDark ? 'bg-gray-800' : 'bg-white'} border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          {['Home', 'Projects', 'Skills', 'Academic', 'Contact'].map(item => (
            <button 
              key={item} 
              onClick={() => {
                scrollToSection(item.toLowerCase());
                setIsMenuOpen(false);
              }} 
              className={`block w-full text-left px-4 py-3 hover:bg-indigo-500/10 ${activeSection === item.toLowerCase() ? 'text-indigo-500 border-l-4 border-indigo-500' : ''}`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;