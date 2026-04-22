import { useRef } from "react";

const features = [
  {
    title: "Free On-Site Consultation",
    desc: "Book a free consultation from our experts.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Accurate & Specific Quotation",
    desc: "Receive precise quotations and advice.",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
  },
  {
    title: "Certified Painters",
    desc: "Professionals trained and certified.",
    img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
  },
  {
    title: "Mechanised Tools",
    desc: "Fast and clean painting process.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  },
];

export default function WhyChoose() {
  const ref = useRef();

  const scroll = (dir) => {
    ref.current.scrollBy({
      left: dir === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-900">
          Why Choose Our Painting Services?
        </h2>
        <p className="text-gray-500 mt-3">
          Trusted by thousands of families for quality and reliability
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* LEFT BUTTON */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
          bg-white/80 backdrop-blur p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          ◀
        </button>

        {/* CARDS */}
        <div
          ref={ref}
          className="flex gap-6 overflow-x-auto px-10 scroll-smooth snap-x snap-mandatory no-scrollbar"
        >
          {features.map((f, i) => (
            <div
              key={i}
              className="snap-center min-w-[300px] bg-white rounded-2xl shadow-md 
              hover:shadow-2xl transition-all duration-300 hover:-translate-y-3"
            >
              <img
                src={f.img}
                className="h-48 w-full object-cover rounded-t-2xl"
              />

              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 
          bg-white/80 backdrop-blur p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          ▶
        </button>
      </div>
    </section>
  );
}