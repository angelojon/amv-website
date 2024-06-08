import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
        <div className="flex justify-center md:justify-start items-center">
          <img src="path/to/your/logo.png" alt="Logo" className="h-16" />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-gray-400 text-s mb-4 tracking-widest">
            FOLLOW US
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-gray-400 text-s mb-4 tracking-widest">
            GET IN TOUCH
          </h3>
          <p>
            <a
              href="mailto:inquiries@amveventsph.com"
              className="hover:underline"
            >
              contact@yourwebsite.com
            </a>
          </p>
          <p>
            <a href="tel:1234567890" className="hover:underline">
              (123) 456-7890
            </a>
          </p>
          <p>Valenzuela City, Philippines</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
