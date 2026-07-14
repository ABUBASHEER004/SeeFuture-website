import {
  FaGlobe,
  FaMobileAlt,
  FaShieldAlt,
  FaRobot,
  FaCloud,
  FaChalkboardTeacher,
} from "react-icons/fa";

const services = [
  {
    icon: <FaGlobe className="text-5xl text-blue-600 mb-4" />,
    title: "Website Development",
    description:
      "Professional, responsive, and high-performance websites tailored to your business.",
  },
  {
    icon: <FaMobileAlt className="text-5xl text-blue-600 mb-4" />,
    title: "Mobile App Development",
    description:
      "Modern Android and iOS applications built with the latest technologies.",
  },
  {
    icon: <FaShieldAlt className="text-5xl text-blue-600 mb-4" />,
    title: "Cybersecurity",
    description:
      "Protecting businesses and organizations with secure digital solutions.",
  },
  {
    icon: <FaRobot className="text-5xl text-blue-600 mb-4" />,
    title: "Artificial Intelligence",
    description:
      "Smart AI solutions that automate processes and improve productivity.",
  },
  {
    icon: <FaCloud className="text-5xl text-blue-600 mb-4" />,
    title: "Cloud Solutions",
    description:
      "Reliable cloud infrastructure, hosting, and deployment services.",
  },
  {
    icon: <FaChalkboardTeacher className="text-5xl text-blue-600 mb-4" />,
    title: "Tech Training",
    description:
      "Practical technology training for students, professionals, and organizations.",
  },
];

function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-700">
          Our Services
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          We deliver innovative technology solutions that help businesses,
          startups, schools, and organizations thrive in the digital world.
        </p>

        <div className="grid gap-8 mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-md p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex justify-center">{service.icon}</div>

              <h3 className="text-xl font-bold text-gray-800 mt-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
