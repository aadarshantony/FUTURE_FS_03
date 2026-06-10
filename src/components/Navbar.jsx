import { useState, useEffect } from "react";
import { GlamzLogo, GoldButton } from "./ui";

const NAV_ITEMS = [
    "Home",
    "About",
    "Services",
    "Gallery",
    "Testimonials",
    "Contact",
];

const scrollTo = (id, close) => {
    document
        .getElementById(id.toLowerCase())
        ?.scrollIntoView({ behavior: "smooth" });

    close?.();
};

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "unset";

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [menuOpen]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 bg-[rgba(250,250,249,0.96)] backdrop-blur-lg flex items-center justify-between px-[clamp(16px,5vw,80px)] h-[68px] transition-all duration-300 ${scrolled
                    ? "border-b border-[#E6DFD4] shadow-[0_2px_16px_rgba(0,0,0,0.06)]"
                    : "border-b border-transparent"
                    }`}
            >
                <GlamzLogo />

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-7">
                    {NAV_ITEMS.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollTo(item)}
                            className="bg-transparent border-none text-[#57534E] hover:text-[#C5A059] text-[0.85rem] font-medium transition-colors duration-200 cursor-pointer"
                        >
                            {item}
                        </button>
                    ))}

                    <GoldButton
                        href="https://wa.me/916282002112?text=Hi%20GLAMZ%20Family%20Salon,%20I'd%20like%20to%20book%20an%20appointment."
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        WhatsApp Us
                    </GoldButton>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setMenuOpen((v) => !v)}
                    className="md:hidden bg-transparent border-none text-[#1C1917] cursor-pointer p-1"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? (
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    ) : (
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        >
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="fixed inset-0 top-[68px] z-40 bg-[rgba(250,250,249,0.99)] backdrop-blur-lg flex flex-col items-center justify-center gap-6 md:hidden">
                    {NAV_ITEMS.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollTo(item, () => setMenuOpen(false))}
                            className="bg-transparent border-none text-[#57534E] hover:text-[#C5A059] text-xl font-medium transition-colors cursor-pointer"
                        >
                            {item}
                        </button>
                    ))}

                    <GoldButton
                        href="https://wa.me/916282002112?text=Hi%20GLAMZ%20Family%20Salon,%20I'd%20like%20to%20book%20an%20appointment."
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        WhatsApp Us
                    </GoldButton>
                </div>
            )}
        </>
    );
}