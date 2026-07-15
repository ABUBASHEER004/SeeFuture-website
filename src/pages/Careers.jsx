import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaUsers,
  FaGraduationCap,
  FaGlobeAfrica,
  FaHeart,
  FaRocket,
} from "react-icons/fa";

const jobs = [
  {
    title: "Frontend React Developer",
    type: "Full Time",
    location: "Kaduna, Nigeria / Remote",
    description:
      "Build modern, responsive web applications using React, Tailwind CSS, and modern JavaScript.",
  },
  {
    title: "Flutter Mobile Developer",
    type: "Full Time",
    location: "Kaduna, Nigeria / Remote",
    description:
      "Develop high-quality Android and iOS applications using Flutter and Firebase.",
  },
  {
    title: "Cybersecurity Analyst",
    type: "Full Time",
    location: "Kaduna, Nigeria",
    description:
      "Help secure digital systems, conduct security assessments, and support clients with cybersecurity solutions.",
  },
];

const benefits = [
  {
    icon: <FaLaptopCode className="text-4xl text-blue-700" />,
    title: "Modern Technologies",
    text: "Work with React, Flutter, AI, Cloud Computing, and Cybersecurity tools.",
  },
  {
    icon: <FaUsers className="text-4xl text-blue-700" />,
    title: "Great Team",
    text: "Collaborate with talented professionals in a supportive environment.",
  },
  {
    icon: <FaGraduationCap className="text-4xl text-blue-700" />,
    title: "Continuous Learning",
    text: "Access regular training, mentorship, and career development opportunities.",
  },
  {
    icon: <FaGlobeAfrica className="text-4xl text-blue-700" />,
    title: "Real Impact",
    text: "Build solutions that serve businesses, schools, and communities across Africa.",
  },
];

function Careers() {
  return (
    <>
      <SEO
        title="Careers | SeeFuture Tech Hub"
        description="Join SeeFuture Tech Hub and build innovative software, mobile applications, AI solutions, cloud platforms, and cybersecurity systems."
        keywords="Careers, Jobs, React Developer, Flutter Developer, Cybersecurity Jobs, Kaduna, Nigeria"
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            Build Your Career With Us
          </h1>

          <p className="mt-6 text-lg text-blue-100 max-w-3xl mx-auto">
            At SeeFuture Tech Hub, we believe talented people create amazing
            technology. Join us to build innovative digital solutions that make
            a difference.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">
            <h2 className="text-4xl font-bold text-blue-700">
              Why Work With Us?
            </h2>

            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              We invest in our people by providing opportunities to learn,
              innovate, and grow while working on exciting technology projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-xl transition"
              >
                <div className="flex justify-center">
                  {benefit.icon}
                </div>

                <h3 className="text-xl font-bold mt-5">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-blue-700">
            Current Openings
          </h2>

          <div className="mt-12 space-y-8">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-blue-700">
                  {job.title}
                </h3>

                <p className="mt-2 text-gray-600">
                  <strong>Employment:</strong> {job.type}
                </p>

                <p className="text-gray-600">
                  <strong>Location:</strong> {job.location}
                </p>

                <p className="mt-4 text-gray-700">
                  {job.description}
                </p>

               <Link
  to="/contact"
  className="inline-flex items-center justify-center mt-6 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
>
  Apply Now
</Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <FaHeart className="mx-auto text-5xl mb-6" />

          <h2 className="text-4xl font-bold">
            Don't See a Suitable Role?
          </h2>

          <p className="mt-6 text-lg text-blue-100">
            We're always looking for passionate and talented individuals.
            Send us your CV and we'll contact you when a suitable opportunity
            becomes available.
          </p>

          <Link
  to="/contact"
  className="inline-flex items-center justify-center gap-3 mt-8 border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition duration-300"
>
  <FaRocket />
  Send Your CV
</Link>

<select
  name="subject"
  className="w-full border rounded-lg px-4 py-3"
  required
>
  <option value="">Select Subject</option>
  <option value="Project Request">Project Request</option>
  <option value="General Enquiry">General Enquiry</option>
  <option value="Job Application">Job Application</option>
  <option value="Training Enquiry">Training Enquiry</option>
</select>

        </div>
      </section>
    </>
  );
}

export default Careers;
