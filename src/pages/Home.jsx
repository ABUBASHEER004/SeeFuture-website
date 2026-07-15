import SEO from "../components/SEO";

import Hero from "../components/Hero";
import TrustedSection from "../components/TrustedSection";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Stats from "../components/Stats";
import AboutPreview from "../components/AboutPreview";
import PortfolioPreview from "../components/PortfolioPreview";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import FAQ from "../components/FAQ";

function Home() {
  return (
    <>
      <SEO
        title="SeeFuture Tech Hub | Software Development, AI & Cybersecurity"
        description="SeeFuture Tech Hub provides professional website development, mobile app development, cybersecurity, artificial intelligence, cloud computing, and technology training for businesses and individuals."
        keywords="SeeFuture Tech Hub, software development, web development, mobile app development, Flutter, React, AI, cybersecurity, cloud computing, technology training, Kaduna, Nigeria"
      />

      {/* Hero */}
      <Hero />

      {/* Trusted By */}
      <div className="py-16">
        <TrustedSection />
      </div>

      {/* Services */}
      <div className="py-20">
        <Services />
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-gray-50">
        <WhyChooseUs />
      </div>

      {/* CAC Registration */}
      <section className="bg-gradient-to-r from-blue-800 to-cyan-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <span className="inline-block bg-white/20 px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
            Registered Business
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
            Officially Registered in Nigeria
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-blue-100">
            <strong>SEEFUTURE TECH HUB</strong> is officially registered with
            the Corporate Affairs Commission (CAC) of Nigeria. Our registration
            reflects our commitment to professionalism, transparency, and
            delivering trusted technology solutions to businesses and
            organizations.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6">

            <div className="bg-white/10 rounded-xl px-8 py-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold">
                Registration Number
              </h3>

              <p className="mt-2 text-2xl font-bold">
                9680560
              </p>
            </div>

            <div className="bg-white/10 rounded-xl px-8 py-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold">
                Location
              </h3>

              <p className="mt-2 text-2xl font-bold">
                Kaduna, Nigeria
              </p>
            </div>

            <div className="bg-white/10 rounded-xl px-8 py-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold">
                Status
              </h3>

              <p className="mt-2 text-2xl font-bold">
                Registered ✓
              </p>
            </div>

          </div>

        <a
  href="/cac-certificate.png"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center mt-12 bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-blue-800 transition duration-300"
>
  View CAC Certificate
</a>

        </div>
      </section>

      {/* Statistics */}
      <div className="py-20">
        <Stats />
      </div>

      {/* About */}
      <div className="py-20 bg-gray-50">
        <AboutPreview />
      </div>

      {/* Portfolio */}
      <div className="py-20">
        <PortfolioPreview />
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gray-50">
        <Testimonials />
      </div>

      {/* Newsletter */}
      <div className="py-20">
        <Newsletter />
      </div>

      {/* FAQ */}
      <div className="py-20 bg-gray-50">
        <FAQ />
      </div>
    </>
  );
}

export default Home;
