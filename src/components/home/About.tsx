import React from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from '../ui/FadeInSection';

const About: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeInSection direction="right">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg" 
                alt="Cafe interior with warm lighting and comfortable seating" 
                className="w-full h-full object-cover"
              />
            </div>
          </FadeInSection>

          <FadeInSection direction="left">
            <div className="space-y-6">
              <h2 className="heading-lg text-charcoal">Our Story</h2>
              <p className="text-charcoal-light">
                Founded in 2018, Cinnamon Cafe began with a simple mission: to create a warm, welcoming space where people could enjoy exceptional coffee and food made with care.
              </p>
              <p className="text-charcoal-light">
                Our founder, Yuki Tanaka, trained as a barista across Europe before bringing her passion for coffee culture back to Japan. Every element of our cafe - from the carefully sourced beans to the handcrafted furniture - reflects our commitment to quality and comfort.
              </p>
              <p className="text-charcoal-light">
                Today, we remain dedicated to serving our community not just great coffee, but moments of connection and joy in a space that feels like home.
              </p>
              <div>
                <Link to="/about" className="btn btn-primary">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default About;