import React from "react";
import VideoModal from "../ModalVideo/VideoModal";
import { Link } from "react-router-dom";

/* image */
import Img1 from "../../images/about/about-1.jpg";
import Img3 from "../../images/about/Untitleddesign.jpg";
import Img2 from "../../images/about/about-2.jpg";
import Img4 from "../../images/about/utilityImage.jpeg";
import CEO from "../../images/about/ceo.jpg";
import shape1 from "../../images/about/shape1.svg";
import shape2 from "../../images/about/shape2.svg";
import shape3 from "../../images/about/shape3.svg";
import shape4 from "../../images/about/shape4.svg";
import shape5 from "../../images/about/shape5.svg";
import shape6 from "../../images/about/shape6.svg";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const about = (props) => {
  return (
    <section className={"" + props.hclass}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="about-image">
              <div className="img-1">
                <img src={Img3} alt="" />
                {/* <VideoModal /> */}
              </div>
              <div className="img-2">
                <img src={Img4} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="about-content">
              <h2>We're always here for children</h2>
              <h3>
                Together, we can create a <span>better</span> future
              </h3>
              <p>
                By supporting one another, we lay the foundation for a more
                compassionate and united world. Every act of kindness builds
                hope, strengthens communities, and drives meaningful change.
              </p>

              <div className="inner-content">
                <div className="inner-item">
                  <div className="icon">
                    <i className="flaticon-charity"></i>
                  </div>
                  <div className="content">
                    <h4>Reliable and committed</h4>
                    <span>
                      We’re a trusted team dedicated to impactful initiatives
                      and community upliftment.
                    </span>
                  </div>
                </div>
                <div className="inner-item">
                  <div className="icon">
                    <i className="flaticon-medal"></i>
                  </div>
                  <div className="content">
                    <h4>Recognized for excellence</h4>
                    <span>
                      Our efforts have been honored for creating meaningful
                      changes across various communities.
                    </span>
                  </div>
                </div>
              </div>

              <ul>
                <li>
                  <i className="flaticon-check"></i>We guide organizations in
                  building impactful social responsibility strategies{" "}
                  <Link onClick={ClickHandler} to="#">
                    Learn more
                  </Link>
                </li>
                <li>
                  <i className="flaticon-check"></i>Supported over 3,000
                  initiatives aimed at helping underserved populations.
                </li>
              </ul>

              <div className="about-btn">
                <Link onClick={ClickHandler} to="/about" className="theme-btn">
                  About Us
                </Link>
                {/* <div className="ceo">
                  <div className="image">
                    <img src={CEO} alt="CEO" />
                  </div>
                  <div className="text">
                    <h4>Just Jabalpur</h4>
                    <span>CEO & Founder</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-1">
        <img src={shape1} alt="" />
      </div>
      <div className="shape-2">
        <img src={shape2} alt="" />
      </div>
      <div className="shape-3">
        <img src={shape3} alt="" />
      </div>
      <div className="shape-4">
        <img src={shape4} alt="" />
      </div>
      <div className="shape-5">
        <img src={shape5} alt="" />
      </div>
      <div className="shape-6">
        <img src={shape6} alt="" />
      </div>
    </section>
  );
};

export default about;
