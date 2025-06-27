import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'シナモンラテ',
    description: '自家製シナモンシロップとバニラの香りが特徴の看板メニュー',
    price: '580',
    category: 'coffee',
    popular: true,
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg'
  },
  {
    id: 2,
    name: 'エスプレッソ',
    description: '厳選された豆を使用したダブルショット',
    price: '420',
    category: 'coffee',
    image: 'https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg'
  },
  {
    id: 3,
    name: '抹茶ラテ',
    description: '上質な ceremonial grade の抹茶を使用した本格的な一杯',
    price: '620',
    category: 'tea',
    popular: true,
    image: 'https://images.pexels.com/photos/5946640/pexels-photo-5946640.jpeg'
  },
  {
    id: 4,
    name: 'シナモンロール',
    description: '秘伝のレシピで作る自家製シナモンロール、クリームチーズフロスティング添え',
    price: '540',
    category: 'pastry',
    popular: true,
    image: 'https://images.pexels.com/photos/267308/pexels-photo-267308.jpeg'
  },
  {
    id: 5,
    name: 'アボカドトースト',
    description: 'サワードウブレッドに新鮮なアボカド、チェリートマト、マイクログリーンを添えて',
    price: '780',
    category: 'breakfast',
    image: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg'
  },
  {
    id: 6,
    name: '煎茶',
    description: '甘みのある香り高い日本の伝統的な緑茶',
    price: '520',
    category: 'tea',
    image: 'https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg'
  },
  {
    id: 7,
    name: '季節のフルーツタルト',
    description: 'バタークリームのタルトに季節の新鮮なフルーツを贅沢にトッピング',
    price: '620',
    category: 'pastry',
    image: 'https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg'
  },
  {
    id: 8,
    name: 'キヌアボウル',
    description: 'キヌアと季節の焼き野菜、タヒニドレッシングで仕上げた栄養満点のボウル',
    price: '820',
    category: 'lunch',
    image: 'https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg'
  }
];

export const getMenuItemsByCategory = (category: MenuItem['category']) => {
  return menuItems.filter(item => item.category === category);
};

export const getPopularItems = () => {
  return menuItems.filter(item => item.popular);
};