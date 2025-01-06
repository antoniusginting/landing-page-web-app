import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="text-cyan-400 py-4 px-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Web App</h1>

        {/* Hamburger Menu Button */}
        <button
          className="sm:hidden text-cyan-200   text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Navbar Menu */}
        <ul
          className={`sm:flex gap-6 text-lg ${menuOpen ? "block" : "hidden"} sm:block`}
        >
          <li>
            <Link to="/" className="hover:text-cyan-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/product" className="hover:text-cyan-600">
              Product
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-cyan-600">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
