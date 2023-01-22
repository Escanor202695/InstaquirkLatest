import React from "react";
import "./Hero.css";
function HeroArea({ herotext,herotext2, headline, src }) {
  return (
    <div className=" p-[30px] md:px-[40px] md:py-[30px]  md:flex  justify-between ">
      <div className=" md:w-[48%] py-[2rem] md:py-0">
        <h6 className="mb-[1rem] font-bold text-[30px] text-black capitalize lg:mt-[70px] md:text-[36px] md:mb-[1rem]">
          {" "}
          {headline}{" "}
        </h6>
        <p className="text-md   md:text-lg ">{herotext}</p><br/>
        <p className="text-md   md:text-lg ">{herotext2}</p>

      </div>
      <div className="w-full md:w-1/2 flex justify-center mb-[2rem] md:p-[1rem] ">
        <img src={src} alt="vector" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default HeroArea;
