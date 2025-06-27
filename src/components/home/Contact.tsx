import React from 'react';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInSection from '../ui/FadeInSection';

const Contact: React.FC = () => {
  return (
    <section className="section bg-primary text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeInSection direction="up">
            <div>
              <h2 className="heading-lg mb-8">ご来店案内</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-secondary mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-serif font-medium mb-2">所在地</h3>
                    <p className="text-cream-light">東京都中央区コーヒーストリート123</p>
                    <p className="text-cream-light">中央駅3番出口より徒歩5分</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-secondary mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-serif font-medium mb-2">営業時間</h3>
                    <p className="text-cream-light">月〜金：7:30〜21:00</p>
                    <p className="text-cream-light">土日祝：8:00〜22:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-secondary mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-serif font-medium mb-2">お問い合わせ</h3>
                    <p className="text-cream-light">03-1234-5678</p>
                    <p className="text-cream-light">hello@cinnamoncafe.com</p>
                  </div>
                </div>
              </div>
              
              <Link to="/contact" className="btn bg-white text-primary hover:bg-cream inline-flex items-center">
                <span>Get Directions</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </FadeInSection>
          
          <FadeInSection direction="up" delay={0.2}>
            <div className="h-full min-h-[300px] rounded-lg overflow-hidden shadow-lg">
              {/* This would be a map in a real implementation */}
              <img 
                src="https://images.pexels.com/photos/1723637/pexels-photo-1723637.jpeg" 
                alt="Cafe location map" 
                className="w-full h-full object-cover"
              />
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;