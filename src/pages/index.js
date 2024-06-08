import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Homepage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div className="truncate scroll-smooth">
        <div
          className="bg-cover bg-center min-h-screen flex items-center justify-center"
          /* style={{
            backgroundImage: "url('/photos/home-wallpaper.jpg')",
          }} */
        >
          <h1 className="text-white font-bold text-4xl">Hello</h1>
        </div>

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
              href="#"
              className="inter tracking-widest text-black font-bold text-xs mt-36"
            >
              DISCOVER WHO WE ARE
            </a>
          </div>
        </div>
      </div>
      {/* Centered and Smaller Carousel */}
      <div className="truncate ">
        <Slider {...settings}>
          <a
            href="/photos/kirsten-frank-9HRHn_41IgY-unsplash.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-cover bg-center h-96 flex items-center justify-center">
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
            <div className="bg-cover bg-center  h-96 flex items-center justify-center">
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
            <div className="bg-cover bg-center  h-96 flex items-center justify-center">
              <img
                src="/photos/pexels-wendy-wei-1190297.jpg"
                /* src="/photos/kirsten-frank-9HRHn_41IgY-unsplash.jpg" */
                alt="3rd"
                className="h-auto w-96 object-cover"
              />
            </div>
          </a>
        </Slider>
      </div>
    </>
  );
}

export default Homepage;
