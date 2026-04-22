import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/Hero";
import TestimonialsSlider from "../components/layout/TestimonialsSlider";
import WhyChoose from "../components/WhyChoose";
const Home = () => {
  return (
    <div>
  
      <Hero />
      <TestimonialsSlider />
      <WhyChoose />
    </div>
  );
};

export default Home;