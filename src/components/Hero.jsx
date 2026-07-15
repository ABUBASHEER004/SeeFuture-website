import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaLaptopCode,
  FaShieldAlt,
  FaRobot,
  FaArrowRight,
} from "react-icons/fa";

function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold mb-8">
              <FaCheckCircle className="text-cyan-300" />
              Welcome to SeeFuture Tech Hub
            </span>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight">
              Technology That{" "}
              <span className="text-cyan-300">
                Transforms Ideas
              </span>{" "}
              Into Reality
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-3xl mx-auto text-center text-lg md:text-xl leading-relaxed text-blue-100">
  We build professional websites, mobile applications, cybersecurity
  solutions, artificial intelligence systems, cloud platforms, and innovative
  digital products that help businesses, organizations, and startups grow
  with confidence.
</p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <Link
                to="/contact"
                 className="inline-flex items-center justify-center border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition duration-300"
              >
                Start Your Project
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition duration-300"
              >
                Explore Services
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 border-2 border-cyan-300 text-cyan-300 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-300 hover:text-blue-900 transition duration-300"
              >
                View Portfolio
                <FaArrowRight />
              </Link>

            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">

              <div className="flex items-center justify-center gap-3">
                <FaLaptopCode className="text-cyan-300 text-2xl" />
                <span className="text-blue-100">
                  Software Development
                </span>
              </div>

              <div className="flex items-center justify-center gap-3">
                <FaShieldAlt className="text-cyan-300 text-2xl" />
                <span className="text-blue-100">
                  Cybersecurity
                </span>
              </div>

              <div className="flex items-center justify-center gap-3">
                <FaRobot className="text-cyan-300 text-2xl" />
                <span className="text-blue-100">
                  Artificial Intelligence
                </span>
              </div>

            </div>

          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 flex justify-center"
          >
            <motion.img
              src="/logo.png"
              alt="SeeFuture Tech Hub Logo"
              className="w-72 md:w-96 lg:w-[430px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition p-8 text-center">
              <h2 className="text-4xl font-bold text-blue-700">
                Web
              </h2>
              <p className="mt-3 text-gray-600 leading-7">
                Professional Website Development
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition p-8 text-center">
              <h2 className="text-4xl font-bold text-blue-700">
                Apps
              </h2>
              <p className="mt-3 text-gray-600 leading-7">
                Android & iOS Applications
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition p-8 text-center">
              <h2 className="text-4xl font-bold text-blue-700">
                AI
              </h2>
              <p className="mt-3 text-gray-600 leading-7">
                Artificial Intelligence Solutions
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition p-8 text-center">
              <h2 className="text-4xl font-bold text-blue-700">
                Cloud
              </h2>
              <p className="mt-3 text-gray-600 leading-7">
                Secure Cloud Infrastructure
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default Hero;
