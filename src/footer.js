import React from "react";

function Footer() {
  return (
    <footer className="bg-black opacity-9 text-white py-16">
      <div className="inter container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12 px-40">
        <div className="flex justify-center md:justify-start items-center">
          <img
            src="/photos/amv_logo_white.png"
            alt="Logo"
            className="h-40 w-40 md:h-80 md:w-80"
          />
        </div>
        <div className="text-center md:text-left">
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
        <div className="text-center md:text-left">
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
    </footer>
  );
}

export default Footer;
