import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black text-white text-center py-4 text-sm flex-shrink-0 border-t border-gray-700 dark:border-gray-600 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="mb-2">
          &copy; {currentYear} Pixlyzer - a{' '}
          <a href="https://tech-latest.com" target="_blank" rel="noopener noreferrer" className="text-[#D90429] hover:text-accent">
            TechLatest
          </a>{' '}
          product
        </p>
        <div className="space-x-2">
          <span>Explore Our Other Tools:</span> 
          <a href="https://pixlyzer.tech-latest.com/" className="hover:text-accent underline">Pixlyzer</a>
          <span>&</span>
          <a href="https://bottleneck.tech-latest.com/" className="hover:text-accent underline">Bottleneck Calculator</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;