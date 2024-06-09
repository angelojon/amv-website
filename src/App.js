import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Homepage from "./pages/index";
import OurTeam from "./pages/aboutus-ourteam";
import WhyAmv from "./pages/aboutus-whyamv";
import ContactUs from "./pages/contactus";
import Gallery from "./pages/gallery";
import Services from "./pages/services";

import Footer from "./footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about/our-team" element={<OurTeam />} />
            <Route path="/about/why-amv" element={<WhyAmv />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />

            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
