    import React from "react";
    import HomeTwoHeader from "../HomeTwo/HomeTwoHeader/HomeTwoHeader";
    import HomeTwoFooter from "../HomeTwo/HomeTwoFooter/HomeTwoFooter";
    import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";

    import CommonCtaArea from "../../components/CommonCtaArea/CommonCtaArea";
    import Faq from "../HomeTwo/HomeTwoFaq/HomeTwoFaq";

    import Hero from "../../components/HeroArea/Hero";
    import Banner from "../../components/Banner/Banner";
    import Categories from "../../components/Categories/Categories";
    import Services from "../../components/Services/Services";
    import Sample from "../../components/Sample/Sample";
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
    const arrayFaq = [
        {
        question: "Don't have hosting right now. Can we start?",
        solution:
            "Absolutely! We would start the development on our development server. Once the website build is complete, we will transfer to your hosting. You can also have us host your website for a minimal monthly fee.",
        },
        {
        question:
            "What do you need to get started?'max-h-[8rem''max-h-[8rem''max-h-[8rem''max-h-[8rem''max-h-[8rem'",
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
        item: ["Illustration", "Portraits & B Caricatures", "Abstract Design"],
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
    //category
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
    const category_header = "Our Graphics & Design Services";
    //banner
    const src_banner = "/assets/img/graphics_page/graphics-design-desktop.png";
    const src_mobile = "/assets/img/graphics_page/graphics-design-mobile.png";
    const text_banner = "Imagination Bleeds From The Pen Of Creativity";
    //Herosection
    const src = "/assets/img/graphics/page/top.jpg";
    const headline = "A mint of creativity";
    const herotext =
        "  Need to make a lasting impression? The right combination of colors, shapes and words will define your brand. Get the perfect design and ensure your branding hits the spot with these services. Whether it is a company or oneself to establish unique identity visuals matters. Our team across the world uses the power of creativity to transform businesses for the better .";
    const service_headline = "Our Graphics & Design Services";
    return (
        <>
        <HomeTwoHeader />
        <CommonPageHeader
            title="Graphic & Design"
            subtitle="Design to Make You Standout."
        />
        <div className="max-w-[86rem]  mx-auto overflow-hidden">
            <Hero src={src} headline={headline} herotext={herotext} />
            <Banner
            src_banner={src_banner}
            src_mobile={src_mobile}
            text_banner={text_banner}
            />
            <Categories category_header={category_header} cat_item={service} />
            <Services service_headline={service_headline} services={services} />
            <Sample images={images} />
        </div>
        <Faq arrayFaq={arrayFaq} />
        <CommonCtaArea />
        <HomeTwoFooter />
        </>
    );
    }

    export default graphic_details;
