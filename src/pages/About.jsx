import SEO from "../components/SEO";

function About() {
  return (
    <>
      <SEO
        title="About SeeFuture Tech Hub"
        description="Learn about SeeFuture Tech Hub, our mission, vision, values, and commitment to digital innovation."
        keywords="About SeeFuture Tech Hub, Technology Company Kaduna, Software Company Nigeria"
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="inline-block bg-white/20 px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
            About Our Company
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight">
            Building Africa's Digital Future
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-9 text-blue-100">
            We help businesses, startups, educational institutions, and
            organizations embrace digital transformation through innovative,
            secure, and scalable technology solutions.
          </p>

        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <div className="flex justify-center">
            <img
              src="/logo.png"
              alt="SeeFuture Tech Hub"
              className="w-80 md:w-96 drop-shadow-2xl"
            />
          </div>

          <div className="space-y-8">

            <h2 className="text-4xl font-bold text-blue-700">
              Who We Are
            </h2>

            <p className="text-lg leading-9 text-gray-600">
              <strong>SeeFuture Tech Hub</strong> is a forward-thinking
              technology company dedicated to delivering innovative,
              high-quality digital solutions that help organizations thrive
              in an increasingly digital world.
            </p>

            <p className="text-lg leading-9 text-gray-600">
              Our expertise spans software engineering, website development,
              mobile applications, cybersecurity, cloud computing,
              artificial intelligence, IT consulting, digital transformation,
              and professional technology training.
            </p>

            <p className="text-lg leading-9 text-gray-600">
              We believe technology should solve real-world problems,
              improve productivity, create opportunities, and positively
              impact communities across Nigeria and beyond.
            </p>

          </div>

        </div>
      </section>

      {/* CAC Registration */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-xl p-10 lg:p-14">

            <div className="flex items-center gap-5 mb-10">

              <div className="w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center text-white text-3xl">
                ✓
              </div>

              <div>

                <h2 className="text-4xl font-bold text-blue-700">
                  Registered Business
                </h2>

                <p className="text-gray-500 mt-2">
                  Corporate Affairs Commission (CAC), Nigeria
                </p>

              </div>

            </div>

            <p className="text-lg leading-9 text-gray-600">
              SeeFuture Tech Hub is officially registered with the Corporate
              Affairs Commission (CAC) of Nigeria. Our registration reflects
              our commitment to professionalism, transparency, accountability,
              and trusted technology services.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-blue-700">
                  Business Name
                </h4>

                <p className="mt-3 text-gray-600">
                  SEEFUTURE TECH HUB
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-blue-700">
                  Registration Number
                </h4>

                <p className="mt-3 text-gray-600">
                  9680560
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-blue-700">
                  Registration Date
                </h4>

                <p className="mt-3 text-gray-600">
                  14 July 2026
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-blue-700">
                  Office Location
                </h4>

                <p className="mt-3 text-gray-600">
                  Kaduna North, Kaduna State, Nigeria
                </p>
              </div>

            </div>

            <div className="mt-12">
              <a
                href="/cac-certificate.png"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition duration-300"
              >
                View CAC Certificate
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-xl transition">

            <h3 className="text-3xl font-bold text-blue-700 mb-6">
              Our Mission
            </h3>

            <p className="text-lg leading-9 text-gray-600">
              To empower businesses, organizations, and communities with
              innovative, secure, reliable, and affordable technology
              solutions that accelerate growth and long-term success.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-xl transition">

            <h3 className="text-3xl font-bold text-blue-700 mb-6">
              Our Vision
            </h3>

            <p className="text-lg leading-9 text-gray-600">
              To become one of Africa's leading technology hubs, recognized
              globally for innovation, excellence, digital transformation,
              and customer satisfaction.
            </p>

          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-blue-700">
            Our Core Values
          </h2>

          <p className="text-center text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-8">
            Everything we do is guided by values that inspire innovation,
            build trust, and create lasting impact.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {[
              "Innovation",
              "Integrity",
              "Professionalism",
              "Customer Success",
            ].map((value) => (
              <div
                key={value}
                className="bg-white rounded-2xl shadow-lg p-10 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-2xl font-bold text-blue-700">
                  {value}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>
    </>
  );
}

export default About;
