import { SectionOverline } from "./ui";

const POINTS = [
  "Experienced, trained stylists with a genuine passion for their craft",
  "Strict hygiene standards — every tool sanitized, every surface clean",
  "A warm, welcoming atmosphere the whole family will feel at home in",
  "Premium products — nothing we wouldn't use on our own families",
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#F5F5F4] py-[clamp(64px,8vw,100px)] px-[clamp(16px,5vw,80px)]"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[clamp(32px,5vw,72px)] items-center">

        {/* Image with badge */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80"
              alt="Inside GLAMZ Salon"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-[#C5A059] rounded-xl px-5 py-4 z-10 shadow-lg">
            <div className="font-[Playfair_Display] text-white text-2xl font-bold">8+</div>
            <div className="text-white/85 text-[0.68rem] tracking-[0.08em] mt-0.5">Years in Service</div>
          </div>
          <div className="absolute -top-2.5 -left-2.5 w-20 h-20 rounded-full border-2 border-[#E6DFD4] -z-10" />
        </div>

        {/* Copy */}
        <div className="flex flex-col gap-4">
          <SectionOverline>About GLAMZ</SectionOverline>
          <h2 className="font-[Playfair_Display] text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.2] font-bold text-[#1C1917]">
            A Salon Built for Every Member of Your Family
          </h2>
          <p className="text-[#57534E] leading-[1.75] text-[0.925rem]">
            GLAMZ Family Salon was founded with one simple belief — great hair
            and beauty care should be accessible, warm, and personal. We're not
            a chain. We're your neighbourhood salon, and we treat every client
            like family.
          </p>
          <p className="text-[#57534E] leading-[1.75] text-[0.925rem]">
            Whether you're coming in for a quick trim, a full bridal
            transformation, or bringing the whole family for an afternoon —
            you'll find a clean, calm space and a team that genuinely cares.
          </p>

          <div className="flex flex-col gap-2.5 mt-1.5">
            {POINTS.map((text) => (
              <div key={text} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E6DFD4] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                </div>
                <span className="text-[#57534E] text-[0.875rem] leading-[1.65]">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}