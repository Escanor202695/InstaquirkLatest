import React from "react";

function why({array}) {
 

  return (
    <div className="w-screen bg-[#F3F1FA] flex flex-col justify-center items-center p-[30px] py-[80px] lg:px-[80px]">
      <h5 className="font-bold text-[36px] w-[30rem] text-center">
        Why You Need SEO for Your Website?
      </h5>
      <div className="flex w-full mt-[6rem] flex-wrap ">
        {array.map(({src,heading,description}) => {
          return (
            <div className="px-[1rem]  w-full sm:w-1/2 md:w-1/3 xl:w-1/5 my-[2rem] justify-center items-center ">
              <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-[20px] pt-[4rem] pb-[2rem] relative lg:h-[468px] ">
                <img
                  src={src}
                  alt="img"
                  className="w-[5rem] h-auto absolute top-0 left-[50%] -translate-y-1/2 -translate-x-1/2 "
                />
                <h5 className="font-regular text-[20px] text-center">
                  {heading}
                </h5>
                <p className="text-center mt-[.75rem] mb-0 text-sm">
                 {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default why;
