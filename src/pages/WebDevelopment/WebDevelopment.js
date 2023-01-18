import React from "react";
import HomeTwoHeader from "../HomeTwo/HomeTwoHeader/HomeTwoHeader";
import HomeTwoFooter from "../HomeTwo/HomeTwoFooter/HomeTwoFooter";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import CommonCtaArea from "../../components/CommonCtaArea/CommonCtaArea";
import "./webdevelopment.css";
import Faq from "../../components/FAQ/Faq";
import Carousel from "react-material-ui-carousel";
import Hero from "../../components/HeroArea/Hero";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import Services from "../../components/Services/Services";
function webDevelopment(props) {
  const arrayFaq = [
    {
      question: "How do you approach web development projects?",
      solution:
        "For web development projects, we adhere to a defined procedure to guarantee that each is completed on schedule and with the highest level of quality. Gathering requirements, design, development, testing, and deployment are frequently included in this process."
    },
    {
      question: "Do you offer responsive web design?",
      solution:
        "Yes, we come with responsive web design by default. As a result, the websites we design will be suitable for browsing on a variety of gadgets, such as desktop computers, tablets, and smartphones."
    },
    {
      question: "Do you have experience with e-commerce development?",
      solution:
        "Of course, we can help you out with proper and professional website maintenance in addition to development as it supports in achieving stabilized growth, keeping your business inclined.",
    },
    {
      question: "Do you have experience with e-commerce development?",
      solution:
      "Yes, we have experience creating e-commerce websites and can aid with the setup of an online store for the sale of your goods or services."
    },
  ];
  const services = [
    {
      title: "Websites",
      src: "assets/img/Web development/Website Development_2x.png",
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
      src: "assets/img/Web development/Website Platforms.png",
      item: ["Wordpress", "Wix", "Webflow", "Squarespace", "GoDaddy"],
    },
    {
      title: "Application Development",
      src: "assets/img/Web development/Application Development_2x.png",
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
      src: "assets/img/Web development/Support_Cybersecurity_2x.png",
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
      src: "assets/img/Web development/Miscellaneous_2x.png",
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
      src: "assets/tech/angular.png",
      title: "Angular JS",
    },
    {
      src: "assets/tech/react.png",
      title: "React JS",
    },
    {
      src: "assets/tech/next.png",
      title: "Next Js",
    },

    {
      src: "assets/tech/vue.png",
      title: "Vue JS",
    },
    {
      src: "assets/tech/node.png",
      title: "Node JS",
    },
    {
      src: "assets/tech/mongo.png",
      title: "mongoDB Database",
    },
    {
      src: "assets/tech/laravel.png",
      title: "Laravel",
    },

    {
      src: "assets/tech/mysql.png",
      title: "mySQL",
    },
    {
      src: "assets/tech/word.png",
      title: "Wordpress",
    },
    {
      src: "assets/tech/shopify.png",
      title: "Shopify",
    },
  ];
  //banner
  const src_banner = "/assets/img/Web development/programming-tech-desktop.png";
  const src_mobile = "/assets/img/Web development/programming-tech-mobile.png";
  const text_banner = "If you can dream it, we can design it";
  //category
  const category_header = "Most Popular in Programming & Tech";
  const service = [
    {
      title: "Wordpress Developer",
      src: "assets/img/Web development/WordPress Developers_2x.png",
    },
    {
      title: "Shopify Developers",
      src: "assets/img/Web development/Shopify Developers_2x.png",
    },
    {
      title: "Wix Developers",
      src: "assets/img/Web development/Wix Developers_2x.png",
    },
    {
      title: "Android Developers",
      src: "assets/img/Web development/Android Developers_2x.png",
    },
    {
      title: "iOS Developers",
      src: "assets/img/Web development/iOS Developers_2x.png",
    },
    {
      title: "Unity Developers",
      src: "assets/img/Web development/Unity Developers_2x.png",
    },
    {
      title: "HTML & CSS Developers",
      src: "assets/img/Web development/Html and Css.png",
    },
    {
      title: "JavaScript Developers",
      src: "assets/img/Web development/JavaScript Developers_2x.png",
    },
  ];
//hero
  const src = "/assets/img/Web development/web.png";
  const headline = "Facilitating beyond";
  const herotext =
    "We have developed a specialty in offering companies of all sizes top-notch web development services. Results that surpass our clients' expectations are what our team of skilled web developers is committed to producing. We can respond to our clients' changing demands and provide solutions that foster success and growth thanks to our flexible and adaptive business model. To remain at the forefront of the industry, we also regularly update our abilities and expertise.";
  const service_headline = "Our Graphics & Design Services";
  return (
    <div>
      <HomeTwoHeader />
      <CommonPageHeader
        title="Web Development"
        subtitle="Making websites that capture users"
      />
      <div className="max-w-[86rem] mx-auto overflow-hidden">
        <Hero src={src} headline={headline} herotext={herotext} />

        <Banner
          src_banner={src_banner}
          src_mobile={src_mobile}
          text_banner={text_banner}
        />
        <Categories category_header={category_header} cat_item={service} />
        <Services service_headline={service_headline} services={services} />

        <div className="technologies pb-100 technology_customize">
          <h1>Technologies we work with</h1>
          <div className="visible-item">
            <div className="tech_items">
              {tech.map((techItem) => {
                const { src, title } = techItem;
                return (
                  <div className="tech_item">
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

        <div className="web-development-life-cycle mb-[10rem]">
          <h1>Development Lifecycle</h1>
          <div className="development-image">
            <img
              src="/assets/img/dev.png"
              alt="whyhireus"
              className="w-full h-auto hidden md:flex visible"
            />
            <img
              src="/assets/img/devMobile.png"
              alt="whyhireus"
              className="w-full h-auto hidden md:flex invisible"
            />
          </div>
        </div>

        {/*
      <div className="pb-80 web-dev">
        <div className="parent">
          <div className="web-development text-center">
            <img
              src="/assets/img/whyhireus.jpg"
              alt="vector"
              className="w-full h-auto visible"
            />
          </div>
          <div className="web-dev-description">
            <div className="web-development-details">
              <h1>Why Hire Us?</h1>
              <p>
                Straightforward solutions to complex business challenges
                High-performing, intuitive and secure web solutions that support
                business processes and serve users globally. Your technology
                partner for innovative and impactful digital solutions. We
                deliver custom web development platforms that help our clients
                in employing capabilities such as micro-personalization,
                marketing automation, seamless integrations and the ability to
                become the best brand representative that drive your customers
                to your end goals.
              </p>
            </div>
          </div>
        </div>
      </div>
*/}
      </div>
      <div>
        <Faq arrayFaq={arrayFaq} />
      </div>
      <CommonCtaArea />
      <HomeTwoFooter />
    </div>
  );
}

export default webDevelopment;
