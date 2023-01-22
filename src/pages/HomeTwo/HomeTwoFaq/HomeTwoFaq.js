import React, { useState, useEffect } from "react";

const HomeTwoFaq = ({ arrayFaq }) => {
  const [display, setDisplay] = useState([]);
  const [height, setHeight] = useState([]);

  useEffect(() => {
    const arr = new Array(arrayFaq.length).fill(0);
    setDisplay(arr);
  }, []);

  const handleDisplay = (index) => {
    const arr = new Array(arrayFaq.length).fill(0);
    if (display[index] === 0) {
      arr[index] = 1;
    } else {
      arr[index] = 0;
    }
    setDisplay(arr);
    console.log(height[0]);
  };
  return (
    <>
      <section className="flex w-screen">
        <div
          className="lg:w-[45%] bg-green-500"
          style={{
            background: `url(assets/img/44.jpg)`,
            backgroundPosition: "top",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="w-full lg:flex-1 py-[5rem] px-[10%] lg:py-[10rem] lg:px-[5rem] bg-[#F8F7FC]">
          <div className="flex">
            <div className="">
              <div className="">
                <div
                  className="section__title section__title-3 mb-25 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <span>Know More</span>
                  <h2>Frequently Asked Questions</h2>
                </div>

                <div className="hidden lg:block">
                  {arrayFaq.map((q, i) => {
                    return (
                      <div
                        className={`faq flex-col my-[1rem]  rounded-lg overflow-hidden
                         bg-white border-2 hover:border-[#4536FF] transition-[max-height] ease-linear duration-[400ms]`}
                        style={{
                          maxHeight: display[i] === 1 ? "15rem" : "3.9rem", 
                          boxshadow: '0px 0px 22px 20px rgba(0,0,0,1)'                   
                        }}
                        onClick={() => handleDisplay(i)}
                      >
                        <div className="w-full bg-white h-auto  p-[1rem] flex justify-between align-center gap-[1rem] cursor-pointer">
                          <p
                            className={`leading-7 text-[15px] mb-0 font-bold `}
                            style={{
                              color: display[i] === 1 ? "#4536FF" : "black",
                            }}
                          >
                            {q.question}
                          </p>
                          <p
                            className={`mb-0 text-xl`}
                            style={{
                              color: display[i] === 1 ? "#4536FF" : "black",
                            }}
                          >
                            {display[i] === 0 ? "+" : "-"}
                          </p>
                        </div>
                        <div className="bg-white">
                          <p
                            className={` leading-5 text-[12px] px-[2rem] font-semibold bg-white z-[1000px] text-[#767676]`}
                            style={{
                        
             
                              overflow:"hidden",
                            }}
                          >
                            {q.solution}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="lg:hidden">
                  {arrayFaq.map((q, i) => {
                    return (
                      <div
                        className={`faq flex-col my-[1rem]  rounded-lg overflow-hidden
                         bg-white border-2 hover:border-[#4536FF] transition-[max-height] ease-linear duration-[400ms]`}
                        style={{
                          maxHeight: display[i] === 1 ? "15rem" : "6rem", 
                          boxshadow: '0px 0px 22px 20px rgba(0,0,0,1)'                   
                        }}
                        onClick={() => handleDisplay(i)}
                      >
                        <div className="w-full bg-white h-auto  p-[1rem] flex justify-between align-center gap-[1rem] cursor-pointer">
                          <p
                            className={`leading-7 text-[15px] mb-0 font-bold `}
                            style={{
                              color: display[i] === 1 ? "#4536FF" : "black",
                            }}
                          >
                            {q.question}
                          </p>
                          <p
                            className={`mb-0 text-xl`}
                            style={{
                              color: display[i] === 1 ? "#4536FF" : "black",
                            }}
                          >
                            {display[i] === 0 ? "+" : "-"}
                          </p>
                        </div>
                        <div className="bg-white">
                          <p
                            className={` leading-5 text-[12px] px-[2rem] font-semibold bg-white z-[1000px] text-[#767676]`}
                            style={{
                              overflow:"hidden",
                              transition:"all 400ms linear",
                              opacity:display[i]===0?'0':'1',
                            }}
                          >
                            {q.solution}
                          </p>
                        </div>
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
