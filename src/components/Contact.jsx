import { GoldButton, SectionOverline } from "./ui";

function ContactItem({ label, icon, children }) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 rounded-2xl bg-[#F5EFE4] flex items-center justify-center flex-shrink-0">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C5A059"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {icon}
        </svg>
      </div>

      <div>
        <div className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[#A8A29E] mb-1">
          {label}
        </div>
        <div className="text-[#1C1917] text-[0.95rem] leading-[1.75]">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#FAFAF9] to-[#F5F5F4] py-[clamp(70px,8vw,110px)] px-[clamp(16px,5vw,80px)]"
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-14">
          <SectionOverline center>Contact Us</SectionOverline>

          <h2 className="font-[Playfair_Display] text-[clamp(2rem,4vw,3rem)] font-bold text-[#1C1917]">
            Visit Our Salon
          </h2>

          <p className="text-[#57534E] max-w-[600px] mx-auto mt-4 text-[0.95rem] leading-[1.8]">
            Located in the heart of Chullickal, Kochi. Walk in anytime or call
            ahead for appointments and consultations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-0 rounded-[32px] overflow-hidden bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          {/* LEFT PANEL */}
          <div className="p-8 md:p-12 flex flex-col justify-between bg-white min-h-[650px]">
            <div>
              <div className="mb-10">
                <h3 className="font-[Playfair_Display] text-3xl font-semibold text-[#1C1917] mb-3">
                  GLAMZ Family Salon
                </h3>

                <p className="text-[#78716C] leading-[1.8]">
                  Professional hair, beauty, and grooming services for the whole
                  family in a welcoming and comfortable environment.
                </p>
              </div>

              <div className="space-y-8">
                <ContactItem
                  label="Address"
                  icon={
                    <>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </>
                  }
                >
                  9/167, Moulana Azad Rd
                  <br />
                  Panayappilly, Chullickal
                  <br />
                  Kochi, Kerala 682005
                </ContactItem>

                <ContactItem
                  label="Phone"
                  icon={
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l1.67-1.83a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  }
                >
                  <a
                    href="tel:06282002112"
                    className="hover:text-[#C5A059] transition-colors"
                  >
                    06282 002112
                  </a>
                </ContactItem>

                <ContactItem
                  label="Opening Hours"
                  icon={
                    <>
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </>
                  }
                >
                  Monday – Sunday
                  <br />
                  10:00 AM – 9:00 PM
                </ContactItem>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-[#E7E5E4]">
              <div className="flex flex-wrap gap-3">
                <GoldButton href="tel:06282002112">
                  Call Now
                </GoldButton>

                <a
                  href="https://maps.app.goo.gl/TnELDcvSZC8sb5MA9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#C5A059] px-6 py-2.5 text-[0.825rem] font-semibold text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="relative min-h-[650px]">
            <iframe
              src="https://maps.google.com/maps?q=9/167%20Moulana%20Azad%20Rd,%20Panayappilly,%20Chullickal,%20Kochi,%20Kerala%20682005&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              title="GLAMZ Family Salon Location"
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}