import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../images/logo-removebg-preview.png";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkClass = (path) =>
    `${
      isActive(path) ? "text-pink-700" : "text-gray-600"
    } hover:text-pink-800 font-2xl transition-colors`;

  return (
    <div className="relative z-50">
      <nav className="shadow-sm px-6 py-3 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-36 h-15 object-contain" />
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-pink-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={navLinkClass("/")}>
              Home
            </Link>
            <Link to="/otc" className={navLinkClass("/otc")}>
              OTC
            </Link>
            <Link to="/gynac" className={navLinkClass("/gynac")}>
              Gynac
            </Link>
            <Link to="/contact" className={navLinkClass("/contact")}>
              Contact
            </Link>
            <Link to="/about" className={navLinkClass("/about")}>
              About
            </Link>
            <Link to="/careers" className={navLinkClass("/careers")}>
              Career
            </Link>
            <Link to="/blogs" className={navLinkClass("/blogs")}>
              Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0  bg-opacity-40 backdrop-blur-sm z-40"
            onClick={toggleMenu}
          ></div>

          {/* Menu Container */}
          <div className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white z-50 p-6 shadow-lg flex flex-col">
            <div className="flex justify-end mb-6">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-pink-800 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col space-y-4">
              <Link to="/" onClick={toggleMenu} className={navLinkClass("/")}>
                Home
              </Link>
              <Link
                to="/otc"
                onClick={toggleMenu}
                className={navLinkClass("/otc")}
              >
                OTC
              </Link>
              <Link
                to="/gynac"
                onClick={toggleMenu}
                className={navLinkClass("/gynac")}
              >
                Gynac
              </Link>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className={navLinkClass("/contact")}
              >
                Contact
              </Link>
              <Link
                to="/about"
                onClick={toggleMenu}
                className={navLinkClass("/about")}
              >
                About
              </Link>
              <Link
                to="/careers"
                onClick={toggleMenu}
                className={navLinkClass("/careers")}
              >
                Career
              </Link>
              <Link
                to="/blogs"
                onClick={toggleMenu}
                className={navLinkClass("/blogs")}
              >
                Blog
              </Link>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
