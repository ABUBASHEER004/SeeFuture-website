function Newsletter() {
  return (
    <section className="bg-blue-700 text-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold">
          Stay Updated
        </h2>

        <p className="mt-6 text-blue-100">
          Subscribe to receive updates about new courses, services,
          events, and technology insights.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-4 rounded-lg text-black w-full md:w-96"
          />

          <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100">
            Subscribe
          </button>

        </div>

      </div>
    </section>
  );
}

export default Newsletter;
