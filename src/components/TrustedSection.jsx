import {
  FaBuilding,
  FaUniversity,
  FaUserTie,
  FaHandshake,
} from "react-icons/fa";

function TrustedSection() {
  const clients = [
    {
      icon: <FaBuilding className="text-5xl text-blue-600" />,
      title: "Businesses",
      text: "Helping companies grow through modern digital solutions.",
    },
    {
      icon: <FaUniversity className="text-5xl text-blue-600" />,
      title: "Schools",
      text: "Providing educational technology and training solutions.",
    },
    {
      icon: <FaUserTie className="text-5xl text-blue-600" />,
      title: "Professionals",
      text: "Empowering professionals with practical technology skills.",
    },
    {
      icon: <FaHandshake className="text-5xl text-blue-600" />,
      title: "Organizations",
      text: "Delivering secure and scalable technology for NGOs and institutions.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-blue-600 font-semibold uppercase">
            Trusted Technology Partner
          </p>

          <h2 className="text-4xl font-bold mt-3 text-gray-900">
            Helping Organizations Build the Future
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            We work with businesses, schools, startups, NGOs, and professionals
            to deliver innovative, secure, and scalable technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {clients.map((item) => (
            <div
              key={item.title}
              className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center"
            >
              <div className="flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mt-6 text-gray-800">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TrustedSection;
