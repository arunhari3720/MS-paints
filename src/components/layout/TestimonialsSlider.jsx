import { useEffect, useState } from "react";

import img1 from "../../assets/img_1.jpg";
import img2 from "../../assets/img_2.jpg";
import img3 from "../../assets/img_3.jpg";

const testimonials = [
  {
    name: "Ganesan",
    location: "Madurai",
    text: "Colours that make you fall in love with your house from the inside out.",
    rating: 5,
    image: img1,
  },
  {
    name: "Nagarajan",
    location: "Chennai",
    text: "Professional painters and amazing finish. My home looks brand new!",
    rating: 5,
    image: img2,
  },
  {
    name: "Aun",
    location: "Dindigul",
    text: "Fast, clean, and high-quality service. Highly recommended!",
    rating: 5,
    image: img3,
  },
];

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Our Satisfied Customers</h2>
        <p className="text-gray-500 mt-2">
          Real feedback from our happy clients
        </p>
      </div>

      <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-xl bg-white">

        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="min-w-full grid md:grid-cols-2">

              {/* IMAGE */}
              <img
                src={t.image}
                className="h-80 md:h-full w-full object-cover"
              />

              {/* CONTENT */}
              <div className="flex flex-col justify-center p-8">

                <div className="text-yellow-400 text-xl mb-4">
                  {"★".repeat(t.rating)}
                </div>

                <p className="text-gray-600 text-lg mb-6 italic">
                  "{t.text}"
                </p>

                <h3 className="text-xl font-semibold">{t.name}</h3>
                <p className="text-gray-500 text-sm">{t.location}</p>

              </div>

            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}