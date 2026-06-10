import React from 'react';
import {
  Medal,
  ShieldCheck,
  Package,
  Smiley,
  CurrencyInr,
  HandHeart,
} from '@phosphor-icons/react';

const reasons = [
  {
    id: 'expert-stylists',
    icon: Medal,
    title: 'Expert Stylists',
    desc: "Every member of our team is certified and continuously trained. We don't put juniors on clients without proper supervision.",
  },
  {
    id: 'hygiene',
    icon: ShieldCheck,
    title: 'Hygienic Environment',
    desc: 'Fresh towels for every client. Sterilised tools. Clean stations reset after each appointment. No shortcuts on hygiene — ever.',
  },
  {
    id: 'products',
    icon: Package,
    title: 'Premium Products',
    desc: "We use professional-grade products from brands like L'Oréal, Schwarzkopf, and O'right. Nothing harsh or outdated.",
  },
  {
    id: 'family',
    icon: Smiley,
    title: 'Family-Friendly Space',
    desc: 'Separate sections for men, women, and kids. A relaxed waiting area. We make everyone feel at ease the moment they walk in.',
  },
  {
    id: 'affordable',
    icon: CurrencyInr,
    title: 'Honest, Transparent Pricing',
    desc: 'No hidden charges. No upselling. You know exactly what you\'re paying before anything starts. Fair rates for genuine quality.',
  },
  {
    id: 'personalized',
    icon: HandHeart,
    title: 'Personalised Attention',
    desc: 'We listen. We ask questions. We check in during treatments. Because a good result starts with actually understanding what you want.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="bg-warm-sand/30">
      <div className="container-max section-padding">

        {/* Two-column asymmetric layout */}
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">

          {/* Left: Text block */}
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="overline-label">Why GLAMZ</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-text-primary leading-tight mb-6 text-balance">
              The Things That
              <br />
              <em className="text-gold not-italic">Actually Matter</em>
            </h2>
            <p className="font-body text-base text-text-secondary leading-relaxed mb-6">
              A lot of salons offer the same services. What keeps people coming back to GLAMZ isn't just the results — it's how they're treated throughout the experience.
            </p>
            <p className="font-body text-base text-text-secondary leading-relaxed mb-8">
              We're not the most glamorous salon in the city. But we might just be the most trustworthy one. That matters more, especially when you're bringing your whole family.
            </p>

            {/* Inline stat */}
            <div className="flex items-center gap-5 pt-6 border-t border-warm-sand">
              <div>
                <p className="font-heading font-bold text-4xl text-charcoal">98%</p>
                <p className="font-body text-xs text-text-secondary font-medium mt-0.5">Client satisfaction rate</p>
              </div>
              <div className="w-[1px] h-12 bg-warm-sand" />
              <div>
                <p className="font-heading font-bold text-4xl text-charcoal">4.8★</p>
                <p className="font-body text-xs text-text-secondary font-medium mt-0.5">Average Google rating</p>
              </div>
            </div>
          </div>

          {/* Right: Feature grid */}
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
            {reasons.map(({ id, icon: Icon, title, desc }) => (
              <div
                key={id}
                id={`reason-${id}`}
                className="bg-bg-surface rounded-2xl p-6 border border-warm-sand/50 group hover:border-gold/30 hover:shadow-soft transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/15 transition-colors">
                  <Icon size={22} weight="fill" className="text-gold" />
                </div>
                <h3 className="font-heading font-semibold text-base text-text-primary mb-2">
                  {title}
                </h3>
                <p className="font-body text-sm text-text-secondary leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
