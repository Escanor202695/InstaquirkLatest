import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
function Categories({category_header,cat_item}) {
  return (
    
    <div className="px-[30px] md:px-[40px] py-[60px] md:mb-[2rem]">
            <h3 className="py-[20px] font-bold">
                {category_header}
            </h3>

            <div className="flex ">
                <Swiper
                navigation={true}
                slidesPerView={"auto"}
                spaceBetween={15}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                >
                {cat_item.map((techItem) => {
                    const { src, title } = techItem;
                    return (
                    <SwiperSlide>
                        <div className=" flex items-center  px-[20px] py-[14px] my-2  rounded-md shadow-md bg-[#F7F6FB]">
                        <img
                            src={src}
                            alt="vector"
                            className="w-[50px] h-[50px] rounded-lg mr-[.75rem]"
                        />
                        <h4 className="font-bold pt-2 flex-[0_0_auto]">
                            {title}
                        </h4>
                        </div>
                    </SwiperSlide>
                    );
                })}
                </Swiper>
            </div>
            </div>
  )
}

export default Categories