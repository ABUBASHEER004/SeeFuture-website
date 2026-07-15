import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div className="flex justify-center">
          <img
            src="/logo.png"
            alt="SeeFuture Tech Hub"
            className="w-80 md:w-96 drop-shadow-xl"
          />
        </div>

        {/* Right Side */}
        <div>

          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            About SeeFuture Tech Hub
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 leading-tight">
            Empowering Innovation Through Technology
          </h2>

          <p className="mt-6 text-gray-600 leading-8 text-lg">
            SeeFuture Tech Hub is a technology company dedicated to helping
            businesses, organizations, startups, and individuals succeed in the
            digital world. We deliver modern software, websites, mobile
            applications, cybersecurity solutions, artificial intelligence,
            cloud technologies, and professional technology training.
          </p>

          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-blue-600 text-xl" />
              <span>Professional Software Development</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-blue-600 text-xl" />
              <span>Cybersecurity & Digital Protection</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-blue-600 text-xl" />
              <span>Artificial Intelligence Solutions</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-blue-600 text-xl" />
              <span>Technology Training & Consultancy</span>
            </div>

          </div>

          {/* Learn More Button */}
          <div className="mt-10">
            <Link
              to="/about"
              className="inline-flex items-center bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
            >
              Learn More
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutPreview;
