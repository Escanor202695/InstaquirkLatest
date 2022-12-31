    import React from "react";
    import "./graphic_details.css";
    import HomeTwoHeader from "../HomeTwo/HomeTwoHeader/HomeTwoHeader";
    import HomeTwoFooter from "../HomeTwo/HomeTwoFooter/HomeTwoFooter";
    import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
    import Service from "./gservices/service";
    import GalleryImage from "./GalleryImage";
    import CommonCtaArea from "../../components/CommonCtaArea/CommonCtaArea";

    import "swiper/css";
    import "swiper/css/pagination";
    import "swiper/css/navigation";
    import { Swiper, SwiperSlide } from "swiper/react";
    import { Pagination, Navigation } from "swiper";

    function graphic_details() {
    const images = [
        "/assets/img/graphics/1.png",
        "/assets/img/graphics/2.png",
        "/assets/img/graphics/38.png",
        "/assets/img/graphics/4.png",
        "/assets/img/graphics/5.png",
        "/assets/img/graphics/6.png",
        "/assets/img/graphics/33.png",
        "/assets/img/graphics/8.png",
        "/assets/img/graphics/15.png",
        "/assets/img/graphics/11.png",
        "/assets/img/graphics/19.png",
        "/assets/img/graphics/13.png",
        "/assets/img/graphics/14.png",
        "/assets/img/graphics/10.png",
        "/assets/img/graphics/16.png",
        "/assets/img/graphics/17.png",
        "/assets/img/graphics/18.png",
        "/assets/img/graphics/30.png",
        "/assets/img/graphics/12.png",
        "/assets/img/graphics/20.png",
        "/assets/img/graphics/37.png",
        "/assets/img/graphics/3.png",
        "/assets/img/graphics/39.png",

        "/assets/img/graphics/7.png",
    ];
    const services = [
        {
        title: "Logo & Brand Identity",
        src: "assets/img/graphics_page/Logo _ Brand Identity_B_2x.png",
        item1: "Logo Design"
        },
        {
        title: "Web & App Design",
        src: "assets/img/graphics_page/Web _ App_2x.png",

        },
        {
        title: "Art & Illustration",
        src: "assets/img/graphics_page/Art _Illustration_2x.png",
        },
        {
        title: "Marketing Design",
        src: "assets/img/graphics_page/Social_Media_2x.png",
        },
        {
        title: "Print Design",
        src: "assets/img/graphics_page/print_design_2x.jpeg",
        },
        {
        title: "Fashion & Merchandise",
        src: "assets/img/graphics_page/Fashion_Merchandise_2x.png",
        },
        {
        title: "Visual Design",
        src: "assets/img/graphics_page/Visual Design_2x.png",
        },
        {
        title: "Packaging & Covers",
        src: "assets/img/graphics_page/Packaging_Labels_2x.png",
        },
    
    ];
    const service = [
        {
        title: "Minimalist Logo Design",
        src: "assets/img/graphics_page/design/Logo design_2x.png",
        },
        {
        title: "Illustration",
        src: "assets/img/graphics_page/design/Illustration_2x.png",
        },
        {
        title: "Website Design",
        src: "assets/img/graphics_page/design/Web Design.png",
        },
        {
        title: "Image Editing",
        src: "assets/img/graphics_page/design/Photoshop Editing_2x.png",
        },
        {
        title: "T-shirt & Merchandise",
        src: "assets/img/graphics_page/design/T-Shirts _ Merchandise_2x.png",
        },
        {
        title: "Social Media Design",
        src: "assets/img/graphics_page/design/Social Media Design_2x.png",
        },
    ];

    return (
        <>
        <HomeTwoHeader />
        <CommonPageHeader
            title="Graphic & Design"
            subtitle="Design to Make You Standout."
        />
        <div className="max-w-[86rem] mx-auto ">
            <div className=" p-[40px]   md:flex items-center justify-between ">
            <div className=" md:w-1/2 ">
                <h2 className=" capitalize "> A mint of creativity </h2>
                <p className="  ">
                Need to make a lasting impression? The right combination of
                colors, shapes and words will define your brand. Get the perfect
                design and ensure your branding hits the spot with these services.
                Whether it is a company or oneself to establish unique identity
                visuals matters. Our team across the world uses the power of
                creativity to transform businesses for the better .
                </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center   ">
                <img
                src="/assets/img/graphics.jpg"
                alt="vector"
                className="w-full h-auto"
                />
            </div>
            </div>

            <div className="w-full p-[40px] relative">
            <img
                src="/assets/img/graphics_page/graphics-design-desktop.png "
                alt="vector"
                className="visible w-full  h-auto rounded-lg "
            />


            <h2
                className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                text-white text-center"
            >
                Imagination Bleeds From <br />
                The Pen Of Creativity
            </h2>
            </div>

            <div className="p-[40px]">
            <h3 className="py-[20px]">Top Graphics & Design Categories</h3>

            <div className="flex ">
                <Swiper
                navigation={true}
                slidesPerView={"auto"}
                spaceBetween={15}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                >
                {service.map((techItem) => {
                    const { src, title } = techItem;
                    return (
                    <SwiperSlide>
                        <div className=" flex items-center   p-[14px] m-2 rounded-md shadow-md ">
                        <img
                            src={src}
                            alt="vector"
                            className="w-[50px] h-[50px] rounded-lg mr-[.75rem]"
                        />
                        <h4 className=" flex-[0_0_auto]">{title}</h4>
                        </div>
                    </SwiperSlide>
                    );
                })}
                </Swiper>
            </div>
            </div>

            <div className="px-[40px]">
            <h3 className="py-[20px]">Our graphics & design Services</h3>
            <div className="flex  justify-between flex-wrap ">
                {services.map(({ src,title }) => {
                return (
                    <div className="  w-[100%] sm:w-[50%] md:w-[33.33%] lg:w-[20%] flex-col items-center   m-2 rounded-md  ">
                    <img
                        src={src}
                        alt="vector"
                        className="w-full  rounded-lg mr-[.75rem]"
                    />
                    <h4 className=" flex-[0_0_auto] pt-[12px]">{title}</h4>
                    <ul>
                        <li>Logo Design</li>
                        <li>Brand Style Guides</li>
                        <li>Font & Typography</li>
                    </ul>
                    </div>
                );
                })}
            </div>
            </div>

            <div className=" p-[40px]  w-screen hidden sm:block">
            <h1 className="flex justify-center ">Sample Works</h1>
            <div
                className=" sm:h-[1200px] md:h-[1800px] lg:h-[2200px] py-4 flex  flex-col "
                style={{ flexWrap: "wrap" }}
            >
                {images.map((image, key) => {
                return <GalleryImage index={key} images={images} image={image} />;
                })}
            </div>
            </div>

            <div className=" p-[40px]  w-screen sm:hidden">
            <h1 className="flex justify-center ">Sample Works</h1>

            <div className=" w-full flex flex-1 rounded-lg overflow-hidden">
                <Swiper
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper2 h-[300px]"
                >
                <div className="px-[40px] w-full">
                    {images.map((img) => {
                    return (
                        <SwiperSlide>
                        <img src={img} alt="vector" className="w-auto h-full" />
                        </SwiperSlide>
                    );
                    })}
                </div>
                </Swiper>
            </div>
            </div>
        </div>

        <CommonCtaArea />
        <HomeTwoFooter />
        </>
    );
    }

    export default graphic_details;
