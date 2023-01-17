import React from "react";
import { BiLock } from "react-icons/bi";
import { CgArrowLongRight } from "react-icons/cg";
import { GiDigitalTrace } from "react-icons/gi";
import { BsMicrosoft } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import HomeTwoSingleFeature from "../../../components/HomeTwoSingleFeature/HomeTwoSingleFeature";

const HomeTwoFeatures = () => {
  return (
    <>
      <section className="features__area pt-115 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="features__content-left">
                <div className="section__title section__title-h2 mb-25">
                  
                  <h2>
                    What We Do?
                  </h2>
                </div>
                <p>
                For companies of all sizes, our firm specializes in providing complete digital solutions. While our graphics department creates eye-catching designs to distinguish your business, our team of skilled developers can build specialized websites adapted to your particular demands.<br/><br/> In order to help your website rank higher and become more visible on search engines, we also provide search engine optimization (SEO) services. For you to establish a strong online presence and interact with your target audience, we also offer thorough social media management services.
                </p>
                <Link to="/about" className="z-btn">
                  Explore More
                  <i>
                    <CgArrowLongRight />
                  </i>
                </Link>
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1 col-lg-6">
              <div className="features__content-right">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <HomeTwoSingleFeature
                      icon={<BsMicrosoft />}
                      title="Web Development"
                      desc="We will provide you with our excellent services for Web Development"
                    />
                    <HomeTwoSingleFeature
                      icon={<SiAntdesign />}
                      title="Graphic Designer"
                      desc="We will provide you with our excellent services for Graphic Design"
                    />
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <HomeTwoSingleFeature
                      icon={<GiDigitalTrace />}
                      title="Social Media Management & Marketing"
                      desc="We will provide you with our excellent services for Social Media Management & Marketing"
                    />
                    <HomeTwoSingleFeature
                      icon={<AiOutlineSearch />}
                      title="SEO"
                      desc="We will provide you with our excellent services for full stack SEO"
                    />
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

export default HomeTwoFeatures;
