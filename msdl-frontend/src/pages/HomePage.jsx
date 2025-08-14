import React from 'react';
import Hero from '../components/Hero';
import FullProductList from '../components/FullProductList';
import TrustBadges from '../components/TrustBadges';

const HomePage = () => {
  return (
    <div className="space-y-8 md:space-y-8">
      <Hero />
      <FullProductList />
      <TrustBadges />
    </div>
  );
};

export default HomePage;