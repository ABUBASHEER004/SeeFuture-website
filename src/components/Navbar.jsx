import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";

const links = [
  ["Home", "/"], ["About", "/about"], ["Services", "/services"],
  ["Portfolio", "/portfolio"], ["Academy", "/academy"], ["Blog", "/blog"],
  ["Careers", "/careers"], ["Contact", "/contact"],
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
          <img src="/logo.png" alt="SeeFuture Tech Hub" className="h-11 w-11 rounded-xl object-contain" />
          <div className="leading-none">
            <span className="block text-lg font-extrabold tracking-tight text-slate-950">SeeFuture</span>
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-[.22em] text-blue-600">Tech Hub</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {links.map(([name, path]) => (
            <NavLink key={path} to={path} end={path === "/"} className={({ isActive }) => `rounded-xl px-3 py-2 text-sm font-semibold transition ${isActive ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"}`}>
              {name}
            </NavLink>
          ))}
          <Link to="/contact" className="sf-btn sf-btn-primary ml-3 min-h-10 px-4 py-2 text-sm">Start a Project <FaArrowRight size={12} /></Link>
        </nav>

        <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="rounded-xl border border-slate-200 p-3 text-slate-700 xl:hidden">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 shadow-xl xl:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1">
            {links.map(([name, path]) => (
              <NavLink key={path} to={path} end={path === "/"} onClick={() => setOpen(false)} className={({ isActive }) => `rounded-xl px-4 py-3 font-semibold ${isActive ? "bg-blue-50 text-blue-700" : "text-slate-700"}`}>
                {name}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="sf-btn sf-btn-primary mt-2">Start a Project <FaArrowRight size={13} /></Link>
          </nav>
        </div>
      )}
    </header>
  );
}
export default Navbar;
