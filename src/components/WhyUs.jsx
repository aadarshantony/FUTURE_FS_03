import { SectionOverline } from "./ui";

const WHY_ITEMS = [
  {
    title: "Hygiene First",
    desc: "Sanitized tools and immaculate surfaces, every single visit. Non-negotiable for us.",
    icon: (
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    ),
  },
  {
    title: "Expert Stylists",
    desc: "Trained professionals who listen first, then deliver. Every time.",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    title: "Honest Pricing",
    desc: "Transparent packages, no hidden fees. Excellent service shouldn't come with a surprise bill.",
    icon: (
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    ),
  },
  {
    title: "Personal Attention",
    desc: "We take time to understand your style and goals. Every visit is about you, not the clock.",
    icon: (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    ),
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#F5F5F4] py-[clamp(64px,8vw,100px)] px-[clamp(16px,5vw,80px)]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <SectionOverline center>Why Choose Us</SectionOverline>
          <h2 className="font-[Playfair_Display] text-[clamp(1.75rem,3.5vw,2.5rem)] text-[#1C1917] font-bold">
            The GLAMZ Difference
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_ITEMS.map(({ title, desc, icon }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-6 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="w-[46px] h-[46px] rounded-xl bg-[#F5F5F4] flex items-center justify-center">
                <svg
                  width="22" height="22" viewBox="0 0 24 24"
                  fill="none" stroke="#C5A059" strokeWidth="1.75" strokeLinecap="round"
                >
                  {icon}
                </svg>
              </div>
              <h3 className="font-[Playfair_Display] font-semibold text-[0.975rem] text-[#1C1917]">
                {title}
              </h3>
              <p className="text-[#57534E] text-[0.825rem] leading-[1.65]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}