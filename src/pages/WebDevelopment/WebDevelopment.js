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
  const src_mobile = "/assets/img/Web development/programming-tech-desktop.png";
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
    "   We specialized in providing high-quality web development services to businesses of all sizes. Our team of experienced web developers is committed to delivering results that exceed our clients' expectations. Our flexible and adaptable approach allows us to meet the changing needs of our clients and deliver solutions that drive growth and success. We are also constantly updating our skills and knowledge to stay at the forefront of the industry.";
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

        <div className="web-development-life-cycle">
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
