import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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
        alert("✅ Message sent successfully!");
        form.current.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Failed to send message. Please try again.");
        setLoading(false);
      });
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            Contact Us
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            We'd love to discuss your next project or answer any questions you
            have.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-3xl font-bold text-blue-700">
              Send us a Message
            </h2>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-8 space-y-5"
            >

              <input
                type="text"
                name="from_name"
                placeholder="Full Name"
                required
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Email Address"
                required
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="text"
                name="company"
                placeholder="Company / Organization"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Tell us about your project..."
                required
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg font-semibold text-white transition ${
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

            <div className="mt-8 space-y-8">

              <div className="flex gap-4">
                <FaEnvelope className="text-blue-700 text-2xl mt-1" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p>seefuture004@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaPhone className="text-blue-700 text-2xl mt-1" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p>+234 813 026 2575</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-blue-700 text-2xl mt-1" />
                <div>
                  <h3 className="font-bold">Office</h3>
                  <p>Kaduna, Nigeria</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaFacebook className="text-blue-700 text-2xl mt-1" />
                <div>
                  <h3 className="font-bold">Facebook</h3>
                  <p>@Gida Serv</p>
                </div>
              </div>

            </div>

            {/* Office Hours */}
            <div className="mt-12 bg-white rounded-xl shadow-lg p-8">

              <h3 className="text-2xl font-bold text-blue-700">
                Office Hours
              </h3>

              <div className="mt-6 space-y-2">
                <p>Monday – Friday: 8:00 AM – 5:00 PM</p>
                <p>Saturday: 9:00 AM – 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Google Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-blue-700">
            Our Location
          </h2>

          <div className="mt-10 h-96 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="SeeFuture Tech Hub Location"
              src="https://www.google.com/maps?q=Kaduna,Nigeria&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

        </div>
      </section>
    </>
  );
}

export default Contact;