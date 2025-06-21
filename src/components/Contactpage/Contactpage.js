import React from "react";
import ContactForm from "../ContactFrom/ContactForm";

const Contactpage = () => {
  return (
    <section className="contact-page section-padding">
      <div className="container">
        <div className="office-info">
          <div className="row">
            <div className="col col-lg-4 col-md-6 col-12">
              <div className="office-info-item">
                <div className="office-info-icon">
                  <div className="icon">
                    <i className="fi flaticon-home-address"></i>
                  </div>
                </div>
                <div className="office-info-text">
                  <h2>address line</h2>
                  <p>
                    1601/1b, near watar tank purwa
                    <br /> Garha, Jabalpur
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-12">
              <div className="office-info-item active">
                <div className="office-info-icon">
                  <div className="icon">
                    <i className="fi flaticon-phone-call"></i>
                  </div>
                </div>
                <div className="office-info-text">
                  <h2>Phone Number</h2>
                  <p>+91 9713685500</p>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-12">
              <div className="office-info-item">
                <div className="office-info-icon">
                  <div className="icon">
                    <i className="fi flaticon-mail-1"></i>
                  </div>
                </div>
                <div className="office-info-text">
                  <h2>Email Address</h2>
                  <p>justjabalpurinstitute@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-wrap">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="contact-left">
                <h2>Get in touch</h2>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit mattis
                  faucibus odio feugiat arc dolor.
                </p> */}
                <div className="map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58690.609562530924!2d79.928598!3d23.1642467!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ae1c0d3ba9a1%3A0xeb8736542a75172f!2sJust%20Jabalpur%20Institute!5e0!3m2!1sen!2sin!4v1750231539980!5m2!1sen!2sin"></iframe>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6 col-12">
              <div className="contact-right">
                <div className="title">
                  <h2>Fill Up The Form</h2>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                </div>
                <ContactForm />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
