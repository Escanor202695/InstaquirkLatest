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
     
      <div className="customize">
        <div className="pt-130 pb-150 home-two-achievement">
          <HomeTwoAchievement opacity={opacity} />
        </div>
      </div>
      {/* <HomeBrands /> */}
      <HomeTwoFaq arrayFaq={Faq} />

      <CommonCtaArea />
      <HomeTwoFooter />
    </div>
  );
};

export default About;
