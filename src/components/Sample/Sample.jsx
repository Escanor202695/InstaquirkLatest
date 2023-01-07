import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import GalleryImage from "../../pages/Graphic_design/GalleryImage";
function Sample({images}) {
  return (
    <>
    <div className=" p-[40px] pt-[100px] w-full hidden sm:block">
    <h5 className="font-bold  text-[45px] flex justify-center ">
        Sample Works
    </h5>
    <div
        className=" h-[2200px] lg:h-[2000px] xl:h-[2360px] py-4 flex  flex-col overflow-hidden "
        style={{ flexWrap: "wrap" }}
    >
        {images.map((image, key) => {
        return <GalleryImage index={key} images={images} image={image} />;
        })}
    </div>
    </div>

    <div className="w-full sm:hidden pt-[50px]">
    <div className="font-bold flex justify-center text-[27px] mb-[20px]">
        Sample Works
    </div>

    <div className="w-full flex flex-1 overflow-hidden">
        <Swiper
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper2 h-[300px]"
        >
        <div className="px-[40px] w-full">
            {images.map((img) => {
            return (
                <SwiperSlide>
                <img src={img} alt="vector" className="w-auto  h-full" />
                </SwiperSlide>
            );
            })}
        </div>
        </Swiper>
    </div>
    </div>
    </>
  )
}

export default Sample