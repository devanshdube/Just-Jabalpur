import React from "react";
import causes from "../../api/causes";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import shape from "../../images/causes/shape.svg";
import shape2 from "../../images/causes/bg.jpg";

const CausesSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1699,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  console.log(causes);

  return (
    <section className={"" + props.hclass}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="section-title">
              <span>Empowering communities through education and care.</span>
              <h2>
                Together, we can build a better <span>future</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="causes-slider">
        <Slider {...settings}>
          {causes.map((causesData, item) => (
            <div className="causes-card" key={item}>
              <div className="image">
                {/* <span>{causesData.tag}</span> */}
                <img src={causesData.Cimg} alt="" />
              </div>
              {/* <div className="text">
                                <h2><Link onClick={ClickHandler} to={`/causes-single/${causesData.slug}`}>{causesData.title}</Link></h2>
                                <p>{causesData.docomunt}</p>
                            </div>
                            <div className="progress-wrap">
                                <div className="progress-item">
                                    <div className="progress">
                                        <div className="bar" style={{ width: `${causesData.progress}%` }}>
                                            <span className="cssProgress-label">{causesData.progress}%</span>
                                        </div>
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                        <span className="title">Goal:</span>
                                        <span>${causesData.goal}</span>
                                    </li>
                                    <li>
                                        <span className="title">Raised:</span>
                                        <span>${causesData.raised}</span>
                                    </li>
                                    <li>
                                        <span className="title">Goal:</span>
                                        <span>${causesData.targetGoal}</span>
                                    </li>
                                </ul>
                            </div> */}
            </div>
          ))}
        </Slider>
      </div>
      <div className="shape">
        <img src={shape} alt="" />
      </div>
      <div className="shape-2">
        <img src={shape2} alt="" />
      </div>
    </section>
  );
};

export default CausesSection;
