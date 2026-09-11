import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function PageHero({ eyebrow, title, description, action = "Start a project", actionTo = "/contact" }) {
  return (
    <section className="sf-page-hero sf-shell bg-slate-950 text-white">
      <div className="sf-hero-orb sf-hero-orb-one" />
      <div className="sf-hero-orb sf-hero-orb-two" />
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="max-w-4xl">
          {eyebrow && <span className="sf-eyebrow bg-white/10 text-cyan-300">{eyebrow}</span>}
          <h1 className="mt-5 text-4xl font-black tracking-[-.04em] md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{description}</p>
          <Link to={actionTo} className="sf-btn sf-btn-primary mt-8">
            {action} <FaArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PageHero;
