import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Product";
import Color from "./pages/Color";
import Inspiration from "./pages/Inspiration";
import About from "./pages/About";
import Works from "./pages/Works";

function App() {
  return (
    <BrowserRouter>

      {/* ✅ Navbar always visible */}
      <Navbar />
         
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/color" element={<Color />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
       
      </Routes>
 <Footer />
    </BrowserRouter>
  );
}

export default App;