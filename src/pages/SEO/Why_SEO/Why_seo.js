import React from "react";
import { FaCheck } from "react-icons/fa";

function Why_seo() {
  return (
    <>
      <div className="pt-100 web-dev">
        <div className="parent">
          <div className="web-development text-center mb-100 Seo visible-item">
            <img
              src="/assets/instaquirkbg/36.jpg"
              alt="vector"
              className="w-full h-auto"
            />
          </div>
          <div className="web-development-details why___seo">
            <h1>Why SEO ?</h1>
            <p>
              In short, SEO is crucial because it makes your website more
              visible, and that means more traffic and more opportunities to
              convert prospects into customers. Check out the SEO tools you can
              use for optimal ranking.
            </p>
          </div>
          <div className="web-development text-center mb-100 Seo invisible-item">
            <img
              src="/assets/instaquirkbg/36.jpg"
              alt="vector"
              className="w-full h-auto"
            />
          </div>
          <div className="web-seo">
            <h3>
              What is the significance <br /> of SEO?
            </h3>

            <div className="about__list">
              <ul>
                <li>
                  <span>
                    <i>
                      {" "}
                      <FaCheck />{" "}
                    </i>
                    Improve the user experience and usability of a website.
                  </span>
                </li>
                <li>
                  <span>
                    <i>
                      {" "}
                      <FaCheck />{" "}
                    </i>
                    Makes Your Website Easier To Navigate
                  </span>
                </li>
                <li>
                  <span>
                    <i>
                      {" "}
                      <FaCheck />{" "}
                    </i>
                    Brings More People To Your Website
                  </span>
                </li>
                <li>
                  <span>
                    <i>
                      {" "}
                      <FaCheck />{" "}
                    </i>
                    You Get More Credibility & Trust.
                  </span>
                </li>
                <li>
                  <span>
                    <i>
                      {" "}
                      <FaCheck />{" "}
                    </i>
                    You Can Expand Your Business
                  </span>
                </li>
                <li>
                  <span>
                    <i>
                      {" "}
                      <FaCheck />{" "}
                    </i>
                    You Get A Greater Internet Presence{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="web-development text-center mb-100 Seo_section">
            <img
              src="assets/instaquirkbg/37.jpg"
              alt="vector"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Why_seo;
