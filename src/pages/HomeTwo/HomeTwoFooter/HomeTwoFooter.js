import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import {} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const HomeTwoFooter = () => {
  return (
    <>
      <footer>
        <div className="footer__area grey-bg pt-100">
          <div className="footer__top pb-45">
            <div className="container">
              <div
                className="row"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                  <div className="footer__widget mb-45">
                    <div className="footer__widget-title mb-30">
                      <div className="logo">
                        <Link to="/">
                          <img
                            src="assets/img/logo/logo-gradient.png"
                            alt=""
                            style={{ width: "80px", height: "80px" }}
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="footer__widget-content">
                      <p className="mb-30 text-sm">
                        Copyright © 2022 All Rights Reserved by Instaquirk
                      </p>
                      <div className="footer__social theme-social mb-30">
                        <ul>
                          <li>
                            <a href="#">
                              <i>
                                <FaLinkedinIn />
                              </i>
                              <i>
                                <FaLinkedinIn />
                              </i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i>
                                <FaTwitter />{" "}
                              </i>
                              <i>
                                <FaTwitter />{" "}
                              </i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i>
                                <FaInstagram />{" "}
                              </i>
                              <i>
                                <FaInstagram />{" "}
                              </i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                  <div className="footer__widget mb-45">
                    <div className="footer__widget-title">
                      <h4>Company</h4>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__links">
                        <ul>
                          <li>
                            <a href="/homeTwo">Home</a>
                          </li>
                          <li>
                            <NavLink to="/about">About</NavLink>
                          </li>

                          <li>
                            <a href="/contact">Contact Us</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                  <div className="footer__widget mb-45">
                    <div className="footer__widget-title">
                      <h4>Services</h4>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__links">
                        <ul>
                          <li>
                            <NavLink to="/seo">SEO</NavLink>
                          </li>
                          <li>
                            <NavLink to="/web_development">
                              Web Development
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/graphic_details">
                              Graphics Design
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/social_media_management">
                              Social Media Management
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                           <div className="footer__widget mb-45">
                              <div className="footer__widget-title">
                                 <h4>Newsletter</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__subscribe">
                                    <p className="mb-30">Subscribe to out newsletter today to receive updates on the latest news</p>
                                    <div className="footer__subscribe-form p-relative">
                                       <form action="#">
                                          <input type="email" placeholder="Email Address"/>
                                             <button type="submit">Subscribe</button>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                           </div>
                  </div>*/}
                <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                  <div className="footer__widget mb-45">
                    <div className="footer__widget-title">
                      <h4>Contact Us</h4>
                    </div>
                    <div className="">
                      <div className="">
                        <ul>
                          <li className="flex gap-2 py-1 items-center">
                            <div className=" ">
                              <i className="text-[#4536ff] text-xl ">
                                {" "}
                                <FaEnvelope />{" "}
                              </i>
                            </div>
                            <div className="text  font-semibold theme-color ">
                              <span>
                                <a
                                  href="mailto:support@Instaquirk.com"
                                  className="pl-2 "
                                >
                                  support@instaquirk.agency
                                </a>
                              </span>
                            </div>
                          </li>
                          <li className="flex gap-2 py-1 items-center">
                            <div className="icon theme-color  pt-2 mr-1 ">
                              <i className="text-[#4536ff] text-2xl">
                                <FaWhatsapp />{" "}
                              </i>
                            </div>
                            <div className="text theme-color font-semibold pt-1">
                              <span>
                                <a href="tel:(+642)-394-396-432">
                                  +8801538425875
                                </a>
                              </span>
                            </div>
                          </li>
                          <li className="flex gap-2 py-1 items-center">
                            <div className="icon pt-2 mr-1">
                              <i className="text-[#4536ff] text-2xl">
                                {" "}
                                <BiMap />{" "}
                              </i>
                            </div>
                            <div className="text font-semibold pt-1">
                              <span>Dhaka, Bangladesh.</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomeTwoFooter;
