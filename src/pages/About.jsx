function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            About SeeFuture Tech Hub
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100">
            We help businesses, startups, educational institutions, and
            organizations embrace digital transformation through innovative
            technology solutions.
          </p>

        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <img
              src="/logo.png"
              alt="SeeFuture Tech Hub"
              className="w-80 mx-auto"
            />
          </div>

          <div>

            <h2 className="text-4xl font-bold text-blue-700">
              Who We Are
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              SeeFuture Tech Hub is a forward-thinking technology company
              committed to delivering high-quality digital solutions.
              Our expertise includes software development, web applications,
              mobile applications, artificial intelligence, cloud computing,
              cybersecurity, IT consulting, and professional technology
              training.
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              We believe technology should solve real-world problems,
              improve productivity, and create opportunities for individuals
              and businesses.
            </p>

          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-xl shadow-lg p-10">
            <h3 className="text-3xl font-bold text-blue-700">
              Our Mission
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
              To empower businesses and communities with innovative,
              reliable, and affordable technology solutions that drive
              growth and long-term success.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-10">
            <h3 className="text-3xl font-bold text-blue-700">
              Our Vision
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
              To become one of Africa's leading technology hubs,
              recognized for innovation, excellence, and meaningful
              digital transformation.
            </p>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-blue-700">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            {[
              "Innovation",
              "Integrity",
              "Professionalism",
              "Customer Success",
            ].map((value) => (
              <div
                key={value}
                className="bg-white shadow-md rounded-xl p-8 text-center hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-semibold text-blue-700">
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
