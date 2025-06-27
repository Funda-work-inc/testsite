import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { menuItems, getMenuItemsByCategory } from '../data/menu';
import { MenuItem } from '../types';
import MenuCard from '../components/ui/MenuCard';
import FadeInSection from '../components/ui/FadeInSection';

const categories: { label: string; value: MenuItem['category'] }[] = [
  { label: 'コーヒー', value: 'coffee' },
  { label: 'お茶', value: 'tea' },
  { label: 'ペイストリー', value: 'pastry' },
  { label: 'モーニング', value: 'breakfast' },
  { label: 'ランチ', value: 'lunch' },
];

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuItem['category']>('coffee');
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    document.title = 'メニュー - シナモンカフェ';
    setFilteredItems(getMenuItemsByCategory(activeCategory));
  }, [activeCategory]);

  return (
    <div className="pt-24 pb-16">
      <FadeInSection>
        <div className="bg-primary py-16 mb-12">
          <div className="container-custom text-center">
            <h1 className="heading-lg text-white mb-4">メニュー</h1>
            <p className="text-cream-light max-w-2xl mx-auto">
              厳選された素材と愛情を込めて作る、こだわりのドリンクとお食事をご用意しております。
            </p>
          </div>
        </div>
      </FadeInSection>

      <div className="container-custom">
        <FadeInSection direction="up">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === category.value
                    ? 'bg-primary text-white'
                    : 'bg-cream hover:bg-cream-dark text-charcoal'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} />
          ))}

          {filteredItems.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-charcoal-light">
                申し訳ございません。{categories.find(c => c.value === activeCategory)?.label}のメニューは現在更新中です。
                他のカテゴリーをご覧いただくか、後ほど再度お確かめください。
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuPage