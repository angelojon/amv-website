import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Homepage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div className="truncate scroll-smooth ">
        <div
          className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center opacity-90"
          style={{
            backgroundImage: "url('/photos/homepaper.jpg')",
          }}
        >
          <p className="playfair text-white text-4xl font-semibold mb-8">
            Crafting Unforgettable Experiences, One Event at a Time
          </p>
          <Link
            to="/contact"
            className="tracking-widest text-white font-medium text-xs mt-8 py-2 px-4 border rounded border-white hover:bg-white hover:text-pink-500 transition duration-300"
          >
            CONTACT US
          </Link>
        </div>

        {/* Video Section */}
        {/* <div className="flex justify-center items-center mt-20">
          <div className="w-full max-w-2xl">
            <video
              src="./photos/Concentrix SDE 3.mp4"
              title="Video player"
              controls
              autoPlay
              muted
              loop
              className="w-full h-auto" // Ensure the video retains its original size and maintains aspect ratio
            ></video>
          </div>
        </div> */}

        <div className="w-screen flex flex-col items-center mt-36">
          <div className="min-w-40 flex flex-col items-center w-6/12">
            <p className="inter tracking-widest text-gray-700 font-medium text-xs">
              OUR PROMISE
            </p>
            <p className="playfair text-4xl w-full text-wrap text-center mt-4">
              EVERY EVENT BEGINS WITH A STORY.
            </p>

            <div className="w-px bg-gray-700 min-h-16 mt-4">
              {/* vertical line */}
            </div>

            <div className="inter text-center max-w-[800px] whitespace-normal mt-4 text-sm sm:text-xs md:text-xs lg:text-xs xl:text-base">
              <p>
                At AMV Events, we specialize in turning your visions into
                realities. We're not just event planners; we're storytellers,
                weaving narratives into every aspect of your occasion. With a
                touch of collaborative magic, we create celebrations that are
                both unparalleled and unforgettable.
                <br />
                <br />
                Our approach is simple yet profound: we listen. We take the time
                to understand who you are, what you aspire to, and what truly
                matters to you. No detail is too small, no idea too big – we
                leave no stone unturned in our quest to bring your dreams to
                life.
                <br />
                <br />
                For us, the beauty of an event lies in its intelligence – the
                seamless integration of creativity and precision planning. From
                the initial concept discussions to the meticulous design
                process, every step is interconnected, ensuring a cohesive and
                captivating experience.
                <br />
                <br />
                So whether you're planning a personal celebration or a corporate
                event, trust AMV Events to make it an occasion to remember. Your
                dream event is within reach – let's make it a reality together.
              </p>
            </div>
            <a
              href="/about/our-team"
              className="inter tracking-widest text-black font-bold text-xs mt-36"
            >
              DISCOVER WHO WE ARE
            </a>
          </div>
        </div>
      </div>

      <div>
        {/* New Contact Section */}
        <div className="w-full py-16 flex justify-center mt-16">
          <div className="w-full max-w-7xl bg-white shadow-lg overflow-hidden">
            <div className="relative h-80">
              {" "}
              {/* Set a fixed height for the rectangle */}
              <img
                src="/photos/kirsten-frank-9HRHn_41IgY-unsplash.jpg"
                alt="Contact Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-8 text-center">
                <p className="playfair text-3xl font-semibold text-white mb-4">
                  Get in Touch with Us!
                </p>
                <p className="inter text-gray-200 mb-6">
                  We'd love to hear from you. Whether you have a question about
                  our services, pricing, or anything else, our team is ready to
                  answer all your questions.
                </p>
                <Link
                  to="/contact"
                  className="inter tracking-widest text-white font-medium text-xs mt-4 py-2 px-6 border border-white hover:bg-white hover:text-pink-500 transition duration-300"
                >
                  CONTACT US
                </Link>

                <p className="inter text-gray-200 mt-4">
                  Call us:{" "}
                  <a href="tel:1234567890" className="text-white">
                    (123) 456-7890
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Centered and Smaller Carousel */}
        <div className="truncate mt-24">
          <Slider {...settings}>
            <a
              href="/photos/kirsten-frank-9HRHn_41IgY-unsplash.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-cover bg-center  flex items-center justify-center">
                <img
                  src="/photos/pexels-wendy-wei-1190297.jpg"
                  alt="1st"
                  className="h-auto w-96 object-cover"
                />
              </div>
            </a>

            <a
              href="/photos/pexels-wendy-wei-1190297.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-cover bg-center  flex items-center justify-center">
                <img
                  src="/photos/pexels-wendy-wei-1190297.jpg"
                  alt="2nd"
                  className="h-auto w-96 object-cover"
                />
              </div>
            </a>

            <a
              href="/photos/kirsten-frank-9HRHn_41IgY-unsplash.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-cover bg-center  flex items-center justify-center">
                <img
                  src="/photos/pexels-wendy-wei-1190297.jpg"
                  /* src="/photos/kirsten-frank-9HRHn_41IgY-unsplash.jpg" */
                  alt="3rd"
                  className="h-auto w-96 object-cover"
                />
              </div>
            </a>

            <a
              href="/photos/pexels-wendy-wei-1190297.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-cover bg-center  flex items-center justify-center">
                <img
                  src="/photos/pexels-wendy-wei-1190297.jpg"
                  alt="4th"
                  className="h-auto w-96 object-cover"
                />
              </div>
            </a>

            <a
              href="/photos/pexels-wendy-wei-1190297.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-cover bg-center  flex items-center justify-center">
                <img
                  src="/photos/pexels-wendy-wei-1190297.jpg"
                  alt="5th"
                  className="h-auto w-96 object-cover"
                />
              </div>
            </a>

            <a
              href="/photos/pexels-wendy-wei-1190297.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-cover bg-center   flex items-center justify-center">
                <img
                  src="/photos/pexels-wendy-wei-1190297.jpg"
                  alt="6th"
                  className="h-auto w-96 object-cover"
                />
              </div>
            </a>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Homepage;
