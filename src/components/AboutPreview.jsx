import { FaCheckCircle } from "react-icons/fa";

function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <img
            src="/logo.png"
            alt="SeeFuture Tech Hub"
            className="w-80 mx-auto"
          />
        </div>

        <div>
          <span className="text-blue-600 font-semibold uppercase">
            About SeeFuture Tech Hub
          </span>

          <h2 className="text-4xl font-bold mt-4 text-gray-900">
            Empowering Innovation Through Technology
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            SeeFuture Tech Hub is a technology company dedicated to helping
            businesses, organizations, startups, and individuals succeed in the
            digital world. We deliver modern software, websites, mobile
            applications, cybersecurity solutions, AI systems, and professional
            technology training.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-blue-600" />
              <span>Professional Software Development</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-blue-600" />
              <span>Cybersecurity & Digital Protection</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-blue-600" />
              <span>Artificial Intelligence Solutions</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-blue-600" />
              <span>Technology Training & Consultancy</span>
            </div>
          </div>

          <button className="mt-10 bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}

export default AboutPreview;
