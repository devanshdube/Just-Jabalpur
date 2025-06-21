import React from "react";
import CountUp from "react-countup";
import Shape from "../../images/funfuck-shape.svg";

const FunFact = () => {
  return (
    <section className="funfact-section section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="content">
              <h2>Empowering Communities Through Action</h2>
              <h3>
                We educate, uplift & <span>transform</span> lives
              </h3>
              <p>
                Our NGO is committed to driving change through education,
                hygiene awareness, and skill development. We believe that with
                collective effort, every community can thrive.
              </p>
              <a
                href="tel:+91 9713685500
"
              >
                <i className="flaticon-phone-call"></i>
                <span>+91 9713685500</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="funfact">
              <ul>
                <li>
                  <div className="count">
                    <h3>
                      <CountUp end={200} enableScrollSpy />+
                    </h3>
                  </div>
                  <span>Educated</span>
                </li>
                <li>
                  <div className="count">
                    <h3>
                      <CountUp end={120} enableScrollSpy />+
                    </h3>
                  </div>
                  <span>Cleanliness drives conducted</span>
                </li>
                <li>
                  <div className="count">
                    <h3>
                      <CountUp end={300} enableScrollSpy />+
                    </h3>
                  </div>
                  <span>Women trained in skills</span>
                </li>
                <li>
                  <div className="count">
                    <h3>
                      <CountUp end={98} enableScrollSpy />%
                    </h3>
                  </div>
                  <span>Campaign success rate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="shape">
        <img src={Shape} alt="decorative shape" />
      </div>
    </section>
  );
};

export default FunFact;
