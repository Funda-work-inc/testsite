import React from 'react';
import { galleryImages } from '../../data/gallery';
import FadeInSection from '../ui/FadeInSection';

const Gallery: React.FC = () => {
  return (
    <section className="section bg-cream">
      <div className="container-custom">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="heading-lg text-charcoal mb-4">Cafe Gallery</h2>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              Take a glimpse into our cozy atmosphere, delicious offerings, and the warm moments shared at our cafe.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <FadeInSection key={image.id} delay={index * 0.1}>
              <div className="overflow-hidden rounded-lg shadow-md aspect-[4/3] bg-white">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                />
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;