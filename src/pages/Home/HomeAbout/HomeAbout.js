
import { CgArrowLongRight } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";



const HomeAbout = ({ opacity }) => {
  return (
    <>
      <section className="about__area md:pb-[100px] pt-100">
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
                   
                    <h2 className="about-heading">
                      Dreams Get Into Reality
                    </h2>
                  </div>
                  <p>
                    We are committed to customers success from start to finish.
                    Our input helps make their solutions stand out from the
                    crowd.
                  </p>
                  <div className="">
                    <ul>
                      <li>
                        <span className="flex gap-2 hover:text-[#4536ff] group items-center my-2">
                          <i className="text-[#4536FF]  bg-[#EDF2F7] text-[8.5px] group-hover:text-white group-hover:bg-[#4536ff] transition-colors  items-center flex justify-center  rounded-full h-[18px] w-[18px] ">
                            
                            <FaCheck />
                          </i>
                          Creative ideas
                        </span>
                      </li>
                      <li>
                        <span className="flex gap-2 hover:text-[#4536ff] group items-center my-2">
                          <i className="text-[#4536FF]  bg-[#EDF2F7] text-[8.5px] group-hover:text-white group-hover:bg-[#4536ff] transition-colors text-sm items-center flex justify-center  rounded-full h-[18px] w-[18px] ">
                            
                            <FaCheck />
                          </i>
                          Professional assistance
                        </span>
                      </li>
                      <li>
                        <span className="flex gap-2 hover:text-[#4536ff] group items-center my-2">
                          <i className="text-[#4536FF]  bg-[#EDF2F7] text-[8.5px] group-hover:text-white group-hover:bg-[#4536ff] transition-colors text-sm items-center flex justify-center  rounded-full h-[18px] w-[18px] ">
                            
                            <FaCheck />
                          </i>
                          Assisting professionals
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



