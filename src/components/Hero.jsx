import { GoldButton, OutlineButton, SectionOverline } from "./ui";

const STATS = [
  ["1000+", "Happy Clients"],
  ["Kochi", "Prime Location"],
];

const scrollToContact = () =>
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[#FAFAF9] py-[clamp(48px,8vw,100px)] px-[clamp(16px,5vw,80px)]"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[clamp(32px,5vw,80px)] items-center">

        {/* Left: copy */}
        <div className="flex flex-col gap-5">
          <SectionOverline>GLAMZ Family Salon</SectionOverline>

          <h1 className="font-[Playfair_Display] text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.1] font-bold text-[#1C1917]">
            Where Style
            <br />
            <em className="not-italic text-[#C5A059]">Meets</em> Confidence
          </h1>

          <p className="text-[#57534E] leading-[1.75] text-[clamp(0.9rem,1.5vw,1.05rem)] max-w-[440px]">
            Professional hair, beauty, grooming, and family care services under
            one roof. Visit us in Chullickal, Kochi for expert styling and a
            welcoming salon experience.
          </p>

          <div className="flex flex-wrap gap-3 mt-1">
            <GoldButton onClick={scrollToContact}>
              Book Appointment
            </GoldButton>
            <OutlineButton onClick={scrollToContact}>
              Contact Us
            </OutlineButton>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-9 pt-6 border-t border-[#E6DFD4] mt-1">
            {STATS.map(([num, label]) => (
              <div key={label}>
                <div className="font-[Playfair_Display] text-[1.65rem] font-bold text-[#C5A059]">
                  {num}
                </div>
                <div className="text-[0.72rem] text-[#57534E] mt-0.5">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image */}
        <div className="relative flex justify-end">
          <div className="rounded-[220px_220px_16px_16px] max-md:rounded-[180px_180px_12px_12px] overflow-hidden w-full max-w-[460px] h-[520px] max-md:h-[360px] flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
              alt="GLAMZ Salon Interior"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Floating badge */}
            <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
              <div className="text-[0.62rem] tracking-[0.14em] font-semibold text-[#C5A059]">
                OPEN DAILY
              </div>
              <div className="font-[Playfair_Display] font-semibold text-[0.9rem] text-[#1C1917] mt-0.5">
                10:00 AM – 9:00 PM
              </div>
            </div>
          </div>

          {/* Decorative accents */}
          <div className="absolute -top-3.5 right-[6%] w-[70px] h-[70px] rounded-full bg-[#E6DFD4] -z-10" />
          <div className="absolute bottom-20 -right-3 w-9 h-9 rounded-full bg-[#C5A059] opacity-15 -z-10" />
        </div>

      </div>
    </section>
  );
}