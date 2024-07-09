import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isIndexPage = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
  };

  const closeAboutDropdown = () => {
    setAboutDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeAboutDropdown();
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    if (isIndexPage) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (isIndexPage) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isIndexPage]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isIndexPage
          ? scrolled
            ? "bg-white shadow-md text-black"
            : "bg-transparent text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <img
            src="/photos/AMV_Logo_WHITE.png"
            alt="Logo"
            className="h-32 w-32"
          />
        </div>
        <div className="playfair hidden md:flex md:items-center md:space-x-4">
          <Link
            to="/"
            className="hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            Services
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleAboutDropdown}
              className="flex items-center hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
              <svg
                className="ml-1 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {aboutDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                <Link
                  to="/about/our-team"
                  onClick={closeAboutDropdown}
                  className="inter text-sm block px-4 py-2 text-black hover:text-gray-500"
                >
                  Our Team
                </Link>
                <Link
                  to="/about/why-amv"
                  onClick={closeAboutDropdown}
                  className="inter text-sm block px-4 py-2 text-black hover:text-gray-500"
                >
                  Why AMV
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/gallery"
            className="hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex-shrink-0 font-medium hidden md:block">
          02-233-4234
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className={`md:hidden ${
            isIndexPage ? "bg-transparent" : "bg-white"
          } absolute top-16 left-0 w-full`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-300 hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-300 hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <div className="relative">
              <button
                onClick={toggleAboutDropdown}
                className="flex items-center w-full text-left text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                About
                <svg
                  className="ml-1 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {aboutDropdownOpen && (
                <div className="mt-1 w-full bg-gray-700">
                  <Link
                    to="/about/our-team"
                    onClick={closeAboutDropdown}
                    className="inter text-gray-300 hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Our Team
                  </Link>
                  <Link
                    to="/about/why-amv"
                    onClick={closeAboutDropdown}
                    className="inter text-gray-300 hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Why AMV
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/gallery"
              className="text-gray-300 hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
