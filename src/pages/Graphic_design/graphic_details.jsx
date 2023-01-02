    import React from "react";
    import "./graphic_details.css";
    import HomeTwoHeader from "../HomeTwo/HomeTwoHeader/HomeTwoHeader";
    import HomeTwoFooter from "../HomeTwo/HomeTwoFooter/HomeTwoFooter";
    import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
    import Service from "./gservices/service";
    import GalleryImage from "./GalleryImage";
    import CommonCtaArea from "../../components/CommonCtaArea/CommonCtaArea";
    import Faq from "../HomeTwo/HomeTwoFaq/HomeTwoFaq";
    import "swiper/css";
    import "swiper/css/pagination";
    import "swiper/css/navigation";
    import { Swiper, SwiperSlide } from "swiper/react";
    import { Pagination, Navigation } from "swiper";

    function graphic_details() {
        const arrayFaq = [
            {
              question: "Don't have hosting right now. Can we start?",
              solution:
                "Absolutely! We would start the development on our development server. Once the website build is complete, we will transfer to your hosting. You can also have us host your website for a minimal monthly fee.",
            },
            {
              question: "What do you need to get started?",
              solution:
                "You will have to provide us with : Project brief which describes the Main Idea and specific details, pictures,logo, content, WordPress login details. If you missing some of the requirements just contact us and we will help you with everything. If you need help in any of them, Contact us.",
            },
            {
              question: "Will you maintain my site for me?",
              solution:
                "Of course, we can help you out with proper and professional website maintenance in addition to development as it supports in achieving stabilized growth, keeping your business inclined.",
            },
            {
              question: "Will my website be mobile-friendly?",
              solution:
                "It also increases the number of visitors, rankings in search engines.Yes, we ensure to develop a responsive website that would make your visitors appealing and deliver an optimized browsing experience.",
            },
          ];
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
        item: ["Logo Design", "Brand Style Guides", "Font & Typography"],
        },
        {
        title: "Web & App Design",
        src: "assets/img/graphics_page/Web _ App_2x.png",
        item: [
            "Website Design",
            "App Design",
            "Landing Page Design",
            "UX Design",
            "UI Design",
        ],
        },
        {
        title: "Art & Illustration",
        src: "assets/img/graphics_page/Art _Illustration_2x.png",
        item: [
            "Illustration",
            "NFT Art",
            "Cartoon & Comics",
            "Portraits & B Caricatures",
        ],
        },
        {
        title: "Marketing Design",
        src: "assets/img/graphics_page/Social_Media_2x.png",
        item: [
            "Social Media Design",
            "Email Design",
            "Web Banners",
            "Signage Design",
        ],
        },
        {
        title: "Print Design",
        src: "assets/img/graphics_page/print_design_2x.jpeg",
        item: [
            "Flyer Design",
            "Brochure Design",
            "Poster Design",
            "Catalog Design",
            "Menu Design",
            "Invitation Design",
        ],
        },
        {
        title: "Fashion & Merchandise",
        src: "assets/img/graphics_page/Fashion_Merchandise_2x.png",
        item: ["Fashion Design", "T-shirt & Merchandise", "Jewelry Design"],
        },
        {
        title: "Visual Design",
        src: "assets/img/graphics_page/Visual Design_2x.png",
        item: [
            "Image Design",
            "Presentation Design",
            "Infographic Design",
            "Vector Tracing",
            "Resume Design",
        ],
        },
        {
        title: "Packaging & Covers",
        src: "assets/img/graphics_page/Packaging_Labels_2x.png",
        item: [
            "Packaging & Level Design",
            "Book Design",
            "Album Cover Design",
            "Podcast Cover Art",
            "Car Wraps",
        ],
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
                <h2 className=" capitalize hidden lg:block ">
                {" "}
                A mint of creativity{" "}
                </h2>
                <h3 className=" capitalize  lg:hidden "> A mint of creativity </h3>
                <p className="text-sm sm:text-md   md:text-lg lg:text-xl  ">
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
                className="hidden md:block w-full  h-auto rounded-lg "
            />
            <img
                src="/assets/img/graphics_page/graphics-design-mobile.png "
                alt="vector"
                className=" md:hidden w-full  h-auto rounded-lg "
            />

            <h2
                className=" lg:leading-relaxed hidden md:block sm:text-[28px] md:text-[32px] lg:text-[36px]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                            text-white text-center"
            >
                Imagination Bleeds From <br />
                The Pen Of Creativity
            </h2>
            <h3
                className="leading-1 hidden sm:block md:hidden text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                        text-white text-center"
            >
                Imagination Bleeds From <br />
                The Pen Of Creativity
            </h3>
            <h4
                className="leading-1  sm:hidden text-lg  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                        text-white text-center"
            >
                Imagination Bleeds From <br />
                The Pen Of Creativity
            </h4>
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
                        <div className=" flex items-center  px-[20px] py-[14px] my-2  rounded-md shadow-md ">
                        <img
                            src={src}
                            alt="vector"
                            className="w-[50px] h-[50px] rounded-lg mr-[.75rem]"
                        />
                        <h4 className="pt-2 flex-[0_0_auto]">{title}</h4>
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
                {services.map(({ src, title, item }) => {
                return (
                    <div className="  w-[100%] sm:w-[40%] md:w-[30.33%] lg:w-[20%] flex-col items-center   m-2 rounded-md  ">
                    <img src={src} alt="vector" className="w-full  rounded-lg " />
                    <h4 className=" flex-[0_0_auto] pt-[20px]">{title}</h4>

                    <ul>
                        {item.map((i) => {
                        return <li className="py-2">{i}</li>;
                        })}
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
                        <img src={img} alt="vector" className="w-auto  h-full" />
                        </SwiperSlide>
                    );
                    })}
                </div>
                </Swiper>
            </div>
            </div>
        </div>
        <Faq arrayFaq={arrayFaq}/>
        <CommonCtaArea />
        <HomeTwoFooter />
        </>
    );
    }

    export default graphic_details;
