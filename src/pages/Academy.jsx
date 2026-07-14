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
    duration: "12 Weeks",
    level: "Beginner - Advanced",
  },
  {
    icon: <FaMobileAlt className="text-5xl text-blue-600" />,
    title: "Flutter Mobile Development",
    duration: "10 Weeks",
    level: "Intermediate",
  },
  {
    icon: <FaShieldAlt className="text-5xl text-blue-600" />,
    title: "Cybersecurity",
    duration: "8 Weeks",
    level: "Beginner",
  },
  {
    icon: <FaRobot className="text-5xl text-blue-600" />,
    title: "Artificial Intelligence",
    duration: "10 Weeks",
    level: "Intermediate",
  },
  {
    icon: <FaCloud className="text-5xl text-blue-600" />,
    title: "Cloud Computing",
    duration: "8 Weeks",
    level: "Intermediate",
  },
  {
    icon: <FaDatabase className="text-5xl text-blue-600" />,
    title: "Database Management",
    duration: "6 Weeks",
    level: "Beginner",
  },
];

function Academy() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-900 to-cyan-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            SeeFuture Tech Academy
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-blue-100 text-lg">
            Learn today's most in-demand technology skills through practical,
            project-based training.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {courses.map((course) => (
              <div
                key={course.title}
                className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition"
              >
                {course.icon}

                <h2 className="mt-6 text-2xl font-bold">
                  {course.title}
                </h2>

                <p className="mt-4">
                  <strong>Duration:</strong> {course.duration}
                </p>

                <p>
                  <strong>Level:</strong> {course.level}
                </p>

                <button className="mt-8 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
                  Enroll Now
                </button>
              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}

export default Academy;
