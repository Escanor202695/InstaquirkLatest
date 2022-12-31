import { CgArrowLongRight } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutMore = () => {
  const aboutMore = [
    {
      id: 1,
      name: `We Believe In Creativity`,
      describe: `As an unemployment service provider,
       we assist clients in finding employment.Assisting professionals and giving them creative ideas to grow their business`,
    },
    {
      id: 2,
      name: `How can we help`,
      describe: `The client shares his problem with us, and we then offer advice based on our experience`,
    },
    {
      id: 3,
      name: `we help you to build your career`,
      describe: `we offer courses in Web Development, Graphics Design, Full Stack SEO, and Social Media Management & Marketing to build your career`,
    },
    {
      id: 4,
      name: `We believe in relation`,
      describe: `Our goal is to build relationships with our clients by helping them succeed in their business. We give them our most sincere effort to make his business or career`,
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
                    <span>SOME REASONS TO WORK TOGETHER</span>
                    <h2 className="about-heading">
                      Our Goal Is Clients’ Success And Future Growth
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
