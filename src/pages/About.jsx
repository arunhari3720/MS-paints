import aboutImg from "../assets/about_hero.png";
import asian from "../assets/asian.webp";
import berger from "../assets/berger.png";

export default function About() {
  return (
    <div className="bg-white text-gray-800">

      {/* 🔥 HERO */}
      <section className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">

        {/* IMAGE */}
        <img
          src={aboutImg}
          alt="MS Paints"
          className="w-full h-full object-contain md:object-cover object-center md:object-[center_20%] bg-teal-500"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* CURVE */}
        <div className="absolute bottom-0 w-full">
          <svg viewBox="0 0 1440 180" className="w-full h-[120px] md:h-[140px]">
            <path
              fill="#ffffff"
              d="M0,120 C400,200 1000,40 1440,120 L1440,180 L0,180 Z"
            />
          </svg>
        </div>

      </section>

      {/* 📖 STORY */}
      <section className="py-14 md:py-20 max-w-5xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          Our Story & Inspiration
        </h2>

        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          Hello, my name is <span className="font-semibold text-orange-500">Angeeswaran</span>,.
          I have been working in the painting field for over 18 years, continuing a legacy started by my father.
          <br /><br />
          During my childhood, I used to accompany him on weekends and learn the work. That’s how I developed a strong interest in this industry.
          <br /><br />
          In earlier times (1970s–1980s), painting was very simple. People used lime (whitewash) and basic tools.
          As buildings grew and customer expectations increased, the industry evolved with better materials and modern techniques.
          <br /><br />
          Today, painting is not just work — it is about transforming homes into beautiful living spaces.
        </p>
      </section>

      {/* 🏅 CERTIFICATION */}
      <section className="py-14 md:py-16 bg-gray-50 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Certified & Trusted Professional
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10 px-4">
          Certified by leading brands like Asian Paints and Berger Paints,
          ensuring high-quality standards and modern techniques in every project.
        </p>

        <div className="flex justify-center gap-6 md:gap-10 flex-wrap items-center">
          <img
            src={asian}
            alt="Asian Paints"
            className="h-10 md:h-14 grayscale hover:grayscale-0 hover:scale-110 transition"
          />
          <img
            src={berger}
            alt="Berger Paints"
            className="h-10 md:h-14 grayscale hover:grayscale-0 hover:scale-110 transition"
          />
        </div>
      </section>

      {/* 🧭 TIMELINE */}
      <section className="py-14 md:py-20 bg-white">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 md:mb-16">
          Journey of the Industry
        </h2>

        <div className="relative max-w-5xl mx-auto px-4 md:px-6">

          {/* LINE (hide mobile) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full"></div>

          {[
            {
              year: "1970s–1980s",
              title: "Traditional Painting Era",
              text: "Painting was done using lime (whitewash) and simple tools made from natural materials.",
            },
            {
              year: "1990s",
              title: "Growing Cities & Demand",
              text: "Urban growth increased demand for better finishes and modern painting styles.",
            },
            {
              year: "Early Learning",
              title: "Foundation & Passion",
              text: "I learned painting from my father during weekends, building my passion early.",
            },
            {
              year: "2000s",
              title: "Modern Paint Revolution",
              text: "Emulsion paints improved durability, washability, and resistance.",
            },
            {
              year: "Growth",
              title: "Teamwork & Trust",
              text: "With a strong team and client trust, we handled larger projects successfully.",
            },
            {
              year: "Today",
              title: "Modern Designs",
              text: "Wallpaper, textures, and premium finishes define today’s painting industry.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`mb-10 flex flex-col md:flex-row items-center ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >

              {/* CONTENT */}
              <div className="md:w-1/2 w-full p-3 md:p-4">
                <div className="bg-gray-50 p-4 md:p-6 rounded-xl shadow hover:shadow-xl transition">
                  <h3 className="text-orange-500 text-xs md:text-sm font-semibold mb-2">
                    {item.year}
                  </h3>
                  <h2 className="text-lg md:text-xl font-bold mb-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    {item.text}
                  </p>
                </div>
              </div>

              {/* DOT */}
              <div className="w-4 h-4 md:w-5 md:h-5 bg-orange-500 rounded-full border-4 border-white shadow z-10 my-4 md:my-0"></div>

              {/* SPACER */}
              <div className="md:w-1/2 hidden md:block"></div>

            </div>
          ))}
        </div>
      </section>

      {/* 📈 GROWTH */}
      <section className="py-14 md:py-20 bg-gray-50 text-center px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Growth & Success
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-base md:text-lg">
          Earlier, life was simple with limited resources. But through dedication,
          hard work, and continuous learning, I have built a stable career.
          <br /><br />
          Today, I own a mobile phone, a bike, and even a car — showing the growth
          and success achieved through this profession.
        </p>
      </section>

    </div>
  );
}