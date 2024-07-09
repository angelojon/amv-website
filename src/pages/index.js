import React from "react";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

function Homepage() {
  return (
    <>
      {/* First section - landing page */}
      <div className="truncate scroll-smooth ">
        <div className="relative">
          {/* Background image */}
          <div
            className="bg-cover bg-center h-[70vh] w-full flex items-center justify-start mt-9 p-0"
            style={{
              backgroundImage: "url('/photos/banner.jpg')",
              backgroundSize: "cover", // Ensures the image covers the div
            }}
          ></div>
        </div>
        <div id="about">
          {/* Overlapping containers */}
          <div className="relative mt-6 flex flex-col items-center gap-4 px-4 md:flex-col md:items-center md:gap-4 lg:flex-row lg:justify-center lg:gap-8 lg:px-40 transform -translate-y-12">
            <div className="border-0 bg-black opacity-70 p-4 rounded-2xl text-center w-full sm:w-3/4 md:w-1/2 lg:w-1/5 shadow-lg relative z-10 mb-4 lg:mb-0">
              <h3 className="inter text-white text-lg font-semibold my-4 flex justify-center items-center">
                <span>Send an Inquiry</span>
                <FaArrowRight className="ml-2" />
              </h3>
            </div>
            <div className="border-0 bg-white p-4 rounded-2xl text-center w-full sm:w-3/4 md:w-1/2 lg:w-1/5 shadow-lg relative z-10 mb-4 lg:mb-0">
              <h3 className="inter text-lg font-semibold my-4 flex justify-center items-center">
                <FaPhoneAlt className="mr-2" />
                <span>Call Us: (02) 783-2351</span>
              </h3>
            </div>
            <div className="border-0 bg-white p-4 rounded-2xl text-center w-full sm:w-3/4 md:w-1/2 lg:w-1/5 shadow-lg relative z-10">
              <h3 className="inter text-lg font-semibold my-4 flex justify-center items-center">
                <span>Get a Proposal</span>
                <FaArrowRight className="ml-2" />
              </h3>
            </div>
          </div>
        </div>

        {/* Second section - about us */}
        <div className="w-screen flex flex-col items-center mt-40 mb-40">
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 px-8">
            <div className="relative w-full md:w-6/12 flex flex-col md:flex-row items-center justify-center gap-4">
              <img
                src="/photos/sample.jpg"
                alt="1"
                className="border-4 border-black w-5/12 h-auto object-cover rounded-3xl z-0"
                style={{
                  transform: "translate(10%, -5%)", // Adjusted translation
                  marginBottom: "-20%",
                }}
              />
              <img
                src="/photos/sample.jpg"
                alt="2"
                className="border-4 border-black w-5/12 h-auto object-cover rounded-3xl z-10"
                style={{
                  transform: "translate(-20%, -70%)", // Adjusted translation
                  marginBottom: "-20%",
                }}
              />
            </div>

            <div className="w-full md:w-6/12 flex flex-col items-start md:items-left mt-4">
              <p className="playfair italic tracking-widest text-gray-700 font-medium text-xs">
                OUR PROMISE
              </p>
              <p className="inter text-4xl w-full text-wrap text-left md:text-left mt-4 font-bold">
                EVERY EVENT BEGINS WITH A STORY.
              </p>
              <div className="inter text-left md:text-left max-w-[800px] whitespace-normal mt-4 text-sm sm:text-xs md:text-xs lg:text-xs xl:text-base">
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
          className="relative bg-cover bg-center min-h-screen flex flex-col justify-center items-center"
          style={{
            backgroundImage: "url('/photos/3rdsection.png')",
            backgroundSize: "contain", // Scale the image to fit within the container
            backgroundPosition: "center", // Center the image horizontally and vertically
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
          {/* Dark overlay */}
          <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center">
            <div className="w-full text-white mb-4 text-center">
              <p className="playfair tracking-widest text-white font-medium text-s mb-2 italic">
                OUR SERVICES
              </p>
              <h2 className="inter text-l sm:text-3xl lg:text-4xl font-bold mb-4">
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
            {/* Shortened Horizontal line */}
            <div className="w-80 border-b-2 border-white my-2"></div>
            {/* Images grid */}
            <div className="w-full flex justify-center mt-4 gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center">
                  <img
                    src="/photos/sample.jpg"
                    alt="Service 1"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <p className="text-white mt-2 inter font-semibold">
                    PRODUCT LAUNCHES
                  </p>
                </div>
                <div className="text-center">
                  <img
                    src="/photos/sample.jpg"
                    alt="Service 2"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <p className="text-white mt-2 inter font-semibold whitespace-normal">
                    TRADESHOWS | BOOTH MANAGEMENT | EXHIBITIONS
                  </p>
                </div>
                <div className="text-center">
                  <img
                    src="/photos/sample.jpg"
                    alt="Service 3"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <p className="text-white mt-2 inter font-semibold whitespace-normal">
                    CONFERENCES
                  </p>
                </div>
                <div className="text-center">
                  <img
                    src="/photos/sample.jpg"
                    alt="Service 4"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <p className="text-white mt-2 inter font-semibold whitespace-normal">
                    BELOW-THE-LINE-PROMOTION
                  </p>
                </div>
                <div className="text-center">
                  <img
                    src="/photos/sample.jpg"
                    alt="Service 5"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <p className="text-white mt-2 inter font-semibold whitespace-normal">
                    VENUE STYLING
                  </p>
                </div>
                <div className="text-center">
                  <img
                    src="/photos/sample.jpg"
                    alt="Service 6"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <p className="text-white mt-2 inter font-semibold whitespace-normal">
                    COLLATERAL DEVELOPMENT
                  </p>
                </div>
                <div className="text-center">
                  <img
                    src="/photos/sample.jpg"
                    alt="Service 7"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <p className="text-white mt-2 inter font-semibold whitespace-normal">
                    EQUIPMENT RENTALS
                  </p>
                </div>
                <div className="text-center">
                  <img
                    src="/photos/sample.jpg"
                    alt="Service 8"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <p className="text-white mt-2 inter font-semibold whitespace-normal">
                    DIGITAL MARKETING
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth section - our events */}
        <div
          id="events"
          className="relative bg-cover bg-center h-screen flex flex-col justify-center items-center"
          /* style={{
          backgroundImage: "url('/photos/3rdsection.png')",
          backgroundSize: "cover", // Ensures the image covers the div
        }} */
        >
          {/*         <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
           */}{" "}
          {/* Dark overlay */}
          <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center">
            <div className="w-full mb-4 text-center">
              <p className="playfair tracking-widest text-black font-medium text-s mb-2 ">
                OUR EVENTS
              </p>
              <p className="inter text-amber-800 text-2xl sm:text-3xl lg:text-4xl font-bold ">
                FEW THINGS WE'RE GREAT AT
              </p>
            </div>
            {/* Shortened Horizontal line */}
            <div className="w-40 border-b-2 border-black my-2"></div>
            {/* Images grid */}
            <div className="w-full flex justify-center mt-4 gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <img
                  src="/photos/sample.jpg"
                  alt="Service 1"
                  className="w-full h-auto object-cover rounded-lg"
                />
                <img
                  src="/photos/sample.jpg"
                  alt="Service 2"
                  className="w-full h-auto object-cover rounded-lg"
                />
                <img
                  src="/photos/sample.jpg"
                  alt="Service 3"
                  className="w-full h-auto object-cover rounded-lg"
                />
                <img
                  src="/photos/sample.jpg"
                  alt="Service 4"
                  className="w-full h-auto object-cover rounded-lg"
                />
                <img
                  src="/photos/sample.jpg"
                  alt="Service 5"
                  className="w-full h-auto object-cover rounded-lg"
                />
                <img
                  src="/photos/sample.jpg"
                  alt="Service 6"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Fifth section - our clients */}
        <div id="clients" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full mb-4 text-center">
              <p className="inter text-amber-800  text-2xl sm:text-3xl lg:text-4xl font-bold">
                OUR CLIENTS
              </p>
            </div>
            {/* Shortened Horizontal line */}
            <div className="flex justify-center">
              <div className="w-40 border-b-2 border-black my-2"></div>
            </div>
            <div className="mt-8 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 gap-y-12 justify-center">
              {/* Example images, replace with actual client logos */}
              <img
                src="/photos/clients/bci.png"
                alt="Client Logo 1"
                className="h-20 object-contain mx-auto"
              />
              <img
                src="/photos/clients/byd.jpg"
                alt="Client Logo 2"
                className="h-20 object-contain mx-auto"
              />
              <img
                src="/photos/clients/cloudflare.png"
                alt="Client Logo 3"
                className="h-20 object-contain mx-auto"
              />
              <img
                src="/photos/clients/coexstar.png"
                alt="Client Logo 4"
                className="h-20 object-contain mx-auto"
              />
              <img
                src="/photos/clients/digiplus.png"
                alt="Client Logo 5"
                className="h-20 object-contain mx-auto"
              />
              <img
                src="/photos/clients/leechiu.png"
                alt="Client Logo 6"
                className="h-20 object-contain mx-auto"
              />
              <img
                src="/photos/clients/mercusys.jpg"
                alt="Client Logo 7"
                className="h-20 object-contain mx-auto"
              />
              <img
                src="/photos/clients/mynt.png"
                alt="Client Logo 2"
                className="h-20 object-contain mx-auto"
              />
              <img
                src="/photos/clients/netflix.png"
                alt="Client Logo 8"
                className="h-20 object-contain mx-auto"
              />
              <img
                src="/photos/clients/samsung.png"
                alt="Client Logo 9"
                className="h-20 object-contain mx-auto"
              />
              <img
                src="/photos/clients/solartransport.jpg"
                alt="Client Logo 2"
                className="h-20 object-contain mx-auto"
              />
              <img
                src="/photos/clients/supportninja.png"
                alt="Client Logo 10"
                className="h-20 object-contain mx-auto"
              />
              <img
                src="/photos/clients/teleperformance.png"
                alt="Client Logo 11"
                className="h-20 object-contain mx-auto"
              />
              <img
                src="/photos/clients/telstra.png"
                alt="Client Logo 12"
                className="h-20 object-contain mx-auto"
              />
              <img
                src="/photos/clients/tmobile.png"
                alt="Client Logo 13"
                className="h-20 object-contain mx-auto"
              />
              <img
                src="/photos/clients/tplink.png"
                alt="Client Logo 14"
                className="h-20 object-contain mx-auto"
              />
              <img
                src="/photos/clients/tsa.png"
                alt="Client Logo 2"
                className="h-20 object-contain mx-auto"
              />
              <img
                src="/photos/clients/universalrobina.png"
                alt="Client Logo 15"
                className="h-20 object-contain mx-auto"
              />
              <img
                src="/photos/clients/usaid.png"
                alt="Client Logo 16"
                className="h-20 object-contain mx-auto"
              />
              <img
                src="/photos/clients/vasquez.jpg"
                alt="Client Logo 2"
                className="h-20 object-contain mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Sixth section - Inquiries */}
        <div
          id="contact"
          className="relative w-screen flex flex-col items-center mt-20  bg-cover bg-center"
          style={{
            backgroundImage: "url('/photos/sample.jpg')", // Replace with your actual image path
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
          {/* Dark overlay */}
          <div className=" relative w-full md:w-6/12 flex flex-col items-center md:items-center p-36">
            <p className="inter text-white text-xl sm:text-xl md:text-2xl lg:text-5xl w-full text-wrap text-center md:text-center mt-4 font-bold">
              WANT TO TALK ABOUT YOUR EVENT?
            </p>
            <div className="inter text-center md:text-center max-w-[800px] whitespace-normal mt-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white">
              <p>
                We will help you to achieve your goals and to grow your
                business.
              </p>
            </div>
            <button className="mt-8 bg-pink-400 hover:bg-pink-600 text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 rounded-full transition duration-300 ease-in-out">
              Start Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
