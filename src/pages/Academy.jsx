import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaMobileAlt,
  FaShieldAlt,
  FaRobot,
  FaCloud,
  FaDatabase,
} from "react-icons/fa";

const courses = [
  {
    icon: <FaCode className="text-5xl text-blue-600" />,
    title: "Full Stack Web Development",
    duration: "24 Weeks",
    level: "Beginner - Advanced",
  },
  {
    icon: <FaMobileAlt className="text-5xl text-blue-600" />,
    title: "Flutter Mobile Development",
    duration: "16 Weeks",
    level: "Beginner",
  },
  {
    icon: <FaShieldAlt className="text-5xl text-blue-600" />,
    title: "Cybersecurity",
    duration: "20 Weeks",
    level: "Beginner",
  },
  {
    icon: <FaRobot className="text-5xl text-blue-600" />,
    title: "Artificial Intelligence",
    duration: "24 Weeks",
    level: "Beginner",
  },
  {
    icon: <FaCloud className="text-5xl text-blue-600" />,
    title: "Cloud Computing",
    duration: "24 Weeks",
    level: "Beginner",
  },
  {
    icon: <FaDatabase className="text-5xl text-blue-600" />,
    title: "Database Management",
    duration: "16 Weeks",
    level: "Beginner",
  },
];

function Academy() {
  return (
    <>
      <SEO
        title="SeeFuture Tech Academy | Learn Software Development, AI & Cybersecurity"
        description="Join SeeFuture Tech Academy to learn Full Stack Web Development, Flutter, Cybersecurity, Artificial Intelligence, Cloud Computing, and Database Management through practical, project-based training."
        keywords="SeeFuture Tech Academy, Technology Training, Flutter Course, React Course, Full Stack Development, Cybersecurity Training, AI Course, Cloud Computing, Database Management, Kaduna, Nigeria"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            SeeFuture Tech Academy
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-blue-100 text-lg leading-8">
            Learn today's most in-demand technology skills through practical,
            project-based training led by experienced instructors.
          </p>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">
            <h2 className="text-4xl font-bold text-blue-700">
              Available Courses
            </h2>

            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Gain practical skills that prepare you for careers in software
              engineering, cybersecurity, artificial intelligence, cloud
              computing, and modern application development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {courses.map((course) => (
              <div
                key={course.title}
                className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              >
                <div className="flex justify-center">
                  {course.icon}
                </div>

                <h2 className="mt-6 text-2xl font-bold text-center">
                  {course.title}
                </h2>

                <div className="mt-6 space-y-2 text-gray-600">
                  <p>
                    <strong>Duration:</strong> {course.duration}
                  </p>

                  <p>
                    <strong>Level:</strong> {course.level}
                  </p>
                </div>

                <Link
  to="/contact"
  className="inline-flex items-center justify-center mt-6 bg-blue-700 text-white px-5 py-3 rounded-lg hover:bg-blue-800 transition duration-300"
>
                  Enroll Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Ready to Start Your Tech Journey?
          </h2>

          <p className="mt-6 text-lg text-blue-100">
            Join hundreds of learners building practical skills in software
            development, cybersecurity, AI, cloud computing, and mobile app
            development.
          </p>

          <Link
  to="/contact"
  className="inline-flex items-center justify-center mt-6 bg-blue-700 text-white px-5 py-3 rounded-lg hover:bg-blue-800 transition duration-300"
>
            Register Today
          </Link>
        </div>
      </section>
    </>
  );
}

export default Academy;
