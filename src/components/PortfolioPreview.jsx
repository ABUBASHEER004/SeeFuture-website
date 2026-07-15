import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "Corporate Business Website",
    category: "Web Development",
    description:
      "Modern, responsive websites designed to strengthen your brand and grow your business.",
  },
  {
    title: "Mobile Service App",
    category: "Mobile Development",
    description:
      "Cross-platform mobile applications built for Android and iOS using Flutter.",
  },
  {
    title: "School Management System",
    category: "Software Solution",
    description:
      "A complete platform for managing students, teachers, attendance, and results.",
  },
  {
    title: "Cybersecurity Assessment",
    category: "Cybersecurity",
    description:
      "Helping organizations identify risks and strengthen their digital security.",
  },
];

function PortfolioPreview() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Our Portfolio
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Featured Projects
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg leading-8">
            Here are examples of the innovative technology solutions we build
            for businesses, schools, startups, and organizations.
          </p>

        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              {/* Banner */}
              <div className="h-52 bg-gradient-to-r from-blue-700 to-cyan-500 flex items-center justify-center px-6">
                <h3 className="text-white text-2xl font-bold text-center leading-tight">
                  {project.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-8">

                <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full">
                  {project.category}
                </span>

                <p className="mt-6 text-gray-600 leading-8">
                  {project.description}
                </p>

                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 mt-8 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  View Project
                  <FaArrowRight />
                </Link>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Button */}
        <div className="text-center mt-16">

          <Link
            to="/portfolio"
            className="inline-block bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            View All Projects
          </Link>

        </div>

      </div>
    </section>
  );
}

export default PortfolioPreview;
