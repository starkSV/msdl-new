import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-800 to-blue-600 backdrop-blur-sm sticky top-0 z-10 border-b border-primary-light">
      <nav className="max-w-screen-xl container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-lg font-bold text-white">
          Windows ISO Downloader
        </Link>
        <a 
          href="https://tech-latest.com"
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-sm text-slate-300 hover:text-white transition-colors"
        >
          &larr; Back to Techlatest
        </a>
      </nav>
    </header>
  );
};

export default Header;