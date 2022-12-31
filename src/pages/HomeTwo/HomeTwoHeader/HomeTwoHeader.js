/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Sidebar from "../../../components/Sidebar/Sidebar";
import useGlobalContext from "../../../hooks/useGlobalContext";

const HomeTwoHeader = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { stickyMenu } = useGlobalContext();
  return (
    <>
      <header>
        <div className="header__area p-relative header__transparent">
          <div
            id="header__sticky"
            className={
              stickyMenu
                ? "sticky header__bottom header__bottom-2"
                : "header__bottom header__bottom-2"
            }
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
                            <a className="services-item">Services</a>
                            <ul>
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
                                  Graphic Design
                                </NavLink>
                              </li>{" "}
                              <li>
                                <NavLink
                                  to="/social_media_management"
                                  className="dropdown-item social-item"
                                >
                                  Social Media Management & Marketing
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
        </div>
      </header>

      <Sidebar show={show} handleClose={handleClose} />
    </>
  );
};

export default HomeTwoHeader;