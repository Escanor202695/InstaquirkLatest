
import React from "react";
import { Link } from "react-router-dom";

const HomeTwoAchievement = ({ opacity }) => {
  return (
    <>
      <section className="achievement__area pt-135 pb-40 ">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-6">
              <div className="common-section">
                <div className="achievement__content">
                  <div className="section__title section__title-3 mb-20">
                    <span>Solution</span>
                    <h2>We provide the best solutions for your business </h2>
                  </div>
                  <p>
                    For your business, we offer the most effective solutions.
                    Providing the most excellent service to our clients is
                    always our top priority.In order to ensure that no client is
                    at risk as a result of his negligence
                  </p>
                  <div
                    className="achievement__wrapper d-flex d-md-block d-lg-flex justify-content-between mb-35 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <div className="achievement__item mb-30">
                      <img
                        src="assets/img/icon/achievement/achievement-1.png"
                        alt="achievement"
                      />
                      <h3>Acquisitions assist consulting</h3>
                    </div>
                    <div className="achievement__item mb-30">
                      <img
                        className="img-icon"
                        src="assets/img/icon/achievement/achievement-2.png"
                        alt="achievement"
                      />
                      <h3>Consultancy for private placements</h3>
                    </div>
                  </div>
                  <Link
                    to="/about"
                    className="z-btn"
                    style={{ opacity: `${opacity}` }}
                  >
                    Explore More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-6">
              <div className="row">
                <div className="col-xl-7 col-sm-6">
                  <div className="achievement__thumb m-img pl-30 text-right">
                    <img
                      src="assets/img/achievement/success.jpg"
                      alt="achievement-1"
                    />
                  </div>
                </div>
                <div className="col-xl-5 col-sm-6 d-md-none d-lg-none d-xl-block">
                  <div className="achievement__thumb w-img">
                    <img src="assets/img/achievement/44-2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeTwoAchievement;

