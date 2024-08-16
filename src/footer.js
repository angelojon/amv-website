import React from "react";

function Footer() {
  return (
    <footer className="bg-black opacity-9 text-white py-16">
      <div className="inter container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 px-4">
        <div className="flex justify-center md:justify-start items-center w-full md:w-auto">
          <img
            src="/photos/amv_logo_white.png"
            alt="Logo"
            className="h-80 w-80 object-contain min-w-[200px]"
          />
        </div>
        <div className="text-center w-full md:w-auto">
          <h3 className="text-gray-400 text-s mb-4 tracking-widest">
            FOLLOW US
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.facebook.com/amveventsmanagement"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/amv.eventsandadvertising/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center w-full md:w-auto">
          <h3 className="text-gray-400 text-s mb-4 tracking-widest">
            GET IN TOUCH
          </h3>
          <p>
            <a
              href="mailto:inquiries@amveventsph.com"
              className="hover:underline"
            >
              inquiries@amveventsph.com
            </a>
          </p>
          <p>
            <a href="tel:1234567890" className="hover:underline">
              (02) 783-2351
            </a>
          </p>
          <p>Valenzuela City, Philippines</p>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-400">
        © AMV Events Management. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
