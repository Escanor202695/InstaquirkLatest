import React from "react";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import HomeAbout from "../Home/HomeAbout/HomeAbout";
import HomeBrands from "../Home/HomeBrands/HomeBrands";
import HomeTwoHeader from "../HomeTwo/HomeTwoHeader/HomeTwoHeader";
import HomeTwoAchievement from "../HomeTwo/HomeTwoAchievement/HomeTwoAchievement";
import HomeTwoFooter from "../HomeTwo/HomeTwoFooter/HomeTwoFooter";
import HomeTwoFaq from "../HomeTwo/HomeTwoFaq/HomeTwoFaq";
import CommonCtaArea from "../../components/CommonCtaArea/CommonCtaArea";
import AboutMore from "../../components/AboutMore/AboutMore";

const About = () => {
  const Faq = [
    {
      question: "What services does your agency offer?",
      solution:
        "We offer web development, graphics design, SEO, and social media management services.",
    },
    {
      question: "How do you approach web development projects?",
      solution:
        "We work together with our clients to comprehend their demands and objectives before developing a unique solution that satisfies those expectations.",
    },
    {
      question: "Can you help with pay-per-click (PPC) advertising?",
      solution:
        "Yes, we can help with PPC campaign creation and management on websites like Google Ads and Bing Ads.",
    },
    {
      question: "Do you offer any guarantee for your SEO services?",
      solution:
        "As the performance of a website on search engines depends on numerous factors outside of our control, we are unable to promise any certain outcomes. However, we do provide thorough performance data and put a lot of effort into making our clients' websites more visible.",
    },
    {
      question:
        "How do you measure the success of your social media campaigns?",
      solution:
        "We monitor metrics like engagement, followers, and website traffic and use the information to modify and improve our approach.",
    },
  ];
  //  const aboutSubTitle = `As an unemployment service provider, we assist clients in finding employment. Develop a business or assist in its development. Additionally,
  //   we offer courses in Web Development, Graphics Design, Full Stack SEO, and Social Media Management   `
  const opacity = 0;
  return (
    <div className="about-all-section">
      <HomeTwoHeader />
      <CommonPageHeader title="About Us" subtitle="" />
      <div className="pt-60">
        <div className="customize">
          <HomeAbout opacity={opacity} />
        </div>
      </div>
      <div className="customize">
        <AboutMore />
      </div>
      <HomeTwoFaq arrayFaq={Faq} />

      <div className="customize">
        <div className="pt-130 pb-150 home-two-achievement">
          <HomeTwoAchievement opacity={opacity} />
        </div>
      </div>
      {/* <HomeBrands /> */}
      <CommonCtaArea />
      <HomeTwoFooter />
    </div>
  );
};

export default About;
