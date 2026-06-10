// ── Shared UI Primitives ──────────────────────────

export const SectionOverline = ({ children, center = false }) => (
  <span
    className={`text-[10px] tracking-[0.22em] font-semibold uppercase text-[#C5A059] block mb-2.5 ${center ? "text-center" : ""}`}
  >
    {children}
  </span>
);

export const GoldButton = ({ children, onClick, href, className = "" }) => {
  const cls = `inline-flex items-center gap-1.5 bg-[#C5A059] hover:bg-[#A88746] text-white rounded-full px-6 py-2.5 text-[0.825rem] font-semibold transition-all duration-200 hover:-translate-y-px cursor-pointer ${className}`;
  if (href)
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
};

export const OutlineButton = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center gap-1.5 border-[1.5px] border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-white rounded-full px-6 py-[9px] text-[0.825rem] font-semibold transition-all duration-200 cursor-pointer ${className}`}
  >
    {children}
  </button>
);

export const Stars = () => (
  <div className="flex gap-0.5 text-[#C5A059] text-sm mb-3.5">
    {"★★★★★".split("").map((s, i) => (
      <span key={i}>{s}</span>
    ))}
  </div>
);

export const GlamzLogo = ({ light = false }) => (
  <a href="#home" className="flex items-center gap-2.5 no-underline">
    <div className="w-[34px] h-[34px] rounded-[9px] bg-[#C5A059] flex items-center justify-center flex-shrink-0">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm12 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-12 6 6 6m0 0 6-6M6 9l12 12" />
      </svg>
    </div>
    <div className="leading-none">
      <div
        className={`font-[Playfair_Display] font-bold text-[1.1rem] tracking-[0.02em] ${light ? "text-white" : "text-[#1C1917]"}`}
      >
        GLAMZ
      </div>
      <div
        className={`text-[0.58rem] tracking-[0.2em] mt-0.5 ${light ? "text-[#C5A059]" : "text-[#57534E]"}`}
      >
        FAMILY SALON
      </div>
    </div>
  </a>
);