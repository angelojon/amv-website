import React from "react";

const ContactUs = () => (
  <div className="mx-auto py-8 pt-20">
    <div className="px-8 py-24 mb-8 flex flex-col justify-center items-center">
      <div className="text-center">
        <p className="inter tracking-widest text-gray-700 font-medium text-xs">
          CONTACT US
        </p>
        <p className="playfair font-medium text-3xl w-full text-wrap text-center mt-4">
          Thank you for your interest in AMV Events. We’re excited to bring your
          dream events to life.
        </p>
      </div>
      <div className="w-px bg-gray-700 min-h-16 mt-4">
        {/* vertical line */}
      </div>
      <div className="text-wrap text-center mt-4">
        <p className="playfair font-bold text-2xl">Get in touch.</p>
        <p className="inter mt-6 tracking-widest text-gray-700 text-base">
          (02) 783-2351.
        </p>
        <p className="inter tracking-widest text-gray-700 text-base">
          <a
            href="mailto:inquiries@amveventsph.com"
            className="text-gray-700 hover:underline"
          >
            inquiries@amveventsph.com
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default ContactUs;
