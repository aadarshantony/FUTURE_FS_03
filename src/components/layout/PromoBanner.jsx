import React from 'react';
import Marquee from 'react-fast-marquee';
import { Sparkle } from '@phosphor-icons/react';

const PromoBanner = () => {
  const items = [
    'Welcome to GLAMZ Family Salon',
    'Special Discounts on Family Beauty Packages',
    'Bridal & Groom Packages Available',
    'Expert Stylists • Premium Products',
    'Book Your Appointment Today',
    'Hair • Beauty • Grooming • Skincare',
  ];

  return (
    <div className="bg-charcoal py-2.5 overflow-hidden" role="banner">
      <Marquee
        speed={45}
        gradient={false}
        pauseOnHover={true}
      >
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 mx-6">
            <Sparkle
              size={12}
              weight="fill"
              className="text-gold flex-shrink-0"
            />
            <span className="font-body text-xs font-medium tracking-widest uppercase text-white/80">
              {item}
            </span>
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default PromoBanner;
