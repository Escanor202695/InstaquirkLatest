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
                  <h2>What We Do?</h2>
                </div>
                <p>
                  For companies of all sizes, our firm specializes in providing
                  complete digital solutions. While our graphics department
                  creates eye-catching designs to distinguish your business, our
                  team of skilled developers can build specialized websites
                  adapted to your particular demands.
                  <br />
                  <br /> In order to help your website rank higher and become
                  more visible on search engines, we also provide search engine
                  optimization (SEO) services. For you to establish a strong
                  online presence and interact with your target audience, we
                  also offer thorough social media management services.
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
                      page="/web_development"
                      icon={<BsMicrosoft />}
                      title="Web Development"
                      desc="Create and maintain professional websites, e-commerce and web applications."
                    />
                    <HomeTwoSingleFeature
                      page="/graphic_details"
                      icon={<SiAntdesign />}
                      title="Graphic Design"
                      desc="Create visually appealing designs for marketing materials."
                    />
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <HomeTwoSingleFeature
                      page="/social_media_management"
                      icon={<GiDigitalTrace />}
                      title="Social Media Management & Marketing"
                      desc="Manage social media accounts and increase online presence."
                    />
                    <HomeTwoSingleFeature
                      page="/seo"
                      icon={<AiOutlineSearch />}
                      title="SEO"
                      desc="Improve website visibility and ranking on search engines."
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
