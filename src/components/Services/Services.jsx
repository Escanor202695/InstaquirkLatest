import React from 'react'

function Services({service_headline,services}) {
  return (
    <div className="px-[30px] md:px-[40px]">
    <h3 className="py-[20px] font-bold">
        {service_headline}
    </h3>
    <div className="flex  justify-between flex-wrap ">
        {services.map(({ src, title, item }) => {
        return (
            <div className="  w-[100%] sm:w-[45%] md:w-[30.33%] lg:w-[23%] flex-col items-center  m-2 rounded-md  ">
            <img src={src} alt="vector" className="w-full  rounded-lg " />
            <h5 className=" flex-[0_0_auto] pt-[20px] md:text-lg lg:text-xl font-bold">
                {title}
            </h5>

            <ul>
                {item.map((i) => {
                return (
                    <li className="py-2 md:text-sm lg:text-md">{i}</li>
                );
                })}
            </ul>
            </div>
        );
        })}
    </div>
    </div>
  )
}

export default Services