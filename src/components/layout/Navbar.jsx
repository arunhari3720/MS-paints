import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo + Text */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="MS Paints"
            className="h-9 w-auto"
          />
          <h1 className="text-lg md:text-xl font-bold text-gray-800">
            <span className="text-orange-500">MS</span> Painting Works
          </h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-sm text-gray-600">
          <Link to="/" className="hover:text-orange-500">Home</Link>
          <Link to="/color" className="hover:text-orange-500">Colour</Link>
          <Link to="/inspiration" className="hover:text-orange-500">Inspiration</Link>
          <Link to="/about" className="hover:text-orange-500">About</Link>
          <Link to="/works" className="hover:text-orange-500">Works</Link>
        </div>

        {/* Contact (desktop only) */}
        <p className="hidden md:block text-sm text-gray-500">
          9842172687
        </p>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4 flex flex-col gap-4 text-gray-700">

          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/color" onClick={() => setMenuOpen(false)}>Colour</Link>
          <Link to="/inspiration" onClick={() => setMenuOpen(false)}>Inspiration</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/works" onClick={() => setMenuOpen(false)}>Works</Link>

          <p className="text-sm text-gray-500 pt-2 border-t">
            1800-103-6030
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;