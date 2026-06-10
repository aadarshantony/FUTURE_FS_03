import React from 'react';
import { InstagramLogo, FacebookLogo, WhatsappLogo, MapPin, Phone, Envelope } from '@phosphor-icons/react';

const quickLinks = ['Home', 'About', 'Services', 'Gallery', 'Testimonials', 'Contact'];
const services = ['Haircuts & Styling', 'Hair Coloring', 'Hair Spa & Treatments', 'Facial & Skin Care', 'Bridal Packages', 'Makeup Services', 'Beard Grooming', 'Kids Haircuts'];

const Footer = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-white/70" role="contentinfo">
      {/* Main Footer */}
      <div className="container-max px-5 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="font-heading font-bold text-3xl text-white">
                GLAM<span className="text-gold">Z</span>
              </span>
              <p className="font-body text-[10px] font-semibold tracking-[0.2em] uppercase text-white/40 mt-1">
                Family Salon
              </p>
            </div>
            <p className="font-body text-sm leading-relaxed text-white/55 mb-6 max-w-[220px]">
              Where every visit feels like coming home. Trusted by families across the city for over a decade.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { Icon: InstagramLogo, href: 'https://instagram.com', label: 'Instagram' },
                { Icon: FacebookLogo, href: 'https://facebook.com', label: 'Facebook' },
                { Icon: WhatsappLogo, href: 'https://wa.me/919876543210', label: 'WhatsApp' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/50 transition-all duration-200"
                >
                  <Icon size={16} weight="fill" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-body font-semibold text-xs tracking-widest uppercase text-white/40 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link}>
                  <button
                    onClick={() => handleScroll(link)}
                    className="font-body text-sm text-white/60 hover:text-gold transition-colors duration-200 text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-body font-semibold text-xs tracking-widest uppercase text-white/40 mb-5">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s}>
                  <span className="font-body text-sm text-white/60">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body font-semibold text-xs tracking-widest uppercase text-white/40 mb-5">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} weight="fill" className="text-gold mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-white/60 leading-relaxed">
                  12, Glamour Heights,<br />
                  Andheri West, Mumbai 400058
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} weight="fill" className="text-gold flex-shrink-0" />
                <a href="tel:+919876543210" className="font-body text-sm text-white/60 hover:text-gold transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Envelope size={15} weight="fill" className="text-gold flex-shrink-0" />
                <a href="mailto:glamzfamilysalon@gmail.com" className="font-body text-sm text-white/60 hover:text-gold transition-colors">
                  glamzfamilysalon@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-white/8">
              <p className="font-body text-[11px] font-semibold tracking-widest uppercase text-white/30 mb-2">
                Hours
              </p>
              <p className="font-body text-sm text-white/55">
                Mon – Sat: 9:00 AM – 8:30 PM
              </p>
              <p className="font-body text-sm text-white/55">
                Sunday: 10:00 AM – 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="container-max px-5 md:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/35 text-center sm:text-left">
            © {new Date().getFullYear()} GLAMZ Family Salon. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/25">
            Designed with care for real families.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
