import React, { useEffect } from 'react';
import { Coffee, Users, Heart, Award } from 'lucide-react';
import FadeInSection from '../components/ui/FadeInSection';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = '私たちについて - シナモンカフェ';
  }, []);

  const values = [
    {
      icon: <Coffee className="w-8 h-8 text-primary" />,
      title: '品質へのこだわり',
      description: '最高品質の豆と素材を厳選し、すべての一杯・一皿に期待以上の体験をお届けします。'
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: 'コミュニティ',
      description: 'カフェは人と人がつながる場所。温かな交流と笑顔が生まれる空間を大切にしています。'
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: '情熱',
      description: 'コーヒーと食への愛情を、豆からカップまで、すべてに注いでいます。'
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: '職人技',
      description: '一杯一皿を丁寧に、職人の技と心で仕上げています。'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <FadeInSection>
        <div className="bg-primary py-16 mb-12">
          <div className="container-custom text-center">
            <h1 className="heading-lg text-white mb-4">私たちのストーリー</h1>
            <p className="text-cream-light max-w-2xl mx-auto">
              シナモンカフェの想いと、私たちを支える人々をご紹介します。
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
                <h2 className="heading-md text-charcoal">はじまり</h2>
                <p className="text-charcoal-light">
                  シナモンカフェは、コーヒーの芸術と温かなコミュニティを融合させたいという夢から生まれました。2018年、タナカ ユキがヨーロッパ各地でバリスタ修行を積み、帰国後に幼なじみでパティシエのヤマモト ヒロと共に創業しました。
                </p>
                <p className="text-charcoal-light">
                  海外で学んだコーヒー文化に日本の繊細さと美意識を融合し、唯一無二の空間を目指しています。
                </p>
                <p className="text-charcoal-light">
                  「シナモン」という名前は、コーヒーに合うスパイスであるだけでなく、温もり・安らぎ・日常の小さな幸せを象徴しています。
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
              <h2 className="heading-md text-charcoal mb-4">スタッフ紹介</h2>
              <p className="text-charcoal-light max-w-2xl mx-auto">
                シナモンカフェを支える情熱あふれるスタッフたち
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'タナカ ユキ',
                role: '創業者・ヘッドバリスタ',
                image: 'https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg',
                bio: 'ヨーロッパ各地で修行後、日本に帰国しカフェを創業。コーヒープログラム全体を監修し、最高品質の一杯を提供します。'
              },
              {
                name: 'ヤマモト ヒロ',
                role: '共同創業者・パティシエ',
                image: 'https://images.pexels.com/photos/8350286/pexels-photo-8350286.jpeg',
                bio: 'パリでのクラシックな修行経験を活かし、カフェの看板ペイストリーを手掛けています。'
              },
              {
                name: 'ナカムラ メイ',
                role: 'カフェマネージャー',
                image: 'https://images.pexels.com/photos/8487139/pexels-photo-8487139.jpeg',
                bio: 'お客様を笑顔でお迎えし、快適な時間をお届けするカフェ運営の要です。'
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