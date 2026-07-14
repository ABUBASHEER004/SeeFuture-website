import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="text-center">

        <h1 className="text-8xl font-bold text-blue-700">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-6">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-600">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-blue-700 text-white px-8 py-4 rounded-lg"
        >
          Back Home
        </Link>

      </div>

    </div>
  );
}

export default NotFound;
