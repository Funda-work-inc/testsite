import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-cream pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Brief */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Coffee className="w-6 h-6 text-secondary mr-2" />
              <span className="text-xl font-serif font-bold">シナモンカフェ</span>
            </div>
            <p className="text-cream-light">
              上質なコーヒーと手作りペイストリー、温かく落ち着いた雰囲気のカフェです。
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">お問い合わせ</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-secondary mr-2 mt-0.5" />
                <span>東京都中央区コーヒーストリート123</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-secondary mr-2" />
                <span>03-1234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-secondary mr-2" />
                <span>hello@cinnamoncafe.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-secondary mr-2 mt-0.5" />
                <div>
                  <p className="font-medium">Monday - Friday</p>
                  <p className="text-cream-light">7:30 AM - 9:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-secondary mr-2 mt-0.5" />
                <div>
                  <p className="font-medium">Saturday - Sunday</p>
                  <p className="text-cream-light">8:00 AM - 10:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-cream hover:text-secondary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-cream hover:text-secondary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-cream hover:text-secondary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
            <h3 className="text-lg font-serif font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/menu" className="hover:text-secondary transition-colors">Menu</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-secondary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-light mt-12 pt-8 text-center text-cream-light">
          <p>&copy; {new Date().getFullYear()} Cinnamon Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;