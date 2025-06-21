import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo-2.svg";
import Services from "../../api/Services";

import shape1 from "../../images/f-shape1.svg";
import shape2 from "../../images/f-shape-2.svg";
import shape3 from "../../images/f-shape3.svg";
import shape4 from "../../images/f-shape4.svg";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const Footer = (props) => {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    setEmail("");
  };
  return (
    <footer className="wpo-site-footer">
      <div className="footer-socialicon">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61573925340262"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="flaticon-facebook-app-symbol"></i>{" "}
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <i className="flaticon-twitter"></i> <span>Twitter</span>
          </li>
          {/* <li>
            <i className="ti-pinterest-alt"></i> <span>Pinterest</span>
          </li> */}
          <li>
            <i className="flaticon-youtube"></i> <span>youtube</span>
          </li>
          <li>
            <a
              href="https://www.instagram.com/jabaliparamedicalinstitute/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i> <span>Instagram</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget newsletter-s2">
                <div className="widget-title">
                  <h3>Subscribe to Our Newsletter</h3>
                </div>
                <p>
                  Stay updated on our latest educational initiatives, community
                  programs, and opportunities to support underprivileged
                  students through our NGO services.
                </p>

                {/* <form className="form-fild">
                  <input
                    className="fild"
                    type="text"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="button" onClick={handleReset}>
                    <i className="flaticon-right-arrow"></i>
                  </button>
                </form> */}
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget ">
                <div className="widget-title">
                  <h3>Services</h3>
                </div>
                <ul>
                  {Services.slice(0, 5).map((service, Sitem) => (
                    <li key={Sitem}>
                      {service.title}
                      {/* <Link
                        onClick={ClickHandler}
                        to={`/service-single/${service.slug}`}
                      >
                        
                      </Link> */}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget ">
                <div className="widget-title">
                  <h3>Useful links</h3>
                </div>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="#">
                      about us
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="#">
                      service
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="#">
                      blog
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/contact">
                      contact us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget locations-widget ">
                <div className="widget-title">
                  <h3>Locations</h3>
                </div>
                <p>1601/1b near watar tank purwa, Garha, Jabalpur, M.P</p>
                <ul>
                  <li>Contact</li>
                  <li>justjabalpurinstitute@gmail.com</li>
                  <li>+91 9713685500</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <p className="copyright">
                &copy; 2025{" "}
                <a
                  href="https://doaguru.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DOAGuru InfoSystems
                </a>{" "}
                . All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="shape">
        <img src={shape1} alt="" />
      </div>
      <div className="shape1">
        <img src={shape2} alt="" />
      </div>
      <div className="shape2">
        <img src={shape3} alt="" />
      </div>
      <div className="shape3">
        <img src={shape4} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
