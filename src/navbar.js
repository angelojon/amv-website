import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Reload the page to reset any active section highlighting
    window.location.href = "/";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white h-20 shadow-md" : "bg-white h-24"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-20" : "h-24"
        }`}
      >
        <a
          href="/"
          className="flex-shrink-0 cursor-pointer"
          onClick={handleScrollToTop}
        >
          <img
            src="/photos/amv_logo_black.png"
            alt="Logo"
            className="h-40 w-40"
          />
        </a>
        <div className="inter tracking-wider hidden md:flex md:items-center md:space-x-4 text-sm">
          <a
            href="#about"
            className="hover:text-gray-500 px-3 py-2 rounded-md text-m font-medium"
          >
            About Us
          </a>
          <a
            href="#services"
            className="hover:text-gray-500 px-3 py-2 rounded-md text-m font-medium"
          >
            Services
          </a>

          <a
            href="#clients"
            className="hover:text-gray-500 px-3 py-2 rounded-md text-m font-medium"
          >
            Clients
          </a>
          <a
            href="#contact"
            className="hover:text-gray-500 px-3 py-2 rounded-md text-m font-medium"
          >
            Contact Us
          </a>
        </div>
        <div className="flex-shrink-0 hidden md:flex items-center gap-4">
          <a
            href="https://www.facebook.com/amveventsmanagement"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/amv.eventsandadvertising/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
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
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          <svg
            className="h-6 w-6"
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
        </button>
        <div className="inter text-sm mt-16 px-4">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block text-black py-2 transition-colors duration-300 hover:text-pink-300"
          >
            About Us
          </a>
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="block text-black py-2 transition-colors duration-300 hover:text-pink-300"
          >
            Services
          </a>
          <a
            href="#clients"
            onClick={() => setIsOpen(false)}
            className="block text-black py-2 transition-colors duration-300 hover:text-pink-300"
          >
            Clients
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-black py-2 transition-colors duration-300 hover:text-pink-300"
          >
            Contact Us
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-black py-2 transition-colors duration-300 hover:text-pink-300"
          >
            Call Us: (02) 783-2351
          </a>
          <div className="flex items-center justify-center mt-6">
            <a
              href="https://www.facebook.com/amveventsmanagement"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black mx-2 transition-colors duration-300 hover:text-gray-500"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/amv.eventsandadvertising/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black mx-2 transition-colors duration-300 hover:text-gray-500"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
