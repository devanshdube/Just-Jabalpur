import React from "react";
import { Link } from "react-router-dom";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

const HeaderTopbarS2 = () => {
  return (
    <div className="topbar">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <ul className="contact-info">
              <li>
                <Link to="tel:+919713685500">
                  <i className="flaticon-phone-1"></i>
                  <span>+91 9713685500</span>
                </Link>
              </li>
              <li>
                <i className="ti-email"></i>
                <span>justjabalpurinstitute@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-12">
            <div className="contact-into">
              <ul className="social-media">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61573925340262"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="flaticon-facebook-app-symbol"></i>
                  </a>
                </li>
                <li>
                  <Link to="#">
                    <i className="flaticon-linkedin"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="flaticon-camera"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="flaticon-vimeo"></i>
                  </Link>
                </li>
              </ul>
              {/* <div className="pryment-selector">
                <select>
                  <option value="usd">USD</option>
                  <option value="aud">AUD</option>
                </select>
              </div> */}
              {/* <LanguageSelector /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopbarS2;
