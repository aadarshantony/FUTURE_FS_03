const PROMO_ITEMS = [
  "✦ Welcome to GLAMZ Family Salon — Special Discounts on Family Beauty Packages",
  "✦ Book Your Appointment Today — Walk-ins Always Welcome",
  "✦ Bridal & Groom Packages Available — Ask for Details",
  "✦ Premium Products · Expert Stylists · Hygienic Environment",
];

export default function PromoBanner() {
  const doubled = [...PROMO_ITEMS, ...PROMO_ITEMS];
  return (
    <div className="bg-[#1C1917] text-[#E6DFD4] text-[0.75rem] py-2 overflow-hidden select-none">
      <div className="inline-flex animate-[ticker_40s_linear_infinite] hover:[animation-play-state:paused] whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="mx-[52px]">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}