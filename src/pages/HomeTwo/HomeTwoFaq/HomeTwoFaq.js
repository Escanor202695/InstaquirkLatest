import React, { useState, useEffect } from "react";

const HomeTwoFaq = ({ arrayFaq }) => {
  const [display, setDisplay] = useState([]);
  const [height, setHeight] = useState([]);

  useEffect(() => {
    const arr = new Array(arrayFaq.length).fill(0);
    const arr2 = new Array(arrayFaq.length).fill(8);
    setDisplay(arr);
    setHeight(arr2);

    console.log(arr2);
  }, []);

  const handleDisplay = (index) => {
    const arr = new Array(arrayFaq.length).fill(0);
    const arr2 = new Array(arrayFaq.length).fill(8);
    if (display[index] === 0) {
      arr[index] = 1;
      arr2[index] = 30;
    } else {
      arr[index] = 0;
      arr2[index] = 8;
    }
    setDisplay(arr);
    setHeight(arr2);
    console.log("max-h-[" + height[index] + "rem]");
  };
  return (
    <>
      <section className="faq__area p-relative pt-135 pb-120 grey-bg-12 md:mb-[4rem]">
        <div
          className="faq__thumb"
          style={{
            background: `url(assets/img/44.jpg)`,
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
                  <span>Know More</span>
                  <h2>Frequently Asked Questions</h2>
                </div>

                <div>
                  {arrayFaq.map((q, i) => {
                    return (
                      <div
                        className={`faq max-h-[${height[i]}rem] flex-col my-[1rem] shadow-sm rounded-lg overflow-hidden bg-white`}
                        style={{ transition: "max-height .75s linear" }}
                        onClick={() => handleDisplay(i)}
                      >
                        <div className="w-full bg-white h-auto  p-[1rem] flex justify-between align-center gap-[1rem] cursor-pointer">
                          <p
                            className={`text-[15px] mb-0 font-bold`}
                            style={{
                              color: display[i] === 1 ? "#4536FF" : null,
                            }}
                          >
                            {q.question}
                          </p>
                          <p
                            className={`mb-0`}
                            style={{
                              color: display[i] === 1 ? "#4536FF" : null,
                            }}
                          >
                            +
                          </p>
                        </div>
                        <p
                          className={`${display} leading-5 px-[2rem] pb-[1rem] text-[12px] bg-white z-[1000px] text-[#767676]`}
                          style={{
                            display: display[i] === 0 ? "none" : "block",
                          }}
                        >
                          {q.solution}
                        </p>
                      </div>
                    );
                  })}
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
