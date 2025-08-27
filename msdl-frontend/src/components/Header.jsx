import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const navLinkClasses = "px-3 py-1 rounded-md text-sm font-medium transition-colors";
  const activeLinkClasses = "bg-white/20 text-white";
  const inactiveLinkClasses = "text-slate-300 hover:bg-white/5 hover:text-white";
  return (
    <header className="bg-gradient-to-r from-blue-800 to-blue-600 backdrop-blur-sm sticky top-0 z-10 border-b border-primary-light">
      <nav className="max-w-screen-xl container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-lg font-bold text-white">
          Windows ISO Downloader
        </Link>
        {/* Right-side links container */}
        <div className="flex items-center gap-2 text-sm">
          <NavLink to="/about" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>
            About
          </NavLink>
          <NavLink to="/privacy-policy" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>
            Privacy Policy
          </NavLink>
          <a 
            href="https://tech-latest.com"
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-300 hover:text-white transition-colors"
          >
            &larr; Back to Techlatest
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;