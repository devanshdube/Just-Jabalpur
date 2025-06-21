import React, { Fragment, useRef } from "react";
// import Navbar from "../../components/Navbar/Navbar";
// import Hero from "../../components/hero/hero";
import NavbarS2 from "../../components/NavbarS2/NavbarS2";
import Hero2 from "../../components/hero2/Hero2";
import PartnerSection from "../../components/PartnerSection/PartnerSection";
import FunFact from "../../components/FunFact/FunFact";
import About from "../../components/about/about";
import EventSection from "../../components/EventSection/EventSection";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import CausesSection from "../../components/CausesSection/CausesSection";
import CtaSection from "../../components/CtaSection/CtaSection";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import Testimonial from "../../components/Testimonial/Testimonial";
import ProcessSection from "../../components/ProcessSection/ProcessSection";
import InstagamSection from "../../components/InstagamSection/InstagamSection";
import BlogSection from "../../components/BlogSection/BlogSection";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Logo from "../../images/logo-2.svg";

const HomePage = () => {
  const aboutRef = useRef(null);
  const eventsRef = useRef(null);
  const servicesRef = useRef(null);
  const blogRef = useRef(null);
  const galleryRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Fragment>
      {/* <Navbar hclass={"wpo-site-header"} Logo={Logo} />
      <Hero hclass={"wpo-hero-slider"} /> */}
      <NavbarS2
        hclass={"wpo-site-header"}
        Logo={Logo}
        onAboutClick={() => scrollToSection(aboutRef)}
        onServiceClick={() => scrollToSection(servicesRef)}
        onEventsClick={() => scrollToSection(eventsRef)}
        onBlogClick={() => scrollToSection(blogRef)}
      />
      <Hero2 />
      {/* <PartnerSection hclass={"partners-section"} /> */}
      <FunFact />
      <div ref={aboutRef}>
        <About hclass={"about-section section-padding"} />
      </div>

      <EventSection />
      <div ref={servicesRef}>
        <ServiceSection />
      </div>

      <CausesSection hclass={"causes-section section-padding pt-0"} />
      {/* <CtaSection hclass={"cta-section"} /> */}
      <ProjectSection hclass={"project-section"} />
      {/* <Testimonial tClass={"testimonial-section"} /> */}
      {/* <ProcessSection /> */}
      <div ref={eventsRef}>
        <InstagamSection hclass={"instagam-section section-padding pb-0"} />
      </div>
      <div ref={blogRef}>
        <BlogSection tClass={"blog-section section-padding"} />
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default HomePage;
