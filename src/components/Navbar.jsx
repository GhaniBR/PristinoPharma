import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../images/logo-removebg-preview.png";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="relative">
      <nav
        className="shadow-sm px-6 py-4"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <div className="flex items-center space-x-3">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-60 h-70 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isActive("/") ? "text-gray-600" : "text-gray-600"
              } hover:text-pink-800 font-medium transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/otc"
              className={`${
                isActive("/otc") ? "text-pink-800" : "text-gray-600"
              } hover:text-pink-800 font-medium transition-colors`}
            >
              OTC
            </Link>
            <Link
              to="/gynac"
              className={`${
                isActive("/gynac") ? "text-pink-800" : "text-gray-600"
              } hover:text-pink-800 font-medium transition-colors`}
            >
              Gynac
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive("/contact") ? "text-pink-800" : "text-gray-600"
              } hover:text-pink-800 font-medium transition-colors`}
            >
              Contact
            </Link>
            <Link
              to="/about"
              className={`${
                isActive("/about") ? "text-pink-800" : "text-gray-600"
              } hover:text-pink-800 font-medium transition-colors`}
            >
              About
            </Link>
            <Link
              to="/careers"
              className={`${
                isActive("/careers") ? "text-pink-800" : "text-gray-600"
              } hover:text-pink-800 font-medium transition-colors`}
            >
              Career
            </Link>
            <Link
              to="/blogs"
              className={`${
                isActive("/blogs") ? "text-pink-800" : "text-gray-600"
              } hover:text-pink-800 font-medium transition-colors`}
            >
              Blog
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
