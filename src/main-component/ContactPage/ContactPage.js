import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
// import NavbarS2 from "../../components/NavbarS2/NavbarS2";
import PageTitle from "../../components/pagetitle/PageTitle";
import Contactpage from "../../components/Contactpage/Contactpage";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";

import Logo from "../../images/logo-2.svg";
import logo from "../../images/Untitleddesign.png";

const ContactPage = () => {
  return (
    <Fragment>
      <Navbar hclass={"wpo-site-header"} Logo={logo} />
      {/* <NavbarS2 hclass={"wpo-site-header"} Logo={Logo} /> */}
      <PageTitle pageTitle={"Contact Us"} pagesub={"Contact"} />
      <Contactpage />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ContactPage;
