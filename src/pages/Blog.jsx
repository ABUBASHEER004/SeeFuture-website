import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import {
  FaSearch,
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
} from "react-icons/fa";

const posts = [
  {
    id: 1,
    title: "Why Every Business Needs a Professional Website in 2026",
    category: "Web Development",
    author: "SeeFuture Tech Hub",
    date: "July 14, 2026",
    image: "/blog/web-development.jpg",
    link: "/contact",
    excerpt:
      "A professional website builds trust, attracts customers, and helps businesses grow in today's digital economy.",
  },
  {
    id: 2,
    title: "The Future of Artificial Intelligence in Africa",
    category: "Artificial Intelligence",
    author: "SeeFuture Tech Hub",
    date: "July 12, 2026",
    image: "/blog/ai.jpg",
    link: "/contact",
    excerpt:
      "Artificial Intelligence is transforming education, healthcare, finance, agriculture, and many other industries across Africa.",
  },
  {
    id: 3,
    title: "Top Cybersecurity Tips for Small Businesses",
    category: "Cybersecurity",
    author: "SeeFuture Tech Hub",
    date: "July 10, 2026",
    image: "/blog/cybersecurity.jpg",
    link: "/contact",
    excerpt:
      "Learn practical cybersecurity strategies that protect your business from modern cyber threats.",
  },
  {
    id: 4,
    title: "Flutter vs React Native: Which Should You Choose?",
    category: "Mobile Development",
    author: "SeeFuture Tech Hub",
    date: "July 8, 2026",
    image: "/blog/flutter.jpg",
    link: "/contact",
    excerpt:
      "A comparison between Flutter and React Native to help businesses choose the right mobile development framework.",
  },
];

function Blog() {
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <SEO
        title="Technology Blog | SeeFuture Tech Hub"
        description="Read articles on software development, artificial intelligence, cybersecurity, cloud computing, mobile apps, and digital transformation."
        keywords="Technology Blog, Software Development, AI, Cybersecurity, Flutter, React, Cloud Computing, Nigeria"
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            SeeFuture Tech Blog
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100">
            Insights, tutorials, industry trends, and technology news to help
            individuals and businesses stay ahead.
          </p>

        </div>
      </section>

      {/* Search */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-6 relative">

          <FaSearch className="absolute left-10 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

        </div>
      </section>

      {/* Featured */}
      {posts.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden lg:grid lg:grid-cols-2">

              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-full object-cover"
              />

              <div className="p-10">

                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">
                  Featured Article
                </span>

                <h2 className="text-4xl font-bold mt-6">
                  {posts[0].title}
                </h2>

                <div className="flex gap-6 mt-6 text-gray-500 text-sm">

                  <div className="flex items-center gap-2">
                    <FaCalendarAlt />
                    {posts[0].date}
                  </div>

                  <div className="flex items-center gap-2">
                    <FaUser />
                    {posts[0].author}
                  </div>

                </div>

                <p className="mt-6 text-gray-600 leading-8">
                  {posts[0].excerpt}
                </p>

                <Link
  to={posts[0].link}
  className="inline-flex items-center gap-2 mt-8 bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg transition"
>
  Read More
  <FaArrowRight />
</Link>

              </div>

            </div>

          </div>
        </section>
      )}

      {/* Articles */}
      <section className="pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-blue-700 text-center">
            Latest Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {filteredPosts.length === 0 && (
  <div className="text-center py-16">
    <h3 className="text-2xl font-bold text-gray-700">
      No articles found
    </h3>

    <p className="mt-4 text-gray-500">
      Try searching with a different keyword.
    </p>
  </div>
)}

           {filteredPosts
  .filter((post) => post.id !== posts[0].id)
  .map((post) => (
    
              <div
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition"
              >

                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">

                  <span className="text-blue-700 font-semibold">
                    {post.category}
                  </span>

                  <h3 className="text-2xl font-bold mt-3">
                    {post.title}
                  </h3>

                  <p className="mt-4 text-gray-600">
                    {post.excerpt}
                  </p>

                 <Link
  to={post.link}
  className="inline-flex items-center gap-2 mt-6 text-blue-700 font-semibold hover:text-blue-900 transition"
>
  Read More
  <FaArrowRight />
</Link>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Stay Updated
          </h2>

          <p className="mt-6 text-blue-100">
            Subscribe to receive technology news, tutorials, and updates from
            SeeFuture Tech Hub.
          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">

            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-4 rounded-lg text-black w-full md:w-96"
            />

            <Link
  to="/contact"
  className="inline-flex items-center gap-2 mt-6 text-blue-700 font-semibold hover:text-blue-900 transition"
>
  Subscribe
</Link>

          </div>

        </div>
      </section>
    </>
  );
}

export default Blog;
