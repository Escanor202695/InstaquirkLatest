import { useState } from "react";
import {
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Sidebar from "../../../components/Sidebar/Sidebar";
import useGlobalContext from "../../../hooks/useGlobalContext";

const HomeOneHeader = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { stickyMenu } = useGlobalContext();
  return (
    <>
      <header>
        <div className="header__area p-relative header__transparent">
          <div className="header__top d-none d-md-block">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-5 col-md-4">
                  <div className="header__social">
                    <ul>
                      {/*<li>
                        <a href="#">
                          <i>
                            <FaFacebookF />
                          </i>{" "}
                        </a>
  </li>
                      <li>
                        <a href="#" className="border-2 border-red-600 transform translate-x-1/3 translate-y-1/3">
                          <i>
                            <FaLinkedinIn />
                          </i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i>
                            <FaInstagram />
                          </i>
                        </a>
</li>*/}
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7 col-md-8">
                  <div className="header__info f-right">
                    {/*<div>
                      <div><FaPhoneAlt /></div>
                      <div>+8801517310359</div>
</div>*/}
                    <a href="https://mail.google.com/" className="flex text-sm text-white items-center gap-2 py-[.75rem]">
                      <div>
                        <FaEnvelope />{" "}
                      </div>
                      <div>support@instaquirk.agency</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="header__sticky"
            className={stickyMenu ? "sticky header__bottom" : "header__bottom"}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div
                    className="logo"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img src="assets/img/logo/logo-gradient.png" alt="logo" />
                    <div
                      className="brandName"
                      style={{
                        fontSize: "25px",
                        color: "white",
                        marginLeft: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      Instaquirk
                    </div>
                  </div>
                  <div className="logo-gradient">
                    <NavLink to="/">
                      <img src="assets/img/logo/logo-gradient.png" alt="logo" />
                    </NavLink>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  <div className="header__bottom-right d-flex justify-content-end align-items-center">
                    <div className="main-menu menu_wrapper_one">
                      <nav id="mobile-menu">
                        <ul className="drop-down-menu">
                          <li>
                            <NavLink to="/">Home</NavLink>
                          </li>
                          <li>
                            <NavLink to="/about">About Us </NavLink>
                          </li>
                          <li>
                            <a className="services-item cursor-pointer">
                              Services
                            </a>
                            <ul className="border-t-4 border-[#4536FF] flex-col max-w-[16rem] mt-[-.5rem] ">
                              <li>
                                <NavLink
                                  to="/web_development"
                                  className="dropdown-item"
                                >
                                  Web Development
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/graphic_details"
                                  className="dropdown-item"
                                >
                                  Graphics Design
                                </NavLink>
                              </li>{" "}
                              <li>
                                <NavLink
                                  to="/social_media_management"
                                  className="dropdown-item social-item"
                                >
                                  Social Media Management
                                </NavLink>
                              </li>{" "}
                              <li>
                                <NavLink to="/seo" className="dropdown-item">
                                  SEO
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                          {/*<li>
                            <NavLink to="/portfolio">Insights</NavLink>
                          </li>*/}

                          <li>
                            <NavLink to="/contact">Contact Us</NavLink>
                          </li>
                        </ul>
                      </nav>
                    </div>

                    <div className="header__btn d-none d-sm-block d-xl-block ml-50">
                      <Link
                        to="/contact"
                        className="z-btn z-btn-white z-btn-white-2"
                      >
                        Get a Quote
                      </Link>
                    </div>
                    <div
                      onClick={handleShow}
                      className="sidebar__menu d-lg-none"
                    >
                      <div className="sidebar-toggle-btn" id="sidebar-toggle">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<div className="header__search-wrapper">
                  <div className="container">
                     <div className="row">
                        <div className="col-xl-12">
                           <form action="#">
                              <input type="text" placeholder="Your Keywords" />
                              <button type="button"><i > <FaSearch/> </i></button>
                           </form>
                        </div>
                     </div>
                  </div>
         </div>*/}
          <div className="body-overlay-2"></div>
        </div>
      </header>

      <Sidebar show={show} handleClose={handleClose} />
    </>
  );
};

export default HomeOneHeader;
