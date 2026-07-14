import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaLaptopCode,
  FaShieldAlt,
  FaRobot,
} from "react-icons/fa";

function Hero() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 bg-white/20 px-5 py-2 rounded-full text-sm font-medium mb-6">
              <FaCheckCircle />
              Welcome to SeeFuture Tech Hub
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Technology That{" "}
              <span className="text-cyan-300">
                Transforms Ideas
              </span>{" "}
              Into Reality
            </h1>

            <p className="mt-8 text-lg md:text-xl text-blue-100 leading-8 max-w-xl mx-auto lg:mx-0">
              We build modern websites, mobile applications, cybersecurity
              solutions, artificial intelligence systems, cloud platforms,
              and digital products that help businesses grow confidently.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                to="/contact"
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-gray-100 hover:scale-105 transition"
              >
                Start Your Project
              </Link>

              <Link
                to="/services"
                className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
              >
                Explore Services
              </Link>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">

              <div className="flex items-center gap-3">
                <FaLaptopCode className="text-cyan-300 text-2xl" />
                <span>Software Development</span>
              </div>

              <div className="flex items-center gap-3">
                <FaShieldAlt className="text-cyan-300 text-2xl" />
                <span>Cybersecurity</span>
              </div>

              <div className="flex items-center gap-3">
                <FaRobot className="text-cyan-300 text-2xl" />
                <span>Artificial Intelligence</span>
              </div>

            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 flex justify-center"
          >
            <motion.img
              src="/logo.png"
              alt="SeeFuture Tech Hub Logo"
              className="w-72 md:w-96 lg:w-[420px] drop-shadow-2xl"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

        </div>
      </section>

      {/* Company Highlights */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

            <div className="bg-gray-50 rounded-xl shadow-sm p-8">
              <h2 className="text-4xl font-bold text-blue-700">Web</h2>
              <p className="mt-2 text-gray-600">
                Development Solutions
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-sm p-8">
              <h2 className="text-4xl font-bold text-blue-700">Apps</h2>
              <p className="mt-2 text-gray-600">
                Mobile Development
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-sm p-8">
              <h2 className="text-4xl font-bold text-blue-700">AI</h2>
              <p className="mt-2 text-gray-600">
                Smart Automation
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-sm p-8">
              <h2 className="text-4xl font-bold text-blue-700">Cloud</h2>
              <p className="mt-2 text-gray-600">
                Secure Infrastructure
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default Hero;
