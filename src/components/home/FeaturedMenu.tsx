import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getPopularItems } from '../../data/menu';
import MenuCard from '../ui/MenuCard';
import FadeInSection from '../ui/FadeInSection';

const FeaturedMenu: React.FC = () => {
  const popularItems = getPopularItems();

  return (
    <section className="section bg-cream-light">
      <div className="container-custom">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="heading-lg text-charcoal mb-4">Our Popular Items</h2>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              Discover our most beloved offerings, carefully crafted with premium ingredients and served with love.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {popularItems.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} />
          ))}
        </div>

        <FadeInSection>
          <div className="text-center">
            <Link to="/menu" className="btn btn-outline inline-flex items-center">
              <span>View Full Menu</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default FeaturedMenu;