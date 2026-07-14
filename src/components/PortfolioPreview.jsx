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
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-blue-600 font-semibold uppercase">
            Our Portfolio
          </p>

          <h2 className="text-4xl font-bold mt-3 text-gray-900">
            Featured Projects
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are examples of the innovative technology solutions we build
            for businesses, schools, startups, and organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="h-48 bg-gradient-to-r from-blue-700 to-cyan-500 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold text-center px-4">
                  {project.title}
                </h3>
              </div>

              <div className="p-8">
                <span className="text-sm font-semibold text-blue-600">
                  {project.category}
                </span>

                <p className="mt-4 text-gray-600">
                  {project.description}
                </p>

                <button className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default PortfolioPreview;
