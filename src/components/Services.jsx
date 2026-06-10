import { SectionOverline } from "./ui";

const SERVICES = [
  {
    img: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80",
    title: "Haircuts & Styling",
    desc: "Precision cuts tailored to your face shape — classic or contemporary, with a finish that lasts.",
  },
  {
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80",
    title: "Hair Coloring",
    desc: "Highlights, balayage, full color — our colorists know how to find your perfect shade every time.",
  },
  {
    img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
    title: "Hair Spa & Treatments",
    desc: "Nourishing treatments to restore softness, shine, and strength to damaged or dull hair.",
  },
  {
    img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80",
    title: "Facial & Skin Care",
    desc: "Targeted facials to cleanse, hydrate, and brighten — for skin that genuinely glows.",
  },
  {
    img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&q=80",
    title: "Bridal & Groom Packages",
    desc: "Carefully curated packages for your most important day — tailored to make you feel extraordinary.",
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
    title: "Makeup Services",
    desc: "Professional makeup for events, engagements, and any occasion that calls for looking your best.",
  },
  {
    img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
    title: "Beard Grooming",
    desc: "Expert shaping, trimming, and styling for a clean, sharp beard that frames your face perfectly.",
  },
  {
    img: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&q=80",
    title: "Kids Haircuts",
    desc: "A patient, friendly experience — we make even the squirmiest little ones feel comfortable.",
  },
  {
    img: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&q=80",
    title: "Family Packages",
    desc: "Come together, save together. Specially priced packages designed around your whole family.",
  },
];

function ServiceCard({ img, title, desc }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_2px_14px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(0,0,0,0.10)]">
      <div className="h-[196px] overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
      </div>
      <div className="p-5">
        <div className="w-9 h-9 rounded-lg bg-[#E6DFD4] flex items-center justify-center mb-2.5">
          <svg
            width="18" height="18" viewBox="0 0 24 24"
            fill="none" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm12 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-12 6 6 6m0 0 6-6M6 9l12 12" />
          </svg>
        </div>
        <h3 className="font-[Playfair_Display] font-semibold text-[1rem] text-[#1C1917] mb-1.5">
          {title}
        </h3>
        <p className="text-[#57534E] text-[0.825rem] leading-[1.65]">{desc}</p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#FAFAF9] py-[clamp(64px,8vw,100px)] px-[clamp(16px,5vw,80px)]"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <SectionOverline center>What We Offer</SectionOverline>
          <h2 className="font-[Playfair_Display] text-[clamp(1.75rem,3.5vw,2.5rem)] text-[#1C1917] font-bold">
            Services Crafted for Every Occasion
          </h2>
          <p className="text-[#57534E] max-w-[500px] mx-auto mt-3 leading-[1.7] text-[0.925rem]">
            From everyday cuts to special occasion packages — everything your
            family needs, all in one place.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}