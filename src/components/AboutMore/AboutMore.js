import { CgArrowLongRight } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutMore = () => {
  const aboutMore = [
    {
      id: 1,
      name: `Web Development`,
      describe: `Create and maintain professional websites, e-commerce and web applications.`
    },
    {
      id: 2,
      name: `Graphic Design`,
      describe: `Create visually appealing designs for marketing materials.`,
    },
    {
      id: 3,
      name: `Search Engine Optimization (SEO)`,
      describe: `Improve website visibility and ranking on search engines.`,
    },
    {
      id: 4,
      name: `Social Media Management`,
      describe: ` Manage social media accounts and increase online presence.`,
    },
  ];

  return (
    <>
      <section className="about__area pb-100 pt-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 ">
              <div className="common-section">
                <div className="about__content">
                  <div className="section__title mb-25">
                    <span>Why Choose Us?</span>
                    <h2 className="about-heading">
                    Providing the top notch services regarding
                    </h2>
                    <div className="parent">
                      {aboutMore.map((aboutItem) => {
                        const { id, name, describe } = aboutItem;
                        return (
                          <div className="about___more">
                            <h3>
                              <span className="about_id">0{id}</span>
                              {name}
                            </h3>
                            <p className="about__describe">{describe}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 pr-0 col-lg-6">
              <div className="about-more-img">
                <img src="assets/img/20.jpg" alt="" />
                <div className="about__shape">
                  {/* <img src="assets/instaquirkbg/2.jpg" alt=""/> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMore;
