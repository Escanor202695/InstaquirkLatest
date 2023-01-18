import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";

const HomeTwoSingleFeature = ({ icon, title, desc,page }) => {
  return (
    <>
      <div className="features__item features__item-2 white-bg fix mb-30">
        <div
          className="features__thumb-2"
          style={{
            background: `url(assets/img/features/02/ftrs.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="features__content-2">
          <div className="features__icon features__icon-2">
            <i> {icon} </i>
          </div>
          <h3>{title}</h3>
          <p>{desc}</p>
          <div className="features__btn-2">
            <Link to={page} className="link-btn">
              <i>
                {" "}
                <CgArrowLongRight />{" "}
              </i>
              <i>
                {" "}
                <CgArrowLongRight />{" "}
              </i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTwoSingleFeature;
