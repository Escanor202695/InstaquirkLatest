
import { CgArrowLongRight } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";



const HomeAbout = ({ opacity }) => {
  return (
    <>
      <section className="about__area pb-200 pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 pr-0 col-lg-6">
              <div className="about__thumb m-img">
                <img src="assets/instaquirkbg/31.jpg" alt="" />
                <div className="about__shape">
                  {/* <img src="assets/instaquirkbg/2.jpg" alt=""/> */}
                </div>
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-5 offset-lg-1">
              <div className="common-section">
                <div className="about__content">
                  <div className="section__title mb-25">
                    <span>Who we are</span>
                    <h2 className="about-heading">
                      We Conceive And Translate Our Clients Dreams Into Reality
                    </h2>
                  </div>
                  <p>
                    We are committed to customers success from start to finish.
                    Our input helps make their solutions stand out from the
                    crowd.
                  </p>
                  <div className="about__list">
                    <ul>
                      <li>
                        <span>
                          <i>
                            {" "}
                            <FaCheck />{" "}
                          </i>
                          Creative ideas{" "}
                        </span>
                      </li>
                      <li>
                        <span>
                          <i>
                            {" "}
                            <FaCheck />{" "}
                          </i>
                          Professional assistance
                        </span>
                      </li>
                      <li>
                        <span>
                          <i>
                            {" "}
                            <FaCheck />{" "}
                          </i>
                          Assisting professionals{" "}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <Link
                    to="/services"
                    className="z-btn"
                    style={{ opacity: `${opacity}` }}
                  >
                    What we do
                    <i>
                      {" "}
                      <CgArrowLongRight />{" "}
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;



