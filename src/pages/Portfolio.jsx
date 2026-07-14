import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
} from "react-icons/fa";

function Contact() {
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

            <form className="mt-8 space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg px-4 py-3"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-3"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-lg px-4 py-3"
              />

              <input
                type="text"
                placeholder="Company / Organization"
                className="w-full border rounded-lg px-4 py-3"
              />

              <textarea
                rows="6"
                placeholder="Tell us about your project..."
                className="w-full border rounded-lg px-4 py-3"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg transition"
              >
                Send Message
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

      {/* Map Placeholder */}
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
