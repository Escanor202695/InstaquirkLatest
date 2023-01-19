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
      question: "How much a customer has to pay before starting a deal?",
      solution:
        "Depending on the particular project and services needed, a customer will have to pay a certain sum before a contract can be started. However, in order to reserve the project and pay for the upfront costs of the work, we typically ask a deposit or down payment. Upon project completion, the remaining payment is payable.",
    },
    {
      question: "What payment methods do you accept?",
      solution: "We offer a number of payment options, including  PayPal, Wise, Payoneer, credit and debit card.",
    },
    {
      question:
        "Do you have any refund policy?",
      solution:
        "The unique project and services will determine our refund policy. However, after project work has started, we typically do not issue refunds. If there is a difficulty or issue with the job, we will cooperate with the client to find a satisfactory solution.",
    },
    {
      question:"How to place an order?",
      solution:"As the performance of a website on search engines depends on numerous factors outside of our control, we are unable to promise any certain outcomes. However, we do provide thorough performance data and put a lot of effort into making our clients' websites more visible.",
    },{
      question:"How many revisions do you offer after submitting your work?",
      solution:"The particular project and services will determine how many revisions we provide. However, when the work is submitted, we typically allow for three modifications; more revisions may result in additional fees. We will work with our clients to make any necessary modifications in order to make sure they are happy with the finished output.",
    }
  ];

  

  return (
    <>
      <PageHelmet pageTitle="Instaquirk" />
      <HomeTwoHeader />
      <HomeTwoHeroSlider /> 
      <HomeTwoFeatures />
      
      <HomeTwoAchievement />
      <HomeTwoExpertArea />
      {/*<HomeTwoCounter/>
      <HomeTwoTestimonial />*/}
      {/* <HomeTwoCaseArea /> */}
      {/*<HomeTwoCounter/>
      <HomeTwoTestimonial />*/}
      {/* <HomeTwoCaseArea /> */}
      {/*<HomeTwoBlogs/>*/}
      <HomeTwoFaq arrayFaq={Faq} />
      <CommonCtaArea />
      <HomeTwoFooter />
    </>
  );
};

export default HomeTwo;
