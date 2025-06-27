import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Coffee, Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/', label: 'ホーム' },
    { path: '/menu', label: 'メニュー' },
    { path: '/about', label: '私たちについて' },
    { path: '/contact', label: 'お問い合わせ' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <Coffee className="w-8 h-8 text-primary mr-2" />
          <span className="text-xl font-serif font-bold text-charcoal">シナモンカフェ</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <Link 
              key={index}
              to={item.path} 
              className={`relative text-charcoal hover:text-primary transition-colors ${
                isActive(item.path) ? 'font-medium text-primary' : 'font-normal'
              }`}
            >
              {item.label}
              {isActive(item.path) && (
                <motion.div 
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                  layoutId="navbar-underline"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <button 
          className="md:hidden text-charcoal hover:text-primary focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-cream-light z-40 pt-16 md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container-custom flex flex-col space-y-6 pt-8">
            {navItems.map((item, index) => (
              <Link 
                key={index}
                to={item.path} 
                className={`text-2xl ${
                  isActive(item.path) ? 'text-primary font-medium' : 'text-charcoal'
                }`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar