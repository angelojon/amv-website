import React, { useEffect, useMemo, useState } from "react";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaArrowUp,
  FaEnvelope,
  FaQuoteLeft,
  FaCalendarCheck,
  FaUsers,
  FaBullhorn,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import "./animate.css";

function Homepage() {
  const googleFormLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSfs9q1G3cQ9aSMBgsz58Ycu9MXseevmJu-ibDYhKzscMTIivA/viewform";

  const services = useMemo(
    () => [
      {
        title: "LAUNCHES",
        image: "/photos/services/LAUNCHES.jpg",
        description:
          "From concept to execution, we create launch events that leave a strong and memorable first impression.",
        icon: <FaCalendarCheck />,
      },
      {
        title: "TRADESHOWS | BOOTH MANAGEMENT | EXHIBITIONS",
        image: "/photos/services/TRADESHOWS BOOTH MANAGEMENT EXHIBITIONS.jpg",
        description:
          "Professional tradeshow and exhibition support designed to maximize brand presence and engagement.",
        icon: <FaUsers />,
      },
      {
        title: "CONFERENCES",
        image: "/photos/services/CONFERENCES.jpg",
        description:
          "Seamless conference planning and coordination for meaningful, well-managed business events.",
        icon: <FaBullhorn />,
      },
      {
        title: "BELOW-THE-LINE PROMOTION",
        image: "/photos/services/BELOW THE LINE.jpg",
        description:
          "Creative ground activations and promotional executions tailored for stronger audience interaction.",
        icon: <FaBullhorn />,
      },
      {
        title: "VENUE STYLING",
        image: "/photos/services/VENUE STYLING.jpg",
        description:
          "We transform spaces into visually compelling event venues aligned with your brand and vision.",
        icon: <FaCalendarCheck />,
      },
      {
        title: "COLLATERAL DEVELOPMENT",
        image: "/photos/services/COLLATERAL DEVELOPMENT.jpg",
        description:
          "Branded event materials and collaterals that support both communication and presentation goals.",
        icon: <FaUsers />,
      },
      {
        title: "EQUIPMENT RENTALS",
        image: "/photos/services/EQUIPMENT RENTALS.jpg",
        description:
          "Reliable event equipment support for smooth technical and on-site operations.",
        icon: <FaCalendarCheck />,
      },
      {
        title: "ADVERTISING",
        image: "/photos/services/ADVERTISING.jpg",
        description:
          "Integrated advertising support that helps amplify visibility before, during, and after your event.",
        icon: <FaBullhorn />,
      },
    ],
    []
  );

  const testimonials = [
    {
      name: "Corporate Client",
      company: "Business Events",
      quote:
        "AMV handled our event with creativity, precision, and professionalism. The team was responsive, organized, and easy to work with from start to finish.",
    },
    {
      name: "Brand Partner",
      company: "Marketing Activation",
      quote:
        "Their execution was seamless and their attention to detail was excellent. They understood the brief and delivered beyond expectations.",
    },
    {
      name: "Event Collaborator",
      company: "Launch Event",
      quote:
        "Working with AMV was smooth and efficient. They brought structure, style, and confidence to every stage of the event.",
    },
  ];

  const faqs = [
    {
      question: "What types of events do you handle?",
      answer:
        "We handle launches, conferences, exhibitions, brand activations, venue styling, promotional events, and other customized corporate and social events.",
    },
    {
      question: "Can you customize packages based on our needs?",
      answer:
        "Yes. We tailor our event services based on your goals, target audience, event scope, and required deliverables.",
    },
    {
      question: "How do we start working with AMV?",
      answer:
        "You can send an inquiry, request a proposal, or contact us directly. Once we understand your needs, we can recommend the best approach for your event.",
    },
    {
      question: "Do you also provide on-ground event management?",
      answer:
        "Yes. We can support planning, coordination, manpower, styling, collaterals, and event-day management depending on your requirements.",
    },
  ];

  const clientLogos = [
    "/photos/clients/concentrix.png",
    "/photos/clients/teleperformance.png",
    "/photos/clients/telstra.png",
    "/photos/clients/vasquez1.jpg",
    "/photos/clients/digiplus.png",
    "/photos/clients/coexstar.png",
    "/photos/clients/byd.jpg",
    "/photos/clients/netflix.png",
    "/photos/clients/samsung.png",
    "/photos/clients/usaid.png",
    "/photos/clients/bci.png",
    "/photos/clients/cloudflare.png",
    "/photos/clients/leechiu.png",
    "/photos/clients/mercusys.jpg",
    "/photos/clients/mynt.png",
    "/photos/clients/solartransport1.jpg",
    "/photos/clients/supportninja.png",
    "/photos/clients/tmobile.png",
    "/photos/clients/tplink.png",
    "/photos/clients/tsa.png",
    "/photos/clients/universalrobina.png",
    "/photos/clients/ateneo.png",
  ];

  const [activeFaq, setActiveFaq] = useState(0);
  const [showTopButton, setShowTopButton] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    eventType: "",
    budget: "",
    date: "",
    message: "",
  });

  const { ref: landingRef, inView: landingView } = useInView({
    triggerOnce: false,
    rootMargin: "0px 0px",
  });

  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: false,
    rootMargin: "10px 0px",
  });

  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: false,
    rootMargin: "50px 0px",
  });

  const { ref: clientsRef, inView: clientsInView } = useInView({
    triggerOnce: false,
    rootMargin: "-50px 0px",
  });

  const { ref: faqRef, inView: faqInView } = useInView({
    triggerOnce: false,
    rootMargin: "0px 0px",
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 500);
    };

    document.body.style.overflow =
      showQuoteModal || selectedService ? "hidden" : "auto";
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showQuoteModal, selectedService]);

  const handleQuoteChange = (e) => {
    const { name, value } = e.target;
    setQuoteForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const buildPrefilledGoogleFormUrl = () => {
    return googleFormLink;
  };

  const stats = [
    { value: "100+", label: "Events Supported" },
    { value: "20+", label: "Brand Partners" },
    { value: "End-to-End", label: "Event Solutions" },
    { value: "Creative + Precise", label: "Execution Style" },
  ];

  return (
    <>
      <div className="scroll-smooth overflow-x-hidden">
        {/* HERO */}
        <section
          className="relative min-h-screen w-full overflow-hidden bg-white"
          ref={landingRef}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-neutral-100" />

          <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-6 pb-16 pt-32 text-center sm:px-8 lg:px-10">
            <img
              src="/photos/amv_logo.png"
              alt="AMV Logo"
              className={`h-auto w-full max-w-[260px] object-contain sm:max-w-[360px] md:max-w-[480px] lg:max-w-[560px] ${
                landingView ? "animate__animated animate__fadeIn" : ""
              }`}
            />

            <p
              className={`inter mt-8 text-[11px] tracking-[0.35em] text-neutral-500 sm:text-xs ${
                landingView ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              EVENTS • ACTIVATIONS • EXECUTIONS
            </p>

            <h1
              className={`playfair mt-6 max-w-5xl text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl lg:text-6xl ${
                landingView ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              We create event experiences that feel polished, purposeful, and unforgettable.
            </h1>

            <p
              className={`inter mt-5 max-w-3xl text-sm leading-7 text-neutral-600 sm:text-base ${
                landingView ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              From launches and conferences to brand activations and venue styling,
              AMV delivers event solutions with creativity, structure, and precision.
            </p>

            <div
              className={`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row ${
                landingView ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              <button
                onClick={() => setShowQuoteModal(true)}
                className="inter inline-flex min-w-[220px] items-center justify-center rounded-full bg-black px-7 py-4 text-sm font-semibold tracking-wide text-white transition hover:bg-neutral-800"
              >
                Request a Quote
                <FaArrowRight className="ml-3" />
              </button>

              <a
                href="#services"
                className="inter inline-flex min-w-[220px] items-center justify-center rounded-full border border-neutral-300 bg-white px-7 py-4 text-sm font-semibold tracking-wide text-neutral-900 transition hover:bg-neutral-100"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-12 grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
              <a
                href={googleFormLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl bg-black px-6 py-6 text-white shadow-lg transition hover:-translate-y-1"
              >
                <p className="inter text-sm font-semibold tracking-wide">Send an Inquiry</p>
                <p className="inter mt-2 text-xs leading-6 text-neutral-300">
                  Tell us what you need and let us help shape the right event solution.
                </p>
              </a>

              <a
                href="tel:+639178780711"
                className="rounded-3xl bg-white px-6 py-6 text-neutral-900 shadow-lg ring-1 ring-neutral-200 transition hover:-translate-y-1"
              >
                <p className="inter flex items-center justify-center text-sm font-semibold tracking-wide">
                  <FaPhoneAlt className="mr-2" />
                  Call Us
                </p>
                <p className="inter mt-2 text-xs leading-6 text-neutral-600">(0917) 878 0711</p>
              </a>

              <button
                onClick={() => setShowQuoteModal(true)}
                className="rounded-3xl bg-white px-6 py-6 text-neutral-900 shadow-lg ring-1 ring-neutral-200 transition hover:-translate-y-1"
              >
                <p className="inter text-sm font-semibold tracking-wide">Get a Proposal</p>
                <p className="inter mt-2 text-xs leading-6 text-neutral-600">
                  Share your event details and request a more tailored recommendation.
                </p>
              </button>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="bg-neutral-950 py-10 text-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="text-center">
                <p className="inter text-2xl font-bold sm:text-3xl">{item.value}</p>
                <p className="inter mt-2 text-xs uppercase tracking-[0.2em] text-neutral-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section
          className="w-full flex flex-col items-center px-6 py-24 sm:py-32"
          ref={aboutRef}
          id="about"
        >
          <p
            className={`inter tracking-[0.35em] text-neutral-500 text-xs sm:text-sm ${
              aboutInView ? "animate__animated animate__fadeInUp" : ""
            }`}
          >
            OUR PROMISE
          </p>

          <h2
            className={`playfair mt-5 max-w-3xl text-center text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl lg:text-5xl ${
              aboutInView ? "animate__animated animate__fadeInUp" : ""
            }`}
          >
            Every event begins with a story.
          </h2>

          <div
            className={`my-8 h-20 w-px bg-neutral-300 ${
              aboutInView ? "animate__animated animate__fadeIn" : ""
            }`}
          />

          <div
            className={`inter max-w-4xl text-center text-sm leading-8 text-neutral-600 sm:text-base ${
              aboutInView ? "animate__animated animate__fadeIn" : ""
            }`}
          >
            <p>
              At AMV Events, we specialize in turning visions into realities. We are not
              simply planners — we are storytellers, shaping each event with intention,
              clarity, and impact.
              <br />
              <br />
              Our approach begins with listening. We take the time to understand your
              goals, audience, and expectations so we can create an experience that feels
              authentic, elevated, and well-executed.
              <br />
              <br />
              From early concept development to on-ground delivery, we combine creativity
              with structure to ensure every event is both visually compelling and
              operationally smooth.
              <br />
              <br />
              Whether it is a launch, a conference, an activation, or a customized event
              requirement, AMV is here to help you create something memorable.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="relative bg-cover bg-center py-24 parallax"
          ref={servicesRef}
          style={{
            backgroundImage: "url('/photos/our-services-bg.png')",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <div
              className={`text-center text-white ${
                servicesInView ? "animate__animated animate__fadeIn" : ""
              }`}
            >
              <p className="inter tracking-[0.35em] text-xs sm:text-sm text-neutral-300">
                OUR SERVICES
              </p>
              <h2 className="playfair mt-4 text-3xl font-semibold sm:text-4xl lg:text-5xl">
                We plan, organize, and manage your event from start to finish.
              </h2>
              <p className="inter mx-auto mt-6 max-w-3xl text-sm leading-7 text-neutral-200 sm:text-base">
                We offer a wide range of event services designed to make every experience
                memorable, strategic, and seamless — from planning and design to execution
                and post-event support.
              </p>
            </div>

            <div className="mx-auto my-8 h-px w-60 bg-white/30" />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <button
                  key={service.title}
                  onClick={() => setSelectedService(service)}
                  className={`group overflow-hidden rounded-3xl bg-white/10 text-left backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/15 ${
                    servicesInView ? "animate__animated animate__fadeInUp" : ""
                  }`}
                >
                  <div className="overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 text-white">
                    <div className="mb-3 text-lg text-pink-200">{service.icon}</div>
                    <p className="inter text-sm font-semibold tracking-wide">
                      {service.title}
                    </p>
                    <p className="inter mt-3 text-xs leading-6 text-neutral-200">
                      {service.description}
                    </p>
                    <p className="inter mt-4 inline-flex items-center text-xs font-semibold text-pink-200">
                      View details <FaArrowRight className="ml-2" />
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-white px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="inter tracking-[0.35em] text-xs sm:text-sm text-neutral-500">
                TESTIMONIALS
              </p>
              <h2 className="playfair mt-4 text-3xl font-semibold text-neutral-900 sm:text-4xl lg:text-5xl">
                What working with us feels like
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <div
                  key={item.name + item.company}
                  className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm"
                >
                  <FaQuoteLeft className="text-2xl text-neutral-300" />
                  <p className="inter mt-5 text-sm leading-7 text-neutral-600">
                    {item.quote}
                  </p>
                  <div className="mt-6">
                    <p className="inter text-sm font-semibold text-neutral-900">
                      {item.name}
                    </p>
                    <p className="inter text-xs uppercase tracking-[0.2em] text-neutral-500">
                      {item.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENTS */}
        <section id="clients" className="py-24" ref={clientsRef}>
          <div
            className={`mx-auto max-w-7xl px-6 ${
              clientsInView ? "animate__animated animate__fadeIn" : ""
            }`}
          >
            <div className="text-center">
              <p className="inter tracking-[0.35em] text-xs sm:text-sm text-neutral-500">
                OUR CLIENTS
              </p>
              <h2 className="playfair mt-4 text-3xl font-semibold text-neutral-900 sm:text-4xl lg:text-5xl">
                Meet our believers
              </h2>
            </div>

            <div className="mx-auto my-6 h-px w-40 bg-neutral-300" />

            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {clientLogos.map((logo, index) => (
                <div
                  key={`${logo}-${index}`}
                  className="flex items-center justify-center rounded-2xl bg-white p-4"
                >
                  <img
                    src={logo}
                    alt={`Client Logo ${index + 1}`}
                    className="h-20 object-contain grayscale transition duration-500 hover:scale-105 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-neutral-50 px-6 py-24" ref={faqRef}>
          <div className="mx-auto max-w-4xl">
            <div
              className={`text-center ${
                faqInView ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              <p className="inter tracking-[0.35em] text-xs sm:text-sm text-neutral-500">
                FREQUENTLY ASKED QUESTIONS
              </p>
              <h2 className="playfair mt-4 text-3xl font-semibold text-neutral-900 sm:text-4xl">
                Helpful answers before we start
              </h2>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((item, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={item.question}
                    className="overflow-hidden rounded-2xl border border-neutral-200 bg-white"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between px-6 py-5 text-left"
                    >
                      <span className="inter pr-4 text-sm font-semibold text-neutral-900 sm:text-base">
                        {item.question}
                      </span>
                      <span className="text-neutral-500">
                        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6">
                        <p className="inter text-sm leading-7 text-neutral-600">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section
          id="contact"
          className="relative mt-0 w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/photos/inquiry-bg.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/65" />
          <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center text-white">
            <p className="inter tracking-[0.35em] text-xs sm:text-sm text-neutral-300">
              LET’S WORK TOGETHER
            </p>
            <h2 className="playfair mt-4 text-3xl font-semibold sm:text-4xl lg:text-5xl">
              Want to talk about your event?
            </h2>
            <p className="inter mt-6 max-w-2xl text-sm leading-7 text-neutral-200 sm:text-base">
              We would love to learn about your goals, your audience, and the kind of
              experience you want to create.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => setShowQuoteModal(true)}
                className="inter rounded-full bg-pink-400 px-8 py-4 text-sm font-semibold tracking-wide text-white transition hover:bg-pink-500"
              >
                Start Now
              </button>

              <a
                href={googleFormLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inter rounded-full border border-white/30 px-8 py-4 text-sm font-semibold tracking-wide text-white transition hover:bg-white/10"
              >
                Open Inquiry Form
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* FLOATING BUTTONS */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href="tel:+639178780711"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-lg transition hover:-translate-y-1"
          aria-label="Call Us"
        >
          <FaPhoneAlt />
        </a>

        <button
          onClick={() => setShowQuoteModal(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-pink-400 text-white shadow-lg transition hover:-translate-y-1"
          aria-label="Inquiry"
        >
          <FaEnvelope />
        </button>
      </div>

      {/* BACK TO TOP */}
      {showTopButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 left-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white text-neutral-900 shadow-lg ring-1 ring-neutral-200 transition hover:-translate-y-1"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}

      {/* SERVICE MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-800 shadow"
              aria-label="Close"
            >
              <FaTimes />
            </button>

            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="h-72 w-full object-cover"
            />

            <div className="p-8">
              <p className="inter text-xs uppercase tracking-[0.35em] text-neutral-500">
                Service Details
              </p>
              <h3 className="playfair mt-3 text-3xl font-semibold text-neutral-900">
                {selectedService.title}
              </h3>
              <p className="inter mt-5 text-sm leading-7 text-neutral-600">
                {selectedService.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    setShowQuoteModal(true);
                  }}
                  className="inter rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
                >
                  Request This Service
                </button>

                <a
                  href={googleFormLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inter rounded-full border border-neutral-300 px-6 py-3 text-center text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
                >
                  Open Inquiry Form
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* QUOTE MODAL */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6">
          <div className="relative w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
            <button
              onClick={() => setShowQuoteModal(false)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-800"
              aria-label="Close"
            >
              <FaTimes />
            </button>

            <p className="inter text-xs uppercase tracking-[0.35em] text-neutral-500">
              Request a Quote
            </p>
            <h3 className="playfair mt-3 text-3xl font-semibold text-neutral-900">
              Tell us about your event
            </h3>
            <p className="inter mt-3 text-sm leading-7 text-neutral-600">
              Fill in the details below, then continue to our inquiry form.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                value={quoteForm.name}
                onChange={handleQuoteChange}
                placeholder="Name"
                className="inter w-full rounded-2xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
              />
              <input
                type="text"
                name="company"
                value={quoteForm.company}
                onChange={handleQuoteChange}
                placeholder="Company"
                className="inter w-full rounded-2xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
              />
              <input
                type="email"
                name="email"
                value={quoteForm.email}
                onChange={handleQuoteChange}
                placeholder="Email Address"
                className="inter w-full rounded-2xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
              />
              <input
                type="text"
                name="phone"
                value={quoteForm.phone}
                onChange={handleQuoteChange}
                placeholder="Phone Number"
                className="inter w-full rounded-2xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
              />
              <input
                type="text"
                name="eventType"
                value={quoteForm.eventType}
                onChange={handleQuoteChange}
                placeholder="Event Type"
                className="inter w-full rounded-2xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
              />
              <input
                type="text"
                name="budget"
                value={quoteForm.budget}
                onChange={handleQuoteChange}
                placeholder="Budget Range"
                className="inter w-full rounded-2xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
              />
              <input
                type="text"
                name="date"
                value={quoteForm.date}
                onChange={handleQuoteChange}
                placeholder="Preferred Date"
                className="inter sm:col-span-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
              />
              <textarea
                name="message"
                value={quoteForm.message}
                onChange={handleQuoteChange}
                placeholder="Tell us more about your requirements"
                rows="4"
                className="inter sm:col-span-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
              />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={buildPrefilledGoogleFormUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inter rounded-full bg-black px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Continue to Inquiry Form
              </a>

              <button
                onClick={() => setShowQuoteModal(false)}
                className="inter rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Homepage;
