import { GlamzLogo } from "./ui";

const QUICK_LINKS = [
  "Home",
  "About",
  "Services",
  "Gallery",
  "Testimonials",
  "Contact",
];

const SERVICES_LIST = [
  "Haircuts & Styling",
  "Hair Coloring",
  "Hair Spa & Treatments",
  "Facial & Skin Care",
  "Bridal Packages",
  "Makeup Services",
];

const scrollTo = (label) => {
  document.getElementById(label.toLowerCase())?.scrollIntoView({
    behavior: "smooth",
  });
};

export default function Footer() {
  return (
    <footer className="bg-[#1C1917] text-[#E6DFD4] py-[clamp(48px,6vw,80px)] px-[clamp(16px,5vw,80px)] pb-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <GlamzLogo light />

            <p className="text-[#78716C] text-[0.82rem] leading-[1.75] max-w-[280px] my-4">
              Premium family salon in the heart of Kochi offering expert
              grooming, beauty, and self-care services in a warm and welcoming
              environment.
            </p>

            <a
              href="https://maps.app.goo.gl/TnELDcvSZC8sb5MA9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#C5A059] hover:text-white transition-colors text-[0.82rem] font-medium"
            >
              View on Google Maps
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-white font-semibold text-[0.78rem] tracking-[0.1em] uppercase mb-[18px]">
              Quick Links
            </div>

            {QUICK_LINKS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="block bg-transparent border-none text-[#78716C] hover:text-[#C5A059] text-[0.82rem] mb-2 cursor-pointer text-left transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Services */}
          <div>
            <div className="text-white font-semibold text-[0.78rem] tracking-[0.1em] uppercase mb-[18px]">
              Services
            </div>

            {SERVICES_LIST.map((service) => (
              <div
                key={service}
                className="text-[#78716C] text-[0.82rem] mb-2"
              >
                {service}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div className="text-white font-semibold text-[0.78rem] tracking-[0.1em] uppercase mb-[18px]">
              Contact
            </div>

            <div className="text-[#78716C] text-[0.82rem] leading-[1.65] mb-3">
              9/167, Moulana Azad Rd
              <br />
              Panayappilly, Chullickal
              <br />
              Kochi, Kerala 682005
            </div>

            <a
              href="tel:06282002112"
              className="text-[#78716C] hover:text-[#C5A059] text-[0.82rem] block mb-3 transition-colors"
            >
              06282 002112
            </a>

            <div className="text-[#78716C] text-[0.82rem] leading-[1.65]">
              Monday – Sunday
              <br />
              10:00 AM – 9:00 PM
            </div>
          </div>
        </div>

        <div className="border-t border-[#292524] pt-6 flex justify-between items-center flex-wrap gap-2">
          <div className="text-[#57534E] text-[0.75rem]">
            © 2026 GLAMZ Family Salon. All rights reserved.
          </div>

          <div className="text-[#57534E] text-[0.75rem]">
            Chullickal, Kochi • Kerala
          </div>
        </div>
      </div>
    </footer>
  );
}