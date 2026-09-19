import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBook,
  FaCheckCircle,
  FaFutbol,
  FaHeartbeat,
  FaStore,
} from "react-icons/fa";

const projects = [
  {
    number: "01",
    Icon: FaStore,
    category: "Local services marketplace",
    title: "Gida Services",
    description:
      "A practical local-services marketplace that helps people discover trusted professionals and service providers, request a service, communicate directly and get things done without unnecessary friction.",
    bullets: [
      "Service discovery and provider profiles",
      "Direct customer–provider communication",
      "Simple booking and request flows",
      "Designed for everyday local services",
    ],
    tech: ["Flutter", "Dart", "Firebase"],
    image: "/projects/gida-services.jpg",
    tone: "from-emerald-500/20 via-cyan-500/10 to-transparent",
  },
  {
    number: "02",
    Icon: FaBook,
    category: "Children's education & storytelling",
    title: "Hikimar Yara",
    description:
      "A Hausa children's storytelling and learning experience built around culturally relevant stories, friendly visuals and audio storytelling for young learners and families.",
    bullets: [
      "Hausa stories organized by categories",
      "Tarbiyya, Addini, Dabbobi and other themes",
      "Audio storytelling for a richer experience",
      "Child-friendly visual presentation",
    ],
    tech: ["Flutter", "Dart", "Audio"],
    image: "/projects/hikimar-yara.jpg",
    tone: "from-lime-500/20 via-amber-500/10 to-transparent",
  },
  {
    number: "03",
    Icon: FaFutbol,
    category: "Sports operations platform",
    title: "Football Academy Management System",
    description:
      "A connected academy-management platform that brings player development, coaching operations and administration into one digital workflow for a modern football academy.",
    bullets: [
      "Player and coach management",
      "Teams, training and attendance workflows",
      "Fixtures and academy activity tracking",
      "Finance, authentication and administration",
    ],
    tech: ["Flutter", "Dart", "Firebase"],
    image: "/projects/football-academy.jpg",
    tone: "from-emerald-500/20 via-sky-500/10 to-transparent",
  },
  {
    number: "04",
    Icon: FaHeartbeat,
    category: "Healthcare & emergency coordination",
    title: "Hospital Response App",
    description:
      "A healthcare and emergency-response application designed to support faster communication and coordination between patients, responders and healthcare facilities.",
    bullets: [
      "Live clinical-team visibility",
      "Emergency board and alert workflows",
      "Patient requests and communication",
      "Hospital readiness and response coordination",
    ],
    tech: ["Flutter", "Dart", "Firebase"],
    image: "/projects/hospital-response.jpg",
    tone: "from-rose-500/20 via-cyan-500/10 to-transparent",
  },
];

function ProjectVisual({ project }) {
  const { Icon, image, title, number, tone } = project;

  return (
    <div className={`sf-project-visual bg-gradient-to-br ${tone}`}>
      <div className="sf-project-glow" />
      <div className="sf-project-device">
        <div className="sf-project-device-bar">
          <span />
          <span />
          <span />
        </div>
        <img src={image} alt={`${title} app screenshot`} loading="lazy" />
      </div>
      <div className="sf-project-badge">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
          <Icon />
        </span>
        <span>
          <span className="block text-[10px] font-black uppercase tracking-[.18em] text-slate-400">
            Featured project
          </span>
          <span className="mt-1 block text-sm font-extrabold text-white">
            Project {number}
          </span>
        </span>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <>
      <SEO
        title="Featured Projects | SeeFuture Tech Hub"
        description="Explore featured SeeFuture Tech Hub digital products: Gida Services, Hikimar Yara, Football Academy Management System and Hospital Response App."
        keywords="SeeFuture Tech Hub portfolio, Gida Services, Hikimar Yara, football academy management, hospital response app, Flutter Nigeria"
      />

      <PageHero
        eyebrow="Featured projects"
        title="Real products. Practical technology. Designed for people."
        description="A closer look at four digital products built across local services, education, sports operations and healthcare response."
        action="Start a project"
      />

      <section className="sf-section bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="sf-eyebrow">Portfolio / Case studies</span>
            <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">
              Four products. Four real-world problems.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              SeeFuture Tech Hub builds digital experiences around the way people
              actually work, learn, communicate and access services.
            </p>
          </div>

          <div className="mt-16 space-y-10 lg:space-y-14">
            {projects.map((project, index) => {
              const { Icon, number, category, title, description, bullets, tech } = project;
              const reversed = index % 2 === 1;

              return (
                <article
                  key={title}
                  className={`sf-project-card ${reversed ? "lg:flex-row-reverse" : ""}`}
                >
                  <ProjectVisual project={project} />

                  <div className="flex flex-1 flex-col justify-center p-7 sm:p-9 lg:p-12">
                    <div className="flex items-center justify-between gap-4">
                      <span className="sf-eyebrow">
                        <Icon /> {category}
                      </span>
                      <span className="text-5xl font-black tracking-tighter text-slate-100 sm:text-6xl">
                        {number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                      {title}
                    </h3>
                    <p className="mt-4 max-w-2xl leading-8 text-slate-600">
                      {description}
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                          <FaCheckCircle className="mt-0.5 shrink-0 text-emerald-500" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-2">
                      {tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-extrabold text-slate-600"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sf-section bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
            <div>
              <span className="sf-eyebrow bg-white/10 text-cyan-300">Your product could be next</span>
              <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">
                From idea to a polished digital product.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Whether you need a marketplace, mobile app, operational platform or
                a purpose-built healthcare solution, we can help turn the workflow
                into a clear, usable product.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/[.06] p-7 backdrop-blur sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {["Product strategy", "UI/UX design", "Flutter development", "Firebase & cloud", "Data & analytics", "Deployment support"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-bold text-slate-200">
                    <FaCheckCircle className="shrink-0 text-cyan-300" />
                    {item}
                  </div>
                ))}
              </div>
              <Link to="/contact" className="sf-btn sf-btn-primary mt-8 w-full sm:w-auto">
                Discuss your project <FaArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
