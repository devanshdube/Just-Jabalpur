import React, { useState } from "react";
import { Link } from "react-router-dom";
import Instagram from "../../api/Instagram";

import BgImg from "../../images/instagam/shape.png";
import BgImg2 from "../../images/instagam/shape-2.svg";

const InstagamSection = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className={"" + props.hclass}>
      <div className="shape">
        <img src={BgImg} alt="" />
        <div className="shape-2">
          <img src={BgImg2} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title">
              <span>We are always open for children</span>
              <h2>Recent Events Post</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery-main-wrap">
        <div className="sortable-gallery">
          {Instagram.map((item) => (
            <div className="grid" key={item.id}>
              <div className="img-holder">
                <Link
                  to={item.imag}
                  className="fancybox"
                  data-fancybox-group="gall-1"
                  onClick={(e) => {
                    e.preventDefault();
                    openModal(item.imag);
                  }}
                >
                  <img
                    src={item.imag}
                    alt={`Instagram ${item.id}`}
                    className="img img-responsive"
                  />
                  <div className="hover-content">
                    <i className="flaticon-camera"></i>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-wrap">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <img src={selectedImage} alt="Modal" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InstagamSection;
