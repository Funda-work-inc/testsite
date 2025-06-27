import React from 'react';
import { MenuItem } from '../../types';
import FadeInSection from './FadeInSection';

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, index }) => {
  return (
    <FadeInSection delay={index * 0.1} className="h-full">
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
        {item.image && (
          <div className="h-48 overflow-hidden">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-serif text-xl font-semibold text-charcoal">{item.name}</h3>
            <span className="text-primary font-medium">¥{item.price}</span>
          </div>
          <p className="text-charcoal-light text-sm mb-4">{item.description}</p>
          {item.popular && (
            <span className="inline-block bg-accent-light text-white text-xs px-2 py-1 rounded-full">
              Popular
            </span>
          )}
        </div>
      </div>
    </FadeInSection>
  );
};

export default MenuCard;