
import React from "react";
import { Link } from "react-router-dom";

const SingleExpartContent = ({ image, position, heading, description }) => {
  return (
    <>
      <div className="expart__tab-content white-bg">
        <div
          className="expart__thumb"
          style={{
            background: `url(assets/img/expart/expart-${image}.jpg)`,
            backgroundPosition: `${position}`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 offset-lg-6">
            <div className="expart__content">
              <h3>
                {heading}
              </h3>
              <p>
                {description}
              </p>
              <Link to="/about" className="z-btn">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default SingleExpartContent;

