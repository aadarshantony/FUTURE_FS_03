import { SectionOverline } from "./ui";

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
    alt: "Salon Interior",
    featured: true,
  },
  {
    src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800&q=80",
    alt: "Hair Coloring",
  },
  {
    src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80",
    alt: "Facial Treatment",
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
    alt: "Hair Styling",
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80",
    alt: "Beard Grooming",
  },
];

function GalleryCard({ src, alt, featured }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[28px] ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full object-cover transition-all duration-700 group-hover:scale-110 ${
          featured ? "h-[520px]" : "h-[250px]"
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <span className="inline-block text-[11px] tracking-[0.18em] uppercase text-[#E7D4AA] mb-2">
            GLAMZ Salon
          </span>

          <h3 className="text-white font-semibold text-lg">
            {alt}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-gradient-to-b from-[#FAFAF9] to-[#F5F5F4] py-[clamp(80px,9vw,120px)] px-[clamp(16px,5vw,80px)]"
    >
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <SectionOverline center>Gallery</SectionOverline>

          <h2 className="font-[Playfair_Display] text-[clamp(2rem,4vw,3.25rem)] font-bold text-[#1C1917] max-w-[700px] mx-auto">
            Experience The Atmosphere
          </h2>

          <p className="max-w-[620px] mx-auto mt-5 text-[#57534E] leading-[1.9] text-[0.95rem]">
            Elegant interiors, professional care, and a welcoming environment
            designed to make every visit feel special.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-4 gap-5 auto-rows-auto">
          {IMAGES.map((image) => (
            <GalleryCard key={image.alt} {...image} />
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="grid md:hidden gap-4">
          {IMAGES.map((image) => (
            <div
              key={image.alt}
              className="relative rounded-[24px] overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[260px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-5 left-5">
                <h3 className="text-white font-medium text-lg">
                  {image.alt}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}