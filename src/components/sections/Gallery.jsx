import React, { useState } from 'react';
import { ArrowsOut } from '@phosphor-icons/react';

import interior1 from '../../assets/gallery_interior1.png';
import hairstyle from '../../assets/gallery_hairstyle.png';
import skincare from '../../assets/gallery_skincare.png';
import grooming from '../../assets/gallery_grooming.png';
import colorImg from '../../assets/gallery_color.png';
import heroImg from '../../assets/hero_salon.png';
import bridalImg from '../../assets/service_bridal.png';
import familyImg from '../../assets/service_family.png';

const galleryItems = [
  { id: 'g1', src: interior1,  alt: 'GLAMZ salon interior — elegant styling stations', span: 'col-span-2 row-span-2' },
  { id: 'g2', src: hairstyle,  alt: 'Elegant updo hairstyle result',                  span: 'col-span-1 row-span-2' },
  { id: 'g3', src: colorImg,   alt: 'Honey-blonde balayage hair color result',         span: 'col-span-1 row-span-1' },
  { id: 'g4', src: skincare,   alt: 'Luxury facial and skin care treatment',           span: 'col-span-1 row-span-1' },
  { id: 'g5', src: grooming,   alt: 'Professional men\'s grooming and haircut',        span: 'col-span-1 row-span-2' },
  { id: 'g6', src: bridalImg,  alt: 'Bridal hair and makeup preparation',              span: 'col-span-2 row-span-2' },
  { id: 'g7', src: heroImg,    alt: 'Stylist working on client\'s hair',               span: 'col-span-1 row-span-1' },
  { id: 'g8', src: familyImg,  alt: 'Happy family at GLAMZ family salon',              span: 'col-span-2 row-span-1' },
];

const Lightbox = ({ item, onClose }) => {
  if (!item) return null;
  return (
    <div
      className="fixed inset-0 z-[60] bg-charcoal/90 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      <div className="relative max-w-5xl w-full max-h-[90vh]" onClick={e => e.stopPropagation()}>
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-contain rounded-2xl shadow-lifted max-h-[80vh]"
        />
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          aria-label="Close preview"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="bg-bg-primary section-padding">
      <div className="container-max">

        {/* Header */}
        <div className="max-w-xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="overline-label">Our Gallery</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-text-primary leading-tight">
            A Glimpse Inside
            <br />
            <em className="text-gold not-italic">GLAMZ</em>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-3 grid-rows-[auto] gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px] lg:auto-rows-[240px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              id={`gallery-${item.id}`}
              className={`relative overflow-hidden rounded-xl md:rounded-2xl group cursor-pointer ${item.span}`}
              onClick={() => setLightbox(item)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setLightbox(item)}
              aria-label={`View: ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-soft">
                  <ArrowsOut size={18} weight="bold" className="text-charcoal" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-10 text-center">
          <p className="font-body text-sm text-text-secondary mb-3">
            Follow our daily work on Instagram for the latest looks & behind-the-scenes.
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            id="gallery-instagram-btn"
            className="btn-outline"
          >
            Follow Us on Instagram
          </a>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox item={lightbox} onClose={() => setLightbox(null)} />
    </section>
  );
};

export default Gallery;
