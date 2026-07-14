import { motion } from "framer-motion";

const stats = [
  { number: "50+", title: "Projects Completed" },
  { number: "100+", title: "Happy Clients" },
  { number: "10+", title: "Technology Services" },
  { number: "24/7", title: "Customer Support" },
];

function Stats() {
  return (
    <section className="bg-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center"
        >
          Trusted to Deliver Results
        </motion.h2>

        <p className="text-center text-blue-100 mt-4 max-w-3xl mx-auto">
          We partner with businesses, schools, startups, and organizations to
          build innovative digital solutions that create real impact.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {stats.map((stat) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h3 className="text-5xl font-bold">{stat.number}</h3>
              <p className="mt-3 text-blue-100">{stat.title}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Stats;
