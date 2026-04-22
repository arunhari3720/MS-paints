import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* LEFT - BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} className="h-10" />
            <h2 className="text-xl font-bold text-white">
              MS Painting Works
            </h2>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            "We don’t just paint walls — we create beautiful living spaces that reflect your dreams."
          </p>

          <p className="mt-4 text-orange-400 font-medium">
            Available all over Tamil Nadu 🇮🇳
          </p>
        </div>

        {/* CENTER - LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>

          <div className="flex flex-col gap-2 text-sm">
            <Link to="/" className="hover:text-orange-400">Home</Link>
            <Link to="/products" className="hover:text-orange-400">Products</Link>
            <Link to="/color" className="hover:text-orange-400">Colour</Link>
            <Link to="/inspiration" className="hover:text-orange-400">Inspiration</Link>
            <Link to="/about" className="hover:text-orange-400">About</Link>
            <Link to="/works" className="hover:text-orange-400">Works</Link>
          </div>
        </div>

        {/* RIGHT - CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>

          <p className="text-sm">📞 9842172687</p>
          <p className="text-sm mt-2">📍 Madurai, Tamil Nadu</p>
          <p className="text-sm mt-2">✉️ mspaintworks@gmail.com</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="text-center text-xs text-gray-500 mt-12 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} MS Painting Works. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;