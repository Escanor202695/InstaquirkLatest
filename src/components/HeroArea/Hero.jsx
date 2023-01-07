import React from 'react'
import "./Hero.css"
function HeroArea
({herotext,headline,src}) {
  return (
    <div className=" p-[30px] md:px-[40px] md:py-[30px]  md:flex  justify-between ">
    <div className=" md:w-1/2 ">
        <h5 className=" font-bold capitalize hidden lg:block lg:mt-[80px] md:text-[36px] md:mb-[1rem]">
        {" "}
        {headline}{" "}
        </h5>
        <h3 className=" capitalize  lg:hidden "> {headline} </h3>
        <p className="text-sm sm:text-md   md:text-lg lg:text-xl  ">
        {herotext}
        </p>
    </div>
    <div className="w-full md:w-1/2 flex justify-center ">
        <img
        src={src}
        alt="vector"
        className="w-full h-auto"
        />
    </div>
    </div>
  )
}

export default HeroArea
