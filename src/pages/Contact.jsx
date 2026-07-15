import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SEO from "../components/SEO";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
} from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("✅ Thank you! Your message has been sent successfully.");
        form.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("❌ Unable to send your message. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <SEO
        title="Contact SeeFuture Tech Hub | Get in Touch"
        description="Contact SeeFuture Tech Hub for website development, mobile app development, AI solutions, cybersecurity, cloud computing, technology consulting and training."
        keywords="Contact SeeFuture Tech Hub, Kaduna, Nigeria, Software Company, Website Development, Mobile Apps, AI, Cybersecurity"
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Contact Us
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-blue-100">
            We'd love to discuss your next project, answer your questions,
            or explore how SeeFuture Tech Hub can help your business grow.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">

            <h2 className="text-3xl font-bold text-blue-700">
              Send Us a Message
            </h2>

            <p className="mt-4 text-gray-600 leading-8">
              Complete the form below and we'll respond as soon as possible.
            </p>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-8 space-y-5"
            >

              {/* Hidden Email Recipient */}
              <input
                type="hidden"
                name="to_email"
                value="seefuture004@gmail.com"
              />

              <input
                type="text"
                name="from_name"
                placeholder="Full Name"
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 outline-none transition"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Email Address"
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 outline-none transition"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 outline-none transition"
              />

              <input
                type="text"
                name="company"
                placeholder="Company / Organization"
                className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 outline-none transition"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Tell us about your project..."
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 outline-none transition resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className={`w-full rounded-xl py-4 font-semibold text-white transition ${
                  loading
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-blue-700 hover:bg-blue-800"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

          {/* Contact Information */}
          <div>

            <h2 className="text-3xl font-bold text-blue-700">
              Contact Information
            </h2>

            <p className="mt-4 text-gray-600 leading-8">
              Reach us using any of the contact details below.
            </p>

            <div className="mt-10 space-y-8">

              <div className="flex gap-5">
                <FaEnvelope className="text-blue-700 text-2xl mt-1" />

                <div>
                  <h3 className="font-bold text-lg">Email</h3>

                  <a
                    href="mailto:seefuture004@gmail.com"
                    className="text-gray-600 hover:text-blue-700 transition"
                  >
                    seefuture004@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <FaPhone className="text-blue-700 text-2xl mt-1" />

                <div>
                  <h3 className="font-bold text-lg">Phone</h3>

                  <a
                    href="tel:+2348130262575"
                    className="text-gray-600 hover:text-blue-700 transition"
                  >
                    +234 813 026 2575
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <FaMapMarkerAlt className="text-blue-700 text-2xl mt-1" />

                <div>
                  <h3 className="font-bold text-lg">Office</h3>

                  <p className="text-gray-600">
                    Kaduna, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <FaFacebook className="text-blue-700 text-2xl mt-1" />

                <div>
                  <h3 className="font-bold text-lg">Facebook</h3>

                  <a
                    href="https://facebook.com/GidaServ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-700 transition"
                  >
                    @Gida Serv
                  </a>
                </div>
              </div>

            </div>

            {/* Office Hours */}
            <div className="mt-12 bg-white rounded-3xl shadow-xl p-8">

              <h3 className="text-2xl font-bold text-blue-700">
                Office Hours
              </h3>

              <div className="mt-6 space-y-3 leading-8 text-gray-700">
                <p><strong>Monday – Friday:</strong> 8:00 AM – 5:00 PM</p>
                <p><strong>Saturday:</strong> 9:00 AM – 2:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Google Map */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-blue-700">
            Our Location
          </h2>

          <p className="mt-4 text-center text-gray-600">
            Visit SeeFuture Tech Hub in Kaduna, Nigeria.
          </p>

          <div className="mt-10 h-[450px] rounded-3xl overflow-hidden shadow-xl">
            <iframe
              title="SeeFuture Tech Hub Location"
              src="https://www.google.com/maps?q=Kaduna,Nigeria&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>

        </div>
      </section>
    </>
  );
}

export default Contact;