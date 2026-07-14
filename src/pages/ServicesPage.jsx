import {
  FaGlobe,
  FaMobileAlt,
  FaShieldAlt,
  FaRobot,
  FaCloud,
  FaGraduationCap,
} from "react-icons/fa";

const services = [
  {
    icon: <FaGlobe className="text-5xl text-blue-600" />,
    title: "Website Development",
    description:
      "Modern, responsive, SEO-friendly websites for businesses, schools, NGOs, and government organizations.",
  },
  {
    icon: <FaMobileAlt className="text-5xl text-blue-600" />,
    title: "Mobile App Development",
    description:
      "Cross-platform Android and iOS applications built using modern technologies such as Flutter.",
  },
  {
    icon: <FaShieldAlt className="text-5xl text-blue-600" />,
    title: "Cybersecurity",
    description:
      "Security assessments, awareness training, vulnerability management, and digital protection services.",
  },
  {
    icon: <FaRobot className="text-5xl text-blue-600" />,
    title: "Artificial Intelligence",
    description:
      "AI-powered applications, automation, chatbots, and intelligent business solutions.",
  },
  {
    icon: <FaCloud className="text-5xl text-blue-600" />,
    title: "Cloud Solutions",
    description:
      "Cloud hosting, migration, deployment, backup, and scalable infrastructure services.",
  },
  {
    icon: <FaGraduationCap className="text-5xl text-blue-600" />,
    title: "Technology Training",
    description:
      "Professional training in software development, cybersecurity, AI, cloud computing, and digital skills.",
  },
];

function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            Our Services
          </h1>

          <p className="mt-6 text-lg text-blue-100 max-w-3xl mx-auto">
            We provide innovative technology services that help organizations
            improve efficiency, strengthen security, and achieve sustainable growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl shadow-md p-8 hover:-translate-y-2 hover:shadow-xl transition duration-300"
              >
                <div className="mb-6">{service.icon}</div>

                <h3 className="text-2xl font-bold text-gray-800">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {service.description}
                </p>

                <button className="mt-6 bg-blue-700 text-white px-5 py-3 rounded-lg hover:bg-blue-800 transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-blue-700">
            How We Work
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-14">
            {[
              "1. Discover",
              "2. Plan",
              "3. Build",
              "4. Support",
            ].map((step) => (
              <div
                key={step}
                className="bg-white rounded-xl shadow-md p-8"
              >
                <h3 className="text-2xl font-bold text-blue-700">
                  {step}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Ready to Start Your Next Project?
          </h2>

          <p className="mt-6 text-blue-100">
            Whether you need a website, mobile app, cybersecurity support,
            or technology consulting, we're here to help.
          </p>

          <button className="mt-8 bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
            Contact Us Today
          </button>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
