import { Link } from "react-router-dom";
import { FaArrowRight, FaBook, FaFutbol, FaHeartbeat, FaStore } from "react-icons/fa";

const projects = [
  {
    Icon: FaStore,
    title: "Gida Services",
    category: "Local services",
    text: "A simple marketplace connecting people with trusted local service providers.",
    image: "/projects/gida-services.jpg",
  },
  {
    Icon: FaBook,
    title: "Hikimar Yara",
    category: "Education",
    text: "Hausa children's stories and audio learning designed around culture and family.",
    image: "/projects/hikimar-yara.jpg",
  },
  {
    Icon: FaFutbol,
    title: "Football Academy Management",
    category: "Sports operations",
    text: "Player, coach, training, attendance, fixtures, finance and administration in one platform.",
    image: "/projects/football-academy.jpg",
  },
  {
    Icon: FaHeartbeat,
    title: "Hospital Response App",
    category: "Healthcare",
    text: "Digital coordination for patients, responders, clinical teams and hospital readiness.",
    image: "/projects/hospital-response.jpg",
  },
];

function PortfolioPreview() {
  return (
    <section className="sf-section bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <span className="sf-eyebrow bg-white/10 text-cyan-300">Featured projects</span>
            <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">
              Products built around real needs.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Explore a few of the digital products SeeFuture Tech Hub has designed
              and developed across services, education, sports and healthcare.
            </p>
          </div>
          <Link to="/portfolio" className="sf-btn sf-btn-light shrink-0">
            View all projects <FaArrowRight size={11} />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map(({ Icon, title, category, text, image }) => (
            <Link
              to="/portfolio"
              className="sf-feature-project group overflow-hidden rounded-[26px] border border-white/10 bg-white/[.06]"
              key={title}
            >
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={image}
                  alt={`${title} screenshot`}
                  loading="lazy"
                  className="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
                <span className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-cyan-300 backdrop-blur">
                  <Icon />
                </span>
              </div>
              <div className="p-6">
                <span className="text-[10px] font-black uppercase tracking-[.18em] text-cyan-300">{category}</span>
                <h3 className="mt-3 text-lg font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-white">
                  Explore project <FaArrowRight size={10} className="transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioPreview;
