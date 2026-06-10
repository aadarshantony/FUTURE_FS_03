import { SectionOverline, Stars } from "./ui";

const TESTIMONIALS = [
  {
    name: "Priya Nair",
    service: "Hair Coloring",
    text: "Absolutely loved my experience at GLAMZ. The colorist understood exactly what I wanted. Clean, calm, welcoming — I'll definitely be back.",
  },
  {
    name: "Anand Krishnan",
    service: "Beard Grooming",
    text: "Best beard trim I've had in years. Professional, friendly, and they never rush you. Coming here every month now.",
  },
  {
    name: "Lakshmi Varma",
    service: "Bridal Package",
    text: "The team was patient and detail-oriented. They made me feel confident and beautiful on my wedding day.",
  }
];

function TestimonialCard({ name, service, text }) {
  return (
    <div className="group relative bg-white rounded-[28px] p-7 border border-[#E7E5E4] hover:border-[#C5A059]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
      <div className="absolute top-0 right-0 w-28 h-28 bg-[#C5A059]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        <Stars />

        <div className="text-[3.5rem] leading-none text-[#E7D4AA] font-serif h-10">
          "
        </div>

        <p className="text-[#57534E] text-[0.92rem] leading-[1.9] -mt-2 mb-8">
          {text}
        </p>

        <div className="border-t border-[#F5F5F4] pt-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C5A059] to-[#A88746] flex items-center justify-center text-white font-semibold text-sm">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)}
          </div>

          <div>
            <div className="font-semibold text-[#1C1917] text-[0.95rem]">
              {name}
            </div>
            <div className="text-[#C5A059] text-[0.78rem] font-medium mt-0.5">
              {service}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-b from-[#FAFAF9] to-[#F5F5F4] py-[clamp(80px,9vw,120px)] px-[clamp(16px,5vw,80px)]"
    >
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <SectionOverline center>Testimonials</SectionOverline>

          <h2 className="font-[Playfair_Display] text-[clamp(2rem,4vw,3.25rem)] font-bold text-[#1C1917] max-w-[700px] mx-auto">
            Trusted by Families Across Kochi
          </h2>

          <p className="max-w-[620px] mx-auto mt-5 text-[#57534E] leading-[1.9] text-[0.95rem]">
            Every visit is built around comfort, quality, and personal care.
            Here's what some of our clients have to say about their experience
            at GLAMZ Family Salon.
          </p>

          <div className="flex justify-center items-center gap-3 mt-8">
            <div className="flex text-[#C5A059] text-lg">
              ★★★★★
            </div>
            <span className="text-[#57534E] text-sm">
              Loved by our customers
            </span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}