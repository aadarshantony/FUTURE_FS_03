import React, { useState, useEffect, useCallback } from 'react';
import { X, List } from '@phosphor-icons/react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map(l => l.href.replace('#', ''));
    const observers = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const handleNavClick = useCallback((href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-soft border-b border-warm-sand/40'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="container-max px-5 md:px-10 lg:px-16">
          <nav className="flex items-center justify-between h-16 md:h-[70px]">
            {/* Logo */}
            <a
              href="#home"
              onClick={e => { e.preventDefault(); handleNavClick('#home'); }}
              className="flex items-center gap-1 group"
              aria-label="GLAMZ Family Salon – Home"
            >
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-2xl text-charcoal tracking-tight">
                  GLAM<span className="text-gold">Z</span>
                </span>
                <span className="font-body text-[9px] font-semibold tracking-[0.2em] uppercase text-text-secondary mt-0.5">
                  Family Salon
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-7" role="list">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={e => { e.preventDefault(); handleNavClick(href); }}
                    className={`font-body text-sm font-medium transition-colors duration-200 relative pb-0.5 gold-underline ${
                      activeSection === href.replace('#', '')
                        ? 'text-gold'
                        : 'text-text-secondary hover:text-charcoal'
                    }`}
                  >
                    {label}
                    {activeSection === href.replace('#', '') && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold rounded-full" />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://wa.me/919876543210?text=Hi%20GLAMZ%20Family%20Salon!%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                id="nav-book-cta"
                className="btn-primary text-xs px-5 py-2.5"
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-charcoal hover:bg-bg-secondary transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-[75vw] max-w-[320px] bg-white shadow-lifted transition-transform duration-300 flex flex-col ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-warm-sand/50">
            <span className="font-heading font-bold text-xl">
              GLAM<span className="text-gold">Z</span>
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-bg-secondary transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <ul className="flex flex-col px-6 py-8 gap-1 flex-1" role="list">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={e => { e.preventDefault(); handleNavClick(href); }}
                  className={`block py-3 font-body font-medium text-base transition-colors border-b border-warm-sand/30 ${
                    activeSection === href.replace('#', '')
                      ? 'text-gold'
                      : 'text-text-secondary hover:text-charcoal'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="px-6 pb-8">
            <a
              href="https://wa.me/919876543210?text=Hi%20GLAMZ%20Family%20Salon!%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
              onClick={() => setMenuOpen(false)}
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
