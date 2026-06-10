import React from 'react';
import {
  Scissors,
  Drop,
  Leaf,
  SmileyWink,
  Heart,
  PaintBrush,
  Barbell,
  Baby,
  UsersThree,
} from '@phosphor-icons/react';

import haircutImg from '../../assets/service_haircut.png';
import coloringImg from '../../assets/service_coloring.png';
import spaImg from '../../assets/service_spa.png';
import facialImg from '../../assets/service_facial.png';
import bridalImg from '../../assets/service_bridal.png';
import makeupImg from '../../assets/service_makeup.png';
import beardImg from '../../assets/service_beard.png';
import kidsImg from '../../assets/service_kids.png';
import familyImg from '../../assets/service_family.png';

const services = [
  {
    id: 'haircuts',
    title: 'Haircuts & Styling',
    desc: "Whether you're after a trim, a completely new look, or a blowout for a special occasion — our stylists take time to understand what you want.",
    icon: Scissors,
    img: haircutImg,
    imgAlt: 'Professional haircut and styling at GLAMZ salon',
  },
  {
    id: 'coloring',
    title: 'Hair Coloring',
    desc: 'From subtle highlights to full balayage transformations. We use premium, ammonia-friendly color that keeps your hair healthy and vibrant.',
    icon: Drop,
    img: coloringImg,
    imgAlt: 'Hair coloring service — balayage highlights',
  },
  {
    id: 'spa',
    title: 'Hair Spa & Treatments',
    desc: 'Deeply nourishing treatments for dry, damaged, or frizzy hair. A session leaves your hair soft, shiny, and genuinely healthier.',
    icon: Leaf,
    img: spaImg,
    imgAlt: 'Relaxing hair spa treatment',
  },
  {
    id: 'facial',
    title: 'Facial & Skin Care',
    desc: "Regular facials do more than you think. Our estheticians assess your skin type and tailor each treatment — no one-size-fits-all approach here.",
    icon: SmileyWink,
    img: facialImg,
    imgAlt: 'Professional facial and skincare treatment',
  },
  {
    id: 'bridal',
    title: 'Bridal & Groom Packages',
    desc: "Your big day deserves the full treatment. We offer everything from pre-bridal facials and hair trials to full-day packages for the couple.",
    icon: Heart,
    img: bridalImg,
    imgAlt: 'Bridal hair and makeup package at GLAMZ',
  },
  {
    id: 'makeup',
    title: 'Makeup Services',
    desc: 'Party makeup, event glam, or a natural everyday look — our makeup artists work with your features, not against them.',
    icon: PaintBrush,
    img: makeupImg,
    imgAlt: 'Professional makeup service at GLAMZ salon',
  },
  {
    id: 'beard',
    title: 'Beard Grooming',
    desc: "Shaping, trimming, lining up — we know how a well-groomed beard changes how you carry yourself. Quick appointments available.",
    icon: Barbell,
    img: beardImg,
    imgAlt: 'Expert beard grooming and trimming service',
  },
  {
    id: 'kids',
    title: 'Kids Haircuts',
    desc: "Gentle, patient stylists who actually enjoy working with little ones. We make sure both the child and the parent leave happy.",
    icon: Baby,
    img: kidsImg,
    imgAlt: 'Child getting a fun haircut at GLAMZ family salon',
  },
  {
    id: 'family',
    title: 'Family Beauty Packages',
    desc: 'Bring everyone in together. Our family packages let the whole family get serviced simultaneously at special bundled rates.',
    icon: UsersThree,
    img: familyImg,
    imgAlt: 'Family beauty package — whole family at the salon',
  },
];

const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  return (
    <article
      className="group bg-bg-surface rounded-2xl overflow-hidden shadow-soft border border-warm-sand/30 card-hover cursor-default"
      id={`service-${service.id}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={service.img}
          alt={service.imgAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Icon Badge */}
        <div className="absolute top-3 left-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft">
          <Icon size={17} weight="fill" className="text-gold" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading font-semibold text-lg text-text-primary mb-2 leading-tight">
          {service.title}
        </h3>
        <p className="font-body text-sm text-text-secondary leading-relaxed">
          {service.desc}
        </p>
      </div>
    </article>
  );
};

const Services = () => {
  return (
    <section id="services" className="bg-bg-primary section-padding">
      <div className="container-max">

        {/* Header — Asymmetric layout */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="overline-label">What We Offer</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-text-primary leading-tight">
              Services for the
              <br />
              <em className="text-gold not-italic">Whole Family</em>
            </h2>
          </div>
          <p className="font-body text-base text-text-secondary max-w-sm leading-relaxed md:text-right">
            From quick trims to full transformation — our menu covers every need, handled by specialists in each area.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="font-body text-sm text-text-secondary mb-4">
            Not sure what you need? Our team is happy to help you decide.
          </p>
          <a
            href="https://wa.me/919876543210?text=Hi%20GLAMZ!%20Can%20you%20help%20me%20choose%20the%20right%20service?"
            target="_blank"
            rel="noopener noreferrer"
            id="services-whatsapp-btn"
            className="btn-primary"
          >
            Chat With Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
