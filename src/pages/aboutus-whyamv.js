import React from "react";

const WhyAmv = () => (
  <div className="mx-auto py-8 pt-20">
    <div className="px-8 py-24 flex justify-center items-center">
      <div className="text-center">
        <p className="playfair text-4xl w-full text-wrap text-center">
          Why AMV?
        </p>
      </div>
    </div>
    <div className="flex justify-center">
      <img
        src="/photos/home-wallpaper.jpg"
        alt="Why AMV"
        className="w-full sm:w-3/4 lg:w-2/3 object-cover"
      />
    </div>

    <div className="w-screen flex flex-col items-center mt-24">
      <div className="min-w-40 flex flex-col items-center w-6/12">
        <p className="playfair text-4xl w-full text-wrap mb-8 text-center ">
          EVERY EVENT BEGINS WITH A STORY.
        </p>

        <div className="inter text-left max-w-[800px] whitespace-normal mt-4 text-sm sm:text-xs md:text-xs lg:text-xs xl:text-base">
          <p>
            At AMV Events, we specialize in turning your visions into realities.
            We're not just event planners; we're storytellers, weaving
            narratives into every aspect of your occasion. With a touch of
            collaborative magic, we create celebrations that are both
            unparalleled and unforgettable.
            <br />
            <br />
            Our approach is simple yet profound: we listen. We take the time to
            understand who you are, what you aspire to, and what truly matters
            to you. No detail is too small, no idea too big – we leave no stone
            unturned in our quest to bring your dreams to life.
          </p>
        </div>
      </div>
    </div>

    <div className="flex justify-center mt-24">
      <div className="flex flex-wrap justify-center gap-4 w-full sm:w-3/4 lg:w-2/3">
        <img
          src="/photos/home-wallpaper.jpg"
          alt="Photo 1"
          className="w-full sm:w-1/2 lg:w-1/2 object-cover"
        />
        <img
          src="/photos/home-wallpaper.jpg"
          alt="Photo 2"
          className="w-full sm:w-1/2 lg:w-1/2 object-cover"
        />
      </div>
    </div>

    <div className="w-screen flex flex-col items-center mt-20">
      <div className="min-w-40 flex flex-col items-center w-6/12">
        <div className="inter text-left max-w-[800px] whitespace-normal mt-4 text-sm sm:text-xs md:text-xs lg:text-xs xl:text-base">
          <p>
            For us, the beauty of an event lies in its intelligence – the
            seamless integration of creativity and precision planning. From the
            initial concept discussions to the meticulous design process, every
            step is interconnected, ensuring a cohesive and captivating
            experience.
            <br />
            <br />
            So whether you're planning a personal celebration or a corporate
            event, trust AMV Events to make it an occasion to remember. Your
            dream event is within reach – let's make it a reality together.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default WhyAmv;
