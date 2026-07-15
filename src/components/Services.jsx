import { Link } from "react-router-dom";
import {
  FaGlobe,
  FaMobileAlt,
  FaShieldAlt,
  FaRobot,
  FaCloud,
  FaChalkboardTeacher,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaGlobe className="text-5xl text-blue-600 mb-4" />,
    title: "Website Development",
    description:
      "Professional, responsive, SEO-friendly, and high-performance websites tailored to help your business grow online.",
  },
  {
    icon: <FaMobileAlt className="text-5xl text-blue-600 mb-4" />,
    title: "Mobile App Development",
    description:
      "Modern Android and iOS applications built using Flutter and the latest technologies for exceptional performance.",
  },
  {
    icon: <FaShieldAlt className="text-5xl text-blue-600 mb-4" />,
    title: "Cybersecurity",
    description:
      "Protect your business with advanced cybersecurity solutions, security assessments, and digital risk management.",
  },
  {
    icon: <FaRobot className="text-5xl text-blue-600 mb-4" />,
    title: "Artificial Intelligence",
    description:
      "Smart AI-powered solutions that automate business processes and improve productivity through intelligent systems.",
  },
  {
    icon: <FaCloud className="text-5xl text-blue-600 mb-4" />,
    title: "Cloud Solutions",
    description:
      "Reliable cloud deployment, hosting, migration, and scalable infrastructure services for modern businesses.",
  },
  {
    icon: <FaChalkboardTeacher className="text-5xl text-blue-600 mb-4" />,
    title: "Tech Training",
    description:
      "Practical technology training in web development, Flutter, cybersecurity, AI, and other in-demand digital skills.",
  },
];

function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            What We Do
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-blue-700 leading-tight">
            Our Services
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            We deliver innovative technology solutions that help businesses,
            startups, schools, government agencies, and organizations succeed
            in today's digital world.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300 flex flex-col"
            >

              <div className="flex justify-center">
                {service.icon}
              </div>

              <h3 className="mt-5 text-2xl font-bold text-gray-800 leading-tight">
                {service.title}
              </h3>

              <p className="mt-5 text-gray-600 leading-8 flex-grow">
                {service.description}
              </p>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 mt-8 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Learn More
                <FaArrowRight />
              </Link>

            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">

          <Link
            to="/services"
            className="inline-block border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            View All Services
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Services;
