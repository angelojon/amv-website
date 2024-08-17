import React from "react";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import "./animate.css";

function Homepage() {
  // Hook to track if sections are in view
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: false, // Trigger animation once
    rootMargin: "10px 0px", // Adjust root margin as needed
  });

  const { ref: landingRef, inView: landingView } = useInView({
    triggerOnce: false,
    rootMargin: "0px 0px",
  });

  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: false,
    rootMargin: "50px 0px",
  });

  const { ref: clientsRef, inView: clientsInView } = useInView({
    triggerOnce: false,
    rootMargin: "-50px 0px",
  });

  return (
    <>
      {/* First section - landing page */}
      <div className="truncate scroll-smooth ">
        <div className="relative h-[100vh] w-full" ref={landingRef}>
          <div className="bg-cover bg-center h-full w-full flex items-center justify-center p-0">
            <img
              src="/photos/amv_logo.png"
              alt="AMV Logo"
              className={`w-[30rem] h-[30rem] object-cover md:w-[60rem] md:h-[60rem] lg:w-[70rem] lg:h-[70rem] ${
                landingView ? "animate__animated animate__fadeIn" : ""
              }`}
            ></img>

            {/* Overlapping containers */}
            <div className="absolute bottom-[26px] inset-x-0 flex flex-col items-center justify-center gap-4 px-4 md:flex-row md:items-center md:gap-4 lg:flex-row lg:justify-center lg:gap-8 lg:px-40 sm:flex-row sm:justify-center sm:gap-8 sm:px-12">
              <div className="border-0 bg-black rounded-2xl p-4 text-center w-full sm:w-3/4 md:w-1/2 lg:w-1/5 shadow-lg lg:mb-0 min-w-[200px]">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfs9q1G3cQ9aSMBgsz58Ycu9MXseevmJu-ibDYhKzscMTIivA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="inter text-white text-m font-semibold my-4 flex justify-center items-center">
                    <span>Send an Inquiry</span>
                    <FaArrowRight className="ml-2" />
                  </h3>
                </a>
              </div>
              <div className="hidden md:block border-0 bg-white rounded-2xl p-4  text-center w-full sm:w-3/4 md:w-1/2 lg:w-1/5 shadow-lg  lg:mb-0 min-w-[200px]">
                <h3 className="inter text-m font-semibold my-4 flex justify-center items-center">
                  <FaPhoneAlt className="mr-2" />
                  <span>Call Us: (02) 783-2351</span>
                </h3>
              </div>
              <div className="hidden md:block border-0 bg-white p-4 rounded-2xl  text-center w-full sm:w-3/4 md:w-1/2 lg:w-1/5 shadow-lg  min-w-[200px]">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfs9q1G3cQ9aSMBgsz58Ycu9MXseevmJu-ibDYhKzscMTIivA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="inter text-m font-semibold my-4 flex justify-center items-center">
                    <span>Get a Proposal</span>
                    <FaArrowRight className="ml-2" />
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Second section - about us */}
        <div
          className="w-screen flex flex-col items-center mt-32 mb-72 pt-24"
          ref={aboutRef}
          id="about"
        >
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 px-8">
            <div className="w-full md:w-6/12 flex flex-col items-center mt-12">
              <p
                className={`inter tracking-widest text-gray-700 font-medium text-s text-center ${
                  aboutInView ? "animate__animated animate__fadeInUp" : ""
                }`}
              >
                OUR PROMISE
              </p>
              <p
                className={`inter text-3xl w-full text-wrap text-center mt-4 font-semibold ${
                  aboutInView ? "animate__animated animate__fadeInUp" : ""
                }`}
              >
                EVERY EVENT BEGINS WITH A STORY.
              </p>
              {/* Vertical line */}
              <div
                className={`w-[0.05rem] bg-gray-400 h-20 my-8 ${
                  aboutInView ? "animate__animated animate__fadeIn" : ""
                }`}
              ></div>
              <div
                className={`inter text-center max-w-[800px] whitespace-normal mt-4 text-sm sm:text-xs md:text-xs lg:text-xs xl:text-base ${
                  aboutInView ? "animate__animated animate__fadeIn" : ""
                }`}
              >
                <p>
                  At AMV Events, we specialize in turning your visions into
                  realities. We're not just event planners; we're storytellers,
                  weaving narratives into every aspect of your occasion. With a
                  touch of collaborative magic, we create celebrations that are
                  both unparalleled and unforgettable.
                  <br />
                  <br />
                  Our approach is simple yet profound: we listen. We take the
                  time to understand who you are, what you aspire to, and what
                  truly matters to you. No detail is too small, no idea too big
                  – we leave no stone unturned in our quest to bring your dreams
                  to life.
                  <br />
                  <br />
                  For us, the beauty of an event lies in its intelligence – the
                  seamless integration of creativity and precision planning.
                  From the initial concept discussions to the meticulous design
                  process, every step is interconnected, ensuring a cohesive and
                  captivating experience.
                  <br />
                  <br />
                  So whether you're planning a personal celebration or a
                  corporate event, trust AMV Events to make it an occasion to
                  remember. Your dream event is within reach – let's make it a
                  reality together.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Third section - our services */}
        <div
          id="services"
          className="relative bg-cover bg-center flex flex-col justify-center items-center py-16 parallax"
          ref={servicesRef}
          style={{
            backgroundImage: "url('/photos/our-services-bg.png')",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
          {/* Dark overlay */}
          <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center">
            <div
              className={`w-full text-white mb-4 text-center ${
                servicesInView ? "animate__animated animate__fadeIn" : ""
              }`}
            >
              <p className="inter tracking-widest text-white font-medium text-s mb-2 ">
                OUR SERVICES
              </p>
              <h2 className="inter text-l sm:text-3xl lg:text-4xl font-bold mb-4 ">
                WE WILL{" "}
                <span className="text-pink-200">
                  PLAN, ORGANIZE, AND MANAGE
                </span>
                <br />
                YOUR EVENT FROM START TO FINISH
              </h2>
              <div className="flex justify-center">
                <p className="inter text-sm sm:text-sm lg:text-sm max-w-3xl whitespace-normal">
                  We offer a wide range of services to make your events
                  unforgettable. From planning and design to execution and
                  management, our team of experts will ensure every detail is
                  perfect. Whether it's a wedding, corporate event, or private
                  party, we have the expertise and creativity to bring your
                  vision to life.
                </p>
              </div>
            </div>
            {/* Horizontal line */}

            <div
              className={`w-80 border-b-2 border-white my-2 ${
                servicesInView ? "animate__animated animate__fadeIn" : ""
              }`}
            ></div>
            {/* Images grid */}
            <div className="w-full flex justify-center mt-4 gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div
                  className={`text-center ${
                    servicesInView ? "animate__animated animate__fadeIn" : ""
                  }`}
                >
                  <img
                    src="/photos/services/LAUNCHES.jpg"
                    alt="Service 1"
                    className="w-full  max-h-48 object-cover rounded-lg"
                  />
                  <p className="text-white mt-2 inter font-semibold">
                    LAUNCHES
                  </p>
                </div>
                <div
                  className={`text-center ${
                    servicesInView ? "animate__animated animate__fadeIn" : ""
                  }`}
                >
                  {" "}
                  <img
                    src="/photos/services/TRADESHOWS BOOTH MANAGEMENT EXHIBITIONS.jpg"
                    alt="Service 2"
                    className="w-full  max-h-48 object-cover rounded-lg"
                  />
                  <p className="text-white mt-2 inter font-semibold whitespace-normal">
                    TRADESHOWS | BOOTH MANAGEMENT | EXHIBITIONS
                  </p>
                </div>
                <div
                  className={`text-center ${
                    servicesInView ? "animate__animated animate__fadeIn" : ""
                  }`}
                >
                  {" "}
                  <img
                    src="/photos/services/CONFERENCES.jpg"
                    alt="Service 3"
                    className="w-full  max-h-48 object-cover rounded-lg"
                  />
                  <p className="text-white mt-2 inter font-semibold whitespace-normal">
                    CONFERENCES
                  </p>
                </div>
                <div
                  className={`text-center ${
                    servicesInView ? "animate__animated animate__fadeIn" : ""
                  }`}
                >
                  {" "}
                  <img
                    src="/photos/services/BELOW THE LINE.jpg"
                    alt="Service 4"
                    className="w-full  max-h-48 object-cover rounded-lg"
                  />
                  <p className="text-white mt-2 inter font-semibold whitespace-normal">
                    BELOW-THE-LINE-PROMOTION
                  </p>
                </div>
                <div
                  className={`text-center ${
                    servicesInView ? "animate__animated animate__fadeIn" : ""
                  }`}
                >
                  {" "}
                  <img
                    src="/photos/services/VENUE STYLING.jpg"
                    alt="Service 5"
                    className="w-full max-h-48 object-cover rounded-lg"
                  />
                  <p className="text-white mt-2 inter font-semibold whitespace-normal">
                    VENUE STYLING
                  </p>
                </div>
                <div
                  className={`text-center ${
                    servicesInView ? "animate__animated animate__fadeIn" : ""
                  }`}
                >
                  {" "}
                  <img
                    src="/photos/services/COLLATERAL DEVELOPMENT.jpg"
                    alt="Service 6"
                    className="w-full  max-h-48 object-cover rounded-lg"
                  />
                  <p className="text-white mt-2 inter font-semibold whitespace-normal">
                    COLLATERAL DEVELOPMENT
                  </p>
                </div>
                <div
                  className={`text-center ${
                    servicesInView ? "animate__animated animate__fadeIn" : ""
                  }`}
                >
                  {" "}
                  <img
                    src="/photos/services/EQUIPMENT RENTALS.jpg"
                    alt="Service 7"
                    className="w-full  max-h-48 object-cover rounded-lg"
                  />
                  <p className="text-white mt-2 inter font-semibold whitespace-normal">
                    EQUIPMENT RENTALS
                  </p>
                </div>
                <div
                  className={`text-center ${
                    servicesInView ? "animate__animated animate__fadeIn" : ""
                  }`}
                >
                  {" "}
                  <img
                    src="/photos/services/ADVERTISING.jpg"
                    alt="Service 8"
                    className="w-full max-h-48 object-cover rounded-lg"
                  />
                  <p className="text-white mt-2 inter font-semibold whitespace-normal">
                    ADVERTISING
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth section - our clients */}
        <div id="clients" className="py-20 mb-24" ref={clientsRef}>
          <div
            className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
              clientsInView ? "animate__animated animate__fadeIn" : ""
            }`}
          >
            <div className="w-full mb-4 text-center">
              <p className="inter tracking-widest text-black font-medium text-s mb-2 ">
                OUR CLIENTS
              </p>
              <p className="inter text-black text-xl sm:text-3xl lg:text-4xl font-bold ">
                MEET OUR BELIEVERS
              </p>
            </div>
            {/* Shortened Horizontal line */}
            <div className="flex justify-center">
              <div className="w-40 border-b-2 border-black my-2"></div>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-8 sm:gap-x-8 md:gap-x-24 gap-y-12 justify-center">
              <img
                src="/photos/clients/concentrix.png"
                alt="Client Logo 4.1"
                className="h-20 object-contain mx-auto scale-[.8] transition-transform duration-500 ease-in-out transform hover:scale-[.9] grayscale hover:filter-none transition-filter"
              />
              <img
                src="/photos/clients/teleperformance.png"
                alt="Client Logo 13"
                className="h-20 object-contain mx-auto scale-[.8] transition-transform duration-500 ease-in-out transform hover:scale-[.9] grayscale hover:filter-none transition-filter"
              />
              <img
                src="/photos/clients/telstra.png"
                alt="Client Logo 14"
                className="h-20 object-contain mx-auto transition-transform duration-500 ease-in-out transform hover:scale-[1.1] grayscale hover:filter-none transition-filter"
              />
              <img
                src="/photos/clients/vasquez1.jpg"
                alt="Client Logo 20"
                className="h-20 object-contain mx-auto scale-[.9] transition-transform duration-500 ease-in-out transform hover:scale-[1] grayscale hover:filter-none transition-filter"
              />
              <img
                src="/photos/clients/digiplus.png"
                alt="Client Logo 5"
                className="h-20 object-contain mx-auto transition-transform duration-500 ease-in-out transform hover:scale-[1.1] grayscale hover:filter-none transition-filter"
              />
              <img
                src="/photos/clients/coexstar.png"
                alt="Client Logo 4"
                className="h-20 object-contain mx-auto scale-[2.5] transition-transform duration-500 ease-in-out transform hover:scale-[2.6] grayscale hover:filter-none transition-filter"
              />
              <img
                src="/photos/clients/byd.jpg"
                alt="Client Logo 2"
                className="h-20 object-contain mx-auto scale-[1.8] transition-transform duration-500 ease-in-out transform hover:scale-[1.9] grayscale hover:filter-none transition-filter"
              />
              <img
                src="/photos/clients/netflix.png"
                alt="Client Logo 9"
                className="h-20 object-contain mx-auto scale-[.8] transition-transform duration-500 ease-in-out transform hover:scale-[.9] grayscale hover:filter-none transition-filter"
              />
              <img
                src="/photos/clients/samsung.png"
                alt="Client Logo 10"
                className="h-20 object-contain mx-auto scale-[.8] transition-transform duration-500 ease-in-out transform hover:scale-[.9] grayscale hover:filter-none transition-filter"
              />
              <img
                src="/photos/clients/usaid.png"
                alt="Client Logo 19"
                className="h-20 object-contain mx-auto transition-transform duration-500 ease-in-out transform hover:scale-[1.1] grayscale hover:filter-none transition-filter"
              />
              <img
                src="/photos/clients/bci.png"
                alt="Client Logo 1"
                className="h-20 object-contain mx-auto scale-[.8] transition-transform duration-500 ease-in-out transform hover:scale-[.9] grayscale hover:filter-none transition-filter"
              />

              <img
                src="/photos/clients/cloudflare.png"
                alt="Client Logo 3"
                className="h-20 object-contain mx-auto scale-[1.8] transition-transform duration-500 ease-in-out transform hover:scale-[1.9] grayscale hover:filter-none transition-filter"
              />
              <img
                src="/photos/clients/leechiu.png"
                alt="Client Logo 6"
                className="h-20 object-contain mx-auto scale-[.8] transition-transform duration-500 ease-in-out transform hover:scale-[.9] grayscale hover:filter-none transition-filter"
              />
              <img
                src="/photos/clients/mercusys.jpg"
                alt="Client Logo 7"
                className="h-20 object-contain mx-auto scale-[1.3] transition-transform duration-500 ease-in-out transform hover:scale-[1.4] grayscale hover:filter-none transition-filter"
              />
              <img
                src="/photos/clients/mynt.png"
                alt="Client Logo 8"
                className="h-20 object-contain mx-auto transition-transform duration-500 ease-in-out transform hover:scale-[1.1] grayscale hover:filter-none transition-filter"
              />

              <img
                src="/photos/clients/solartransport1.jpg"
                alt="Client Logo 11"
                className="h-20 object-contain mx-auto scale-[1.4] transition-transform duration-500 ease-in-out transform hover:scale-[1.5] grayscale hover:filter-none transition-filte"
              />
              <img
                src="/photos/clients/supportninja.png"
                alt="Client Logo 12"
                className="h-20 object-contain mx-auto scale-[1.4] transition-transform duration-500 ease-in-out transform hover:scale-[1.5] grayscale hover:filter-none transition-filter"
              />

              <img
                src="/photos/clients/tmobile.png"
                alt="Client Logo 15"
                className="h-20 object-contain mx-auto scale-[.6] transition-transform duration-500 ease-in-out transform hover:scale-[.7] grayscale hover:filter-none transition-filter"
              />
              <img
                src="/photos/clients/tplink.png"
                alt="Client Logo 16"
                className="h-20 object-contain mx-auto transition-transform duration-500 ease-in-out transform hover:scale-[1.1] grayscale hover:filter-none transition-filter"
              />
              <img
                src="/photos/clients/tsa.png"
                alt="Client Logo 17"
                className="h-20 object-contain mx-auto transition-transform duration-500 ease-in-out transform hover:scale-[1.1] grayscale hover:filter-none transition-filter"
              />
              <img
                src="/photos/clients/universalrobina.png"
                alt="Client Logo 18"
                className="h-20 object-contain mx-auto transition-transform duration-500 ease-in-out transform hover:scale-[1.1] grayscale hover:filter-none transition-filter"
              />
              <img
                src="/photos/clients/ateneo.png"
                alt="Client Logo 18"
                className="h-20 object-contain mx-auto scale-[1.3] transition-transform duration-500 ease-in-out transform hover:scale-[1.4] grayscale hover:filter-none transition-filter"
              />
            </div>
          </div>
        </div>

        {/* Fifth section - Inquiries */}
        <div
          id="contact"
          className="relative w-screen flex flex-col items-center mt-20  bg-cover bg-center"
          style={{
            backgroundImage: "url('/photos/inquiry-bg.jpg')",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
          <div className="relative w-full flex flex-col justify-items-center items-center p-24">
            <p className=" inter text-white text-lg sm:text-xl md:text-2xl lg:text-4xl w-full text-wrap text-center md:text-center mt-4 font-bold">
              WANT TO TALK ABOUT YOUR EVENT?
            </p>
            <div className="inter text-center md:text-center max-w-[800px] whitespace-normal mt-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white">
              <p>
                We will help you to achieve your goals and to grow your
                business.
              </p>
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfs9q1G3cQ9aSMBgsz58Ycu9MXseevmJu-ibDYhKzscMTIivA/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-8 bg-pink-400 hover:bg-pink-600 text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 rounded-full transition duration-300 ease-in-out">
                Start Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
