import {
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Company */}
        <div>

          <img
            src="/logo.png"
            alt="SeeFuture Tech Hub"
            className="w-24 mb-5"
          />

          <h2 className="text-2xl font-bold text-white">
            SeeFuture Tech Hub
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Empowering businesses and individuals through innovative technology,
            software development, cybersecurity, AI, cloud solutions and digital
            transformation.
          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-white text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3">

            <li><Link to="/" className="hover:text-cyan-400">Home</Link></li>

            <li><Link to="/about" className="hover:text-cyan-400">About</Link></li>

            <li><Link to="/services" className="hover:text-cyan-400">Services</Link></li>

            <li><Link to="/portfolio" className="hover:text-cyan-400">Portfolio</Link></li>

            <li><Link to="/academy" className="hover:text-cyan-400">Academy</Link></li>

            <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>

          </ul>

        </div>

        {/* Services */}
        <div>

          <h3 className="text-white text-xl font-semibold mb-5">
            Services
          </h3>

          <ul className="space-y-3">

            <li>Website Development</li>

            <li>Mobile Apps</li>

            <li>Cybersecurity</li>

            <li>Artificial Intelligence</li>

            <li>Cloud Solutions</li>

            <li>Tech Training</li>

          </ul>
         <p className="mt-6 text-lg leading-8 text-gray-600">
  Registered with the Corporate Affairs Commission (CAC), Nigeria
  <br />
  Registration No. 9680560
</p>

        </div>

        {/* Contact */}
        <div>

          <h3 className="text-white text-xl font-semibold mb-5">
            Contact
          </h3>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <FaEnvelope />
              <span>seefuture004@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone />
              <span>+234 813 026 2575</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt />
              <span>Kaduna, Nigeria</span>
            </div>

            <div className="flex items-center gap-3 mt-5">

             <a
  href="https://www.facebook.com/GidaServ"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300"
>
  <FaFacebook className="text-2xl" />
  <span>Gida Serv</span>
</a>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-700">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">

          <p>
            © {year} SeeFuture Tech Hub. All rights reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="mt-4 md:mt-0 bg-cyan-600 hover:bg-cyan-700 p-3 rounded-full transition"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;