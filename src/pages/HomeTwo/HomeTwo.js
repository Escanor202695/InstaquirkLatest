import React from "react";
import CommonCtaArea from "../../components/CommonCtaArea/CommonCtaArea";
import PageHelmet from "../../components/shared/PageHelmet";
import HomeTwoAchievement from "./HomeTwoAchievement/HomeTwoAchievement";

import HomeTwoCaseArea from "./HomeTwoCaseArea/HomeTwoCaseArea";

import HomeTwoExpertArea from "./HomeTwoExpertArea/HomeTwoExpertArea";
import HomeTwoFaq from "./HomeTwoFaq/HomeTwoFaq";
import HomeTwoFeatures from "./HomeTwoFeatures/HomeTwoFeatures";
import HomeTwoFooter from "./HomeTwoFooter/HomeTwoFooter";
import HomeTwoHeader from "./HomeTwoHeader/HomeTwoHeader";
import HomeTwoHeroSlider from "./HomeTwoHeroSlider/HomeTwoHeroSlider";

const HomeTwo = () => {
  const Faq = [
    {
      question: "What services does your agency offer?",
      solution:
        "We offer web development, graphics design, SEO, and social media management services.",
    },
    {
      question: "How do you approach web development projects?",
      solution: "We work together with our clients to comprehend their demands and objectives before developing a unique solution that satisfies those expectations.",
    },
    {
      question:
        "Can you help with pay-per-click (PPC) advertising?",
      solution:
        "Yes, we can help with PPC campaign creation and management on websites like Google Ads and Bing Ads.",
    },
    {
      question:"Do you offer any guarantee for your SEO services?",
      solution:"As the performance of a website on search engines depends on numerous factors outside of our control, we are unable to promise any certain outcomes. However, we do provide thorough performance data and put a lot of effort into making our clients' websites more visible.",
    },{
      question:"How do you measure the success of your social media campaigns?",
      solution:"We monitor metrics like engagement, followers, and website traffic and use the information to modify and improve our approach.",
    }
  ];

  

  return (
    <>
      <PageHelmet pageTitle="Instaquirk" />
      <HomeTwoHeader />
      <HomeTwoHeroSlider /> 
      <HomeTwoFeatures />
      <HomeTwoFaq arrayFaq={Faq} />
      <HomeTwoAchievement />
      <HomeTwoExpertArea />
      {/*<HomeTwoCounter/>
      <HomeTwoTestimonial />*/}
      {/* <HomeTwoCaseArea /> */}
      {/*<HomeTwoCounter/>
      <HomeTwoTestimonial />*/}
      {/* <HomeTwoCaseArea /> */}
      {/*<HomeTwoBlogs/>*/}
      <CommonCtaArea />
      <HomeTwoFooter />
    </>
  );
};

export default HomeTwo;
