const testimonials = [
  {
    name: "Future Client",
    role: "Business Owner",
    message:
      "SeeFuture Tech Hub delivered a professional website that exceeded our expectations.",
  },
  {
    name: "Training Participant",
    role: "Student",
    message:
      "The practical training helped me gain valuable skills in modern software development.",
  },
  {
    name: "Organization Representative",
    role: "NGO",
    message:
      "Their professionalism and technical expertise made our project a success.",
  },
];

function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-700">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-gray-50 rounded-xl shadow-md p-8"
            >
              <p className="italic text-gray-600">
                "{item.message}"
              </p>

              <h3 className="mt-6 font-bold text-lg">
                {item.name}
              </h3>

              <p className="text-blue-700">
                {item.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
