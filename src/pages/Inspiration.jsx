import founder from "../assets/logo.png";

const timeline = [
  {
    year: "1980s",
    title: "The Beginning",
    desc: "Painting was simple with lime (whitewash) and natural brushes. Homes were smaller and designs were minimal.",
  },
  {
    year: "1990s",
    title: "Growing Demand",
    desc: "With urban growth, bigger houses emerged and customers started expecting better finishes and colors.",
  },
  {
    year: "2000s",
    title: "Modern Paint Revolution",
    desc: "Introduction of emulsion paints brought durability, washability, and resistance to fungus.",
  },
  {
    year: "2010s",
    title: "Skill & Teamwork",
    desc: "Strong teamwork and trust helped take on larger projects and grow through customer referrals.",
  },
  {
    year: "Today",
    title: "Modern Designs",
    desc: "Wallpaper, textures, and decorative designs define modern homes. Continuous learning keeps us ahead.",
  },
];

export default function Inspiration() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-14 md:py-20 px-4 md:px-6">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Journey & Inspiration
        </h1>
        <p className="text-gray-500 text-sm md:text-base">
          A legacy of craftsmanship, passion, and continuous growth in the painting industry.
        </p>
      </div>

      {/* Founder */}
      <div className="flex flex-col items-center text-center mb-14 md:mb-20">
        <img
          src={founder}
          alt="Founder"
          className="h-28 w-28 md:h-40 md:w-40 object-cover rounded-full shadow-xl mb-4 md:mb-6"
        />

        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Angeeswaran
        </h2>

        <p className="text-gray-500 max-w-xl mt-3 text-sm md:text-base">
          Carrying forward a legacy started by my father, I grew up learning painting during weekends.
          Today, with over 18 years of experience, I continue to build trust through quality work.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">

        {/* LINE */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-1 bg-gray-300 h-full"></div>

        {timeline.map((item, i) => (
          <div
            key={i}
            className={`mb-10 flex flex-col md:flex-row items-start md:items-center ${
              i % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >

            {/* CONTENT */}
            <div className="w-full md:w-1/2 pl-10 md:pl-0 md:p-6">
              <div className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-xl transition">
                <h3 className="text-orange-500 font-bold text-xs md:text-sm mb-2">
                  {item.year}
                </h3>
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* DOT */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-orange-500 rounded-full border-4 border-white shadow-md z-10"></div>

            {/* SPACER */}
            <div className="hidden md:block md:w-1/2"></div>

          </div>
        ))}
      </div>

      {/* Closing */}
      <div className="text-center mt-16 md:mt-20 max-w-2xl mx-auto px-2">
        <p className="text-base md:text-lg text-gray-700 italic">
          “We don’t just paint walls — we build trust, color, and lasting impressions.”
        </p>
      </div>
    </section>
  );
}