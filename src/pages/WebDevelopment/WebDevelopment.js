import React from "react";
import HomeTwoHeader from "../HomeTwo/HomeTwoHeader/HomeTwoHeader";
import HomeTwoFooter from "../HomeTwo/HomeTwoFooter/HomeTwoFooter";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import CommonCtaArea from "../../components/CommonCtaArea/CommonCtaArea";
import "./webdevelopment.css";
import Carousel from "react-material-ui-carousel";
import Hero from "../../components/HeroArea/Hero";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import Services from "../../components/Services/Services";
import Faq from "../HomeTwo/HomeTwoFaq/HomeTwoFaq";
function webDevelopment(props) {
  const arrayFaq = [
    {
      question: "How much does a website cost?",
      solution:
        "The price of a new website will vary based on how many pages and features you need as each website is customized to each customer's needs. However, we are pleased to customize packages to match your budget, always maintain low rates, and offer honest pricing. A website from Parker Digital starts at $750 as a starting price.",
    },
    {
      question: "Is SEO included with my website?",
      solution:
        "No, monthly SEO was not included in the website's creation. Google will view all content (text, photos, and videos), but that does not guarantee that your website will come in at the top of the search results. We advise monthly SEO services from a team of experts to improve your position in Google's organic search results.",
    },
    {
      question: "Who writes the website text?",
      solution:
        "You are welcome to compose and provide the website with any and all text that you choose. You are the expert on your company, after all. If you need assistance with this, we can provide a copywriter for you to edit your text or produce unique material at a rate of $50 per hour.",
    },
    {
      question: "How do you approach web development projects?",
      solution:
        "For web development projects, we adhere to a defined procedure to guarantee that each is completed on schedule and with the highest level of quality. Gathering requirements, design, development, testing, and deployment are frequently included in this process.",
    },
    {
      question: "Do you offer responsive web design?",
      solution:
        "Yes, we come with responsive web design by default. As a result, the websites we design will be suitable for browsing on a variety of gadgets, such as desktop computers, tablets, and smartphones.",
    },
    {
      question: "Do you have experience with e-commerce development?",
      solution:
        "Of course, we can help you out with proper and professional website maintenance in addition to development as it supports in achieving stabilized growth, keeping your business inclined.",
    },
  ];
  const services = [
    {
      title: "Websites",
      src: "assets/img/Web development/Website Development_2x.webp",
      item: [
        "Website Development",
        "Website Maintenance",
        "E-commerce Development",
        "Custom Websites",
        "NFT Websites",
      ],
    },
    {
      title: "Website Platforms",
      src: "assets/img/Web development/Website Platforms.webp",
      item: ["Wordpress", "Wix", "Webflow", "Squarespace", "GoDaddy"],
    },
    {
      title: "Application Development",
      src: "assets/img/Web development/Application-Development_2x.webp",
      item: [
        "Mobile Apps",
        "Web Programming",
        "Desktop Applications",
        "Chatbots",
        "Game Development",
        "Blockchain & Cryptocurrency",
      ],
    },
    {
      title: "Support &   Cybersecurity",
      src: "assets/img/Web development/Support_Cybersecurity_2x.webp",
      item: [
        "Support & IT",
        "DevOps & Clouds ",
        "Cyber Security & Data Protection",
        "Development for Streamers",
        "Convert Files",
      ],
    },
    {
      title: "Miscellaneous",
      src: "assets/img/Web development/Miscellaneous_2x.webp",
      item: [
        "Electronics Engineering",
        "QA & Review",
        "User Testing",
        "Online Coding Lessons",
        "Other",
      ],
    },
  ];
  const tech = [
    {
      src: "assets/tech/angular.webp",
      title: "Angular JS",
    },
    {
      src: "assets/tech/react.webp",
      title: "React JS",
    },
    {
      src: "assets/tech/next.webp",
      title: "Next Js",
    },

    {
      src: "assets/tech/vue.webp",
      title: "Vue JS",
    },
    {
      src: "assets/tech/node.webp",
      title: "Node JS",
    },
    {
      src: "assets/tech/mongo.webp",
      title: "mongoDB Database",
    },
    {
      src: "assets/tech/laravel.webp",
      title: "Laravel",
    },

    {
      src: "assets/tech/mysql.webp",
      title: "mySQL",
    },
    {
      src: "assets/tech/word.webp",
      title: "Wordpress",
    },
    {
      src: "assets/tech/shopify.webp",
      title: "Shopify",
    },
  ];
  //banner
  const src_banner = "/assets/img/Web development/programming-tech-desktop.png";
  const src_mobile = "/assets/img/Web development/programming-tech-mobile.png";
  const text_banner = "If you can dream it, we can design it";
  //category
  const category_header = "Categories In Programming & Tech";
  const service = [
    {
      title: "Website Development",
      src: "assets/img/Web development/web-development.webp",
    },
    {
      title: "Shopify Store Build",
      src: "assets/img/Web development/Shopify Developers_2x.webp",
    },
    {
      title: "Wix Development",
      src: "assets/img/Web development/Wix Developers_2x.webp",
    },
    {
      title: "Wordpress Development",
      src: "assets/img/Web development/WordPress Developers_2x.webp",
    },
    {
      title: "Android Development",
      src: "assets/img/Web development/Android-Developers_2x.webp",
    },
    {
      title: "iOS Development",
      src: "assets/img/Web development/iOS Developers_2x.webp",
    },
  ];
  //hero
  const src = "/assets/img/Web development/web.webp";
  const headline = "Facilitating beyond";
  const herotext =
    "We specialized in providing high-quality web development services to businesses of all sizes. Our team of experienced web developers is committed to delivering results that exceed our clients' expectations.";
  const herotext2 =
    "Our flexible and adaptable approach allows us to meet the changing needs of our clients and deliver solutions that drive growth and success. We are also constantly updating our skills and knowledge to stay at the forefront of the industry.";
  const service_headline = "Our Tech Services";
  const page="web"
  return (
    <div>
      <HomeTwoHeader />
      <CommonPageHeader
        title="Web Development"
        subtitle="Making websites that capture users"
      />
      <div className="max-w-[86rem] mx-auto overflow-hidden">
        <Hero
          src={src}
          headline={headline}
          herotext={herotext}
          herotext2={herotext2}
        />

        <Banner
          src_banner={src_banner}
          src_mobile={src_mobile}
          text_banner={text_banner}
          page={page}
        />
        <Categories category_header={category_header} cat_item={service} />
        <Services service_headline={service_headline} services={services} />

        <div className="technologies technology_customize my-[7rem] md:mt-[3rem]">
          <h2 className="mb-[2rem] md:mb-[5rem] text-[30px] md:text-[40px]  font-bold text-black text-center capitalize">
            technologies we work with
          </h2>
          <div className="visible-item">
            <div className="tech_items">
              {tech.map((techItem) => {
                const { src, title } = techItem;
                return (
                  <div className="tech_item mb-[2rem]">
                    <img src={src} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="tech_items invisible-item">
            <Carousel>
              {tech.map((techItem) => {
                const { src, title } = techItem;
                return (
                  <div className="tech_item">
                    <img src={src} alt="" />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>

        <div className="web-development-life-cycle mb-[12rem]">
          <h2 className="mb-0 text-[30px] md:text-[40px] font-bold text-black text-center">
            Development Lifecycle
          </h2>
          <div className="development-image px-[30px] md:px-[40px]">
            <img
              src="/assets/img/dev.webp"
              alt="whyhireus"
              className="w-full h-auto hidden md:flex visible"
            />
            <img
              src="/assets/img/devMobile.webp"
              alt="whyhireus"
              className="w-full h-auto hidden md:flex invisible"
            />
          </div>
        </div>
      </div>
      <Faq arrayFaq={arrayFaq} />
      <CommonCtaArea />
      <HomeTwoFooter />
    </div>
  );
}

export default webDevelopment;
