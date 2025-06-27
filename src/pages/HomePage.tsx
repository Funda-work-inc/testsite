import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import FeaturedMenu from '../components/home/FeaturedMenu';
import About from '../components/home/About';
import Gallery from '../components/home/Gallery';
import Contact from '../components/home/Contact';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Cinnamon Cafe - A Cozy Space for Coffee Lovers';
  }, []);

  return (
    <div>
      <Hero />
      <FeaturedMenu />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
};

export default HomePage;