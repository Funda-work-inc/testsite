import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 to-charcoal/50"></div>
      </div>
      
      <div className="relative container-custom h-full flex flex-col justify-center">
        <motion.div 
          className="max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white font-bold leading-tight mb-4">
            心温まる<span className="text-secondary">くつろぎの</span>空間
          </h1>
          
          <p className="text-lg md:text-xl text-cream-light mb-8">
            丁寧に淹れたコーヒーと手作りのペイストリーを、まるで我が家のようなくつろぎの空間でお楽しみください。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/menu" className="btn btn-primary inline-flex items-center justify-center">
              <Coffee className="w-5 h-5 mr-2" />
              <span>メニューを見る</span>
            </Link>
            
            <div className="flex items-center text-cream-light">
              <Clock className="w-5 h-5 mr-2 text-secondary" />
              <span>本日の営業時間: 7:30 - 21:00</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-8 h-12 border-2 border-cream rounded-full flex justify-center">
          <motion.div 
            className="w-1.5 h-3 bg-cream rounded-full mt-2"
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut" 
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero