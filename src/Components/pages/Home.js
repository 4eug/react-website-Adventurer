import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Subscribe from '../Subscribe';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Subscribe/>
      <Footer />
    </>
  );
}

export default Home;
