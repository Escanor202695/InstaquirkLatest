import React from "react";

const HomeTwoFaq = ({ arrayFaq }) => {
  return (
    <>
      <section className="faq__area p-relative pt-135 pb-120 grey-bg-12">
        <div
          className="faq__thumb"
          style={{
            background: `url(assets/img/20.jpg)`,
            backgroundPosition: "top",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-5 offset-xl-7 col-lg-6 offset-lg-6 col-md-7 offset-md-5">
              <div className="faq__wrapper">
                <div
                  className="section__title section__title-3 mb-25 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <span>Thinking</span>
                  <h2>
                    Future is brighter when you're <br /> more prepared
                  </h2>
                </div>

                <div
                  className="col-xl-6 col-lg-6 col-md-7"
                  style={{ width: "100%" }}
                >
                  <div className="faq__accordion p-relative">
                    <div className="accordion" id="accordionExample">
                      {arrayFaq.map((item, key) => {
                        return (
                          <div className="card">
                            <div className="card-header" id={`acc_${key + 1}`}>
                              <h5 className="mb-0">
                                <button
                                  className="btn btn-link collapsed"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#collapse_${key + 1}`}
                                  aria-expanded="true"
                                  aria-controls={`collapse_${key + 1}`}
                                >
                                  {item.question}
                                </button>
                              </h5>
                            </div>

                            <div
                              id={`collapse_${key + 1}`}
                              className="collapse"
                              aria-labelledby={`acc_${key + 1}`}
                              data-bs-parent="#accordionExample"
                            >
                              <div className="card-body accordion-body">
                                <p>{item.solution}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
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

export default HomeTwoFaq;