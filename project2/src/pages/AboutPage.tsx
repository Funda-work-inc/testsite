import React, { useEffect } from 'react';
import { Coffee, Users, Heart, Award } from 'lucide-react';
import FadeInSection from '../components/ui/FadeInSection';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us - Cinnamon Cafe';
  }, []);

  const values = [
    {
      icon: <Coffee className="w-8 h-8 text-primary" />,
      title: 'Quality',
      description: 'We source the finest beans and ingredients, ensuring every cup and bite exceeds expectations.'
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: 'Community',
      description: 'Our cafe is a gathering place where connections are made and relationships flourish.'
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: 'Passion',
      description: 'We pour our love for coffee and food into everything we create, from bean to cup.'
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: 'Craftsmanship',
      description: 'Every drink and dish is prepared with meticulous attention to detail and artisanal skill.'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <FadeInSection>
        <div className="bg-primary py-16 mb-12">
          <div className="container-custom text-center">
            <h1 className="heading-lg text-white mb-4">Our Story</h1>
            <p className="text-cream-light max-w-2xl mx-auto">
              Learn about the passion and people behind Cinnamon Cafe
            </p>
          </div>
        </div>
      </FadeInSection>

      <div className="container-custom">
        {/* History Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInSection direction="right">
              <div className="space-y-6">
                <h2 className="heading-md text-charcoal">The Beginning</h2>
                <p className="text-charcoal-light">
                  Cinnamon Cafe was born from a dream to create a space that combines the art of coffee with the warmth of community. Founded in 2018 by Yuki Tanaka, our journey began after she spent years training as a barista across Europe, learning from master roasters and cafe owners.
                </p>
                <p className="text-charcoal-light">
                  Upon returning to Japan, Yuki was determined to bring the coffee cultures she had experienced abroad while infusing them with Japanese precision and aesthetics. She partnered with her childhood friend and pastry chef, Hiro Yamamoto, and together they created what would become Cinnamon Cafe.
                </p>
                <p className="text-charcoal-light">
                  The name "Cinnamon" was chosen not just for the beloved spice that pairs perfectly with coffee, but for what it represents - warmth, comfort, and a touch of sweetness in life's daily moments.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection direction="left">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg" 
                  alt="Founders of Cinnamon Cafe" 
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-24">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="heading-md text-charcoal mb-4">Our Values</h2>
              <p className="text-charcoal-light max-w-2xl mx-auto">
                These core principles guide everything we do at Cinnamon Cafe
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-lg shadow-md text-center h-full">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-charcoal mb-3">{value.title}</h3>
                  <p className="text-charcoal-light">{value.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="heading-md text-charcoal mb-4">Meet Our Team</h2>
              <p className="text-charcoal-light max-w-2xl mx-auto">
                The passionate people who make Cinnamon Cafe a special place
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Yuki Tanaka',
                role: 'Founder & Head Barista',
                image: 'https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg',
                bio: 'Trained across Europe before bringing her expertise back to Japan. Yuki oversees our coffee program and ensures every cup meets our exacting standards.'
              },
              {
                name: 'Hiro Yamamoto',
                role: 'Co-Founder & Pastry Chef',
                image: 'https://images.pexels.com/photos/8350286/pexels-photo-8350286.jpeg',
                bio: 'With classical training from Paris, Hiro creates our signature pastries that perfectly complement our coffee offerings.'
              },
              {
                name: 'Mei Nakamura',
                role: 'Cafe Manager',
                image: 'https://images.pexels.com/photos/8487139/pexels-photo-8487139.jpeg',
                bio: 'The friendly face that keeps everything running smoothly. Mei ensures every guest feels welcome and leaves with a smile.'
              }
            ].map((member, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-charcoal mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-charcoal-light text-sm">{member.bio}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;