import React from 'react';
import { CheckCircle } from '@phosphor-icons/react';
import aboutImg from '../../assets/about_salon.png';

const highlights = [
  'Family-run for over 10 years — we know our regulars by name',
  'Certified stylists trained in both modern and classic techniques',
  'Strict hygiene protocols with single-use tools and clean stations',
  'Personalized consultations before every service, no rushing',
  'Separate sections for men, women, and kids — everyone's comfortable',
  'Premium, skin-safe products from trusted Indian and international brands',
];

const About = () => {
  return (
    <section id="about" className="bg-bg-secondary">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Image ───────────────────────────── */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[3/4] shadow-card">
              <img
                src={aboutImg}
                alt="GLAMZ Family Salon welcoming interior — reception and lounge area"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Warm tint */}
              <div className="absolute inset-0 bg-gold/5" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-charcoal text-white rounded-2xl px-5 py-4 shadow-lifted max-w-[180px]">
              <p className="font-heading text-3xl font-bold text-gold leading-none">10+</p>
              <p className="font-body text-xs text-white/70 mt-1 leading-snug">
                Years serving<br />families with care
              </p>
            </div>

            {/* Subtle accent shape */}
            <div
              className="absolute -top-4 -left-4 w-20 h-20 rounded-full border-2 border-gold/20 -z-10"
            />
          </div>

          {/* ── Right: Content ────────────────────────── */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="overline-label">Our Story</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-text-primary leading-tight mb-5 text-balance">
              More Than a Salon —<br />
              <em className="text-gold not-italic">A Family Tradition</em>
            </h2>

            <p className="font-body text-base text-text-secondary leading-relaxed mb-4">
              GLAMZ Family Salon was built on a simple belief: everyone deserves to look their best and feel genuinely cared for. What started as a small neighbourhood parlour has grown into one of the area's most trusted beauty destinations.
            </p>

            <p className="font-body text-base text-text-secondary leading-relaxed mb-8">
              We welcome grandparents, parents, and children under the same roof — each getting their own expert attention. Our team isn't just trained; they're passionate about what they do.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    weight="fill"
                    className="text-gold flex-shrink-0 mt-0.5"
                  />
                  <span className="font-body text-sm text-text-secondary leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/919876543210?text=Hi%20GLAMZ!%20I%27d%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              id="about-enquire-btn"
              className="btn-primary"
            >
              Enquire Now
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
