
import React from "react";
import SingleExpartContent from "../../../components/SingleExpartContent/SingleExpartContent";

const HomeTwoExpertArea = () => {
  const heading1="We will guide you with expertise";
  const description1="We have lots of expert teams who can help you with their highest effort. Our team is always ready to provide immediate solutions if anyone has any concerns.";
  const heading2="Assurance of Quality Services";
  const description2="Our team of professionals and effective quality assurance method help us guarantee the quality of our services. You can rely on us for innovative solutions that satisfy clients and meet industry requirements.";
  return (
    <>
      <section
        className="expart__area pt-200 wow fadeInUp"
        data-wow-delay=".4s"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="expart__wrapper">
                <div className="expart__nav">
                  <ul
                    className="nav nav-pills justify-content-end"
                    id="expart-tab"
                    role="tablist"
                  >
                    <li className="nav-item text-center">
                      <a
                        className="nav-link active"
                        id="philosophy-tab"
                        data-bs-toggle="pill"
                        href="#philosophy"
                        role="tab"
                        aria-controls="philosophy"
                        aria-selected="true"
                      >
                        Experts
                      </a>
                    </li>
                    <li className="nav-item text-center">
                      <a
                        className="nav-link"
                        id="work-tab"
                        data-bs-toggle="pill"
                        href="#work"
                        role="tab"
                        aria-controls="work"
                        aria-selected="false"
                      >
                        Quality
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="expart__tab">
                  <div className="tab-content" id="expart-Content">
                    <div
                      className="tab-pane fade show active"
                      id="philosophy"
                      role="tabpanel"
                      aria-labelledby="philosophy-tab"
                    >
                      <SingleExpartContent heading={heading1}  description={description1} image="1" position="right center" />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="work"
                      role="tabpanel"
                      aria-labelledby="work-tab"
                    >
                      <SingleExpartContent heading={heading2}  description={description2} image="2" position="center" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export default HomeTwoExpertArea;

