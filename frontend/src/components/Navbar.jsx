import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-cyan-400 tracking-wide">
          Byteblog
        </h1>

        {/* Menu */}
        <ul className="flex space-x-6 text-gray-300 font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-cyan-400 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className="hover:text-purple-400 transition duration-200"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="hover:text-pink-500 transition duration-200"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="hover:text-green-400 transition duration-200"
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="bg-cyan-400 text-gray-900 px-4 py-2 rounded-lg shadow-md hover:bg-cyan-300 transition"
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
