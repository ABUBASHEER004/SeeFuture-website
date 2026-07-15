import SEO from "../components/SEO";
import {
  FaGlobe,
  FaMobileAlt,
  FaRobot,
  FaShieldAlt,
  FaCloud,
  FaArrowRight,
} from "react-icons/fa";

const projects = [
  {
    title: "Business Website Development",
    icon: <FaGlobe className="text-5xl text-blue-600" />,
    description:
      "Modern, responsive websites designed to help businesses establish a strong online presence and attract more customers.",
    technologies: ["React", "Vite", "Tailwind CSS"],
  },
  {
    title: "Mobile App Development",
    icon: <FaMobileAlt className="text-5xl text-blue-600" />,
    description:
      "High-performance Android and iOS applications built with Flutter for startups and enterprises.",
    technologies: ["Flutter", "Firebase", "Dart"],
  },
  {
    title: "Artificial Intelligence Solutions",
    icon: <FaRobot className="text-5xl text-blue-600" />,
    description:
      "AI-powered applications that automate workflows, improve decision-making, and enhance customer experiences.",
    technologies: ["Python", "Machine Learning", "OpenAI"],
  },
  {
    title: "Cybersecurity Services",
    icon: <FaShieldAlt className="text-5xl text-blue-600" />,
    description:
      "Protecting organizations through security assessments, vulnerability testing, and cybersecurity best practices.",
    technologies: ["Network Security", "Ethical Hacking", "Risk Assessment"],
  },
  {
    title: "Cloud Solutions",
    icon: <FaCloud className="text-5xl text-blue-600" />,
    description:
      "Reliable cloud deployment, hosting, backup, and scalable infrastructure for businesses.",
    technologies: ["AWS", "Azure", "Cloud Hosting"],
  },
  {
    title: "Custom Software Development",
    icon: <FaGlobe className="text-5xl text-blue-600" />,
    description:
      "Tailor-made software solutions that streamline operations and increase business productivity.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
];

function Portfolio() {
  return (
    <>
      <SEO
        title="Portfolio | SeeFuture Tech Hub"
        description="Explore technology projects completed by SeeFuture Tech Hub including websites, mobile applications, AI, cybersecurity, cloud solutions, and custom software."
        keywords="Portfolio, SeeFuture Tech Hub, Web Development, Mobile Apps, Flutter, React, AI, Cybersecurity, Cloud Computing"
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Our Portfolio
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100 leading-8">
            We build innovative digital solutions that help businesses,
            organizations, startups, and institutions grow through technology.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-700 leading-tight">
              Featured Projects
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-8">
              Here are some of the technology solutions we design and deliver
              for businesses and organizations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              >
                <div className="mb-6">
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-800 leading-tight">
                  {project.title}
                </h3>

                <p className="mt-5 text-gray-600 leading-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="mt-8 flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 transition">
                  Learn More
                  <FaArrowRight />
                </button>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid gap-10 md:grid-cols-4 text-center">

            <div>
              <h3 className="text-5xl font-bold">50+</h3>
              <p className="mt-4 text-blue-100 text-lg">
                Projects Delivered
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">25+</h3>
              <p className="mt-4 text-blue-100 text-lg">
                Happy Clients
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">10+</h3>
              <p className="mt-4 text-blue-100 text-lg">
                Technology Services
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">100%</h3>
              <p className="mt-4 text-blue-100 text-lg">
                Client Satisfaction
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-blue-700 leading-tight">
            Ready to Build Your Next Project?
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Whether you need a professional website, mobile application,
            cybersecurity solution, AI system, or cloud infrastructure,
            SeeFuture Tech Hub is ready to help.
          </p>

          <a
            href="/contact"
            className="inline-block mt-10 bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-xl font-semibold transition"
          >
            Start Your Project
          </a>

        </div>
      </section>
    </>
  );
}

export default Portfolio;