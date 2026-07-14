import {
  FaLaptopCode,
  FaShieldAlt,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLaptopCode className="text-4xl text-blue-600" />,
    title: "Modern Technology",
    description:
      "We build websites, mobile apps, and software using the latest technologies.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-blue-600" />,
    title: "Cybersecurity",
    description:
      "Protecting businesses and organizations with secure digital solutions.",
  },
  {
    icon: <FaLightbulb className="text-4xl text-blue-600" />,
    title: "Innovation",
    description:
      "We transform ideas into practical digital products that create value.",
  },
  {
    icon: <FaUsers className="text-4xl text-blue-600" />,
    title: "Expert Support",
    description:
      "Our team is committed to providing reliable support and long-term partnerships.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-700">
          Why Choose SeeFuture Tech Hub?
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
          We combine innovation, technology, and expertise to deliver solutions
          that help businesses and communities succeed.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-50 rounded-xl p-8 shadow hover:shadow-lg transition"
            >
              <div className="mb-6">{feature.icon}</div>

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
