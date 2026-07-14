import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Academy", path: "/academy" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="SeeFuture Tech Hub"
            className="h-12"
          />

          <div>
            <h1 className="text-xl font-bold text-blue-700">
              SeeFuture Tech Hub
            </h1>

            <p className="text-xs text-gray-500">
              See Today. Build Tomorrow.
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 font-semibold"
                  : "text-gray-700 hover:text-blue-700 transition"
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 hover:bg-gray-100"
            >
              {link.name}
            </NavLink>
          ))}

          <div className="p-6">
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-blue-700 text-white py-3 rounded-lg"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
