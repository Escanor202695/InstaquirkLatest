
import React from "react";
import { Link } from "react-router-dom";

const HomeTwoAchievement = () => {
  return (
    <>
      <section className="achievement__area py-[2rem] pb-[3rem] md:py-[5rem] md:pb-[8rem]">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-6">
              <div className="common-section">
                <div className="achievement__content">
                  <div className="section__title section__title-3 mb-20">
                   
                    <h2>Achieving digital excellence. </h2>
                  </div>
                  <p>
                  Our specialized SEO, graphics, and web building services may completely change your online profile. Utilize our team of committed professionals to stand out, increase traffic, and expand your business. Phone us right away!
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
                      <h3>Customized Approach</h3>
                    </div>
                    <div className="achievement__item mb-30">
                      <img
                        className="img-icon"
                        src="assets/img/icon/achievement/achievement-2.png"
                        alt="achievement"
                      />
                      <h3>Precise Requirements Analysis </h3>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="z-btn"
                
                  >
                    Contact Us
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

