import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Academy", path: "/academy" },
    { name: "Blog", path: "/blog" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="SeeFuture Tech Hub"
            className="h-12 w-auto"
          />

          <div>
            <h2 className="text-xl font-bold text-blue-700 leading-none">
              SeeFuture
            </h2>

            <p className="text-xs text-gray-500">
              Tech Hub
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.name}
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
            className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl text-blue-700"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[700px]" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t shadow-lg">

          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-4 border-b transition ${
                  isActive
                    ? "bg-blue-50 text-blue-700 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="p-6">
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition"
            >
              Get Started
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Navbar;