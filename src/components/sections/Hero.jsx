import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import heroImg from '../../assets/hero_salon.png';

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '5000+', label: 'Happy Clients' },
  { value: '20+', label: 'Expert Stylists' },
];

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative bg-bg-primary pt-[70px] md:pt-[70px] overflow-hidden"
    >
      <div className="container-max px-5 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-0 min-h-[calc(100vh-70px)] items-center">

          {/* ── Left: Text Content ─────────────────────────── */}
          <div className="flex flex-col justify-center py-16 lg:py-0 lg:pr-12 order-2 lg:order-1">
            {/* Overline */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="overline-label">Mumbai's Trusted Family Salon</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[54px] xl:text-6xl font-bold text-text-primary leading-[1.1] mb-5 text-balance">
              Where Style
              <br />
              <em className="text-gold not-italic">Meets Confidence</em>
            </h1>

            {/* Subtext */}
            <p className="font-body text-base md:text-lg text-text-secondary leading-relaxed mb-8 max-w-[480px]">
              Professional hair, beauty, grooming, and family care — all under one roof.
              We've been looking after families like yours for over a decade.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-12">
              <a
                href="https://wa.me/919876543210?text=Hi%20GLAMZ!%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                id="hero-book-btn"
                className="btn-primary"
              >
                Book Appointment
                <ArrowRight size={16} />
              </a>
              <button
                onClick={() => scrollTo('contact')}
                id="hero-contact-btn"
                className="btn-outline"
              >
                <Phone size={15} />
                Contact Us
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 sm:gap-10 pt-8 border-t border-warm-sand">
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="font-heading font-bold text-2xl sm:text-3xl text-charcoal">
                    {value}
                  </span>
                  <span className="font-body text-[11px] text-text-secondary font-medium leading-tight mt-0.5">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Image ───────────────────────────────── */}
          <div className="flex items-end justify-center lg:justify-end order-1 lg:order-2 pt-8 lg:pt-0">
            <div className="relative w-full max-w-[420px] lg:max-w-none lg:w-[90%] xl:w-[85%]">
              {/* Arch frame container */}
              <div
                className="relative overflow-hidden"
                style={{
                  borderRadius: '50% 50% 0 0 / 30% 30% 0 0',
                  aspectRatio: '3/4',
                }}
              >
                <img
                  src={heroImg}
                  alt="GLAMZ Family Salon — professional stylist working on client's hair"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchpriority="high"
                />
                {/* Subtle warm overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/20 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute top-8 -left-4 sm:-left-6 bg-white rounded-2xl px-4 py-3 shadow-card border border-warm-sand/40">
                <p className="font-body text-[10px] font-semibold tracking-widest uppercase text-text-secondary mb-0.5">
                  Open Today
                </p>
                <p className="font-heading text-sm font-semibold text-charcoal">
                  9 AM – 8:30 PM
                </p>
              </div>

              {/* Gold accent circle */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-15"
                style={{ background: 'radial-gradient(circle, #C5A059 0%, transparent 70%)' }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-warm-sand to-transparent" />
    </section>
  );
};

export default Hero;
