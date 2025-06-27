export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image?: string;
  category: 'coffee' | 'tea' | 'pastry' | 'breakfast' | 'lunch';
  popular?: boolean;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}