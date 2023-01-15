import React from "react";
import HomeTwoHeader from "../HomeTwo/HomeTwoHeader/HomeTwoHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import CommonCtaArea from "../../components/CommonCtaArea/CommonCtaArea";
import HomeTwoFooter from "../HomeTwo/HomeTwoFooter/HomeTwoFooter";
import Faq from "../HomeTwo/HomeTwoFaq/HomeTwoFaq";
import MarketingSolution from "../../components/MarketingSolution/MarketingSolution";
import Hero from "../../components/HeroArea/Hero";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import Why from "../../components/why";

function seo() {
  const arrayFaq = [
    {
      question: "Why should i choose your agency?",
      solution:
        "There is no work that we neglect at our company.The only thing we can do to help others is to provide them with services whenever possible.",
    },
    {
      question: "Can you help my business grow?",
      solution: "Our team always ready to help your business.",
    },
    {
      question:
        "I need a complete some talent team for my business. Who will I be working with?",
      solution:
        "Our agency team always ready to help  your business and also fixing the problem. You can get our service easily when you have to need.",
    },
  ];
//why
const array = [
  {
    src:"/assets/img/seo page/5.png",
    heading:"Increased online presence",
    description:" Social media management helps to increase a business's online presence by regularly posting content and engaging with followers on various platforms. This can help to attract new customers and boost brand visibility."
  },
  {
    src:"/assets/img/seo page/4.png",
    heading:"Improved customer engagement",
    description:"Social media allows businesses to directly interact with their customers, which can lead to increased customer satisfaction and loyalty. By actively managing social media accounts, businesses can respond to customer inquiries, complaints, and feedback in a timely manner.",
  },
  {
    src:"/assets/img/seo page/3.png",
    heading:"Enhanced brand reputation",
    description:" Proper social media management can help to maintain a positive brand reputation by carefully monitoring and addressing any negative comments or reviews. It can also allow businesses to proactively share positive content and reviews, helping to build a strong and positive brand image.",
  },
  {
    src:"/assets/img/seo page/2.png",
    heading:"Greater reach and exposure",
    description:" Social media platforms have a large user base, making them an effective way to reach a wide audience. By regularly posting and engaging with followers, businesses can increase their reach and expose their brand to new potential customers.",
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
  //category
  const category_header = "TOP SOCIAL MEDIA PLATFORMS ";
  const service = [
    {
      title: "Social Media Management",
      src: "assets/img/marketing/2063.svg",
    },
    {
      title: "Organic Social Promotions",
      src: "assets/img/marketing/2529.svg",
    },
    {
      title: "Profile Setup & Integration",
      src: "assets/img/marketing/2061.svg",
    },
    {
      title: "Socila Content",
      src: "assets/img/marketing/2062.svg",
    },
    {
      title: "Consultation & Audience Research",
      src: "assets/img/marketing/2060.svg",
    },
    {
      title: "Shoppable Content",
      src: "assets/img/marketing/2508.svg",
    },
    {
      title: "Analytics & Tracking",
      src: "assets/img/marketing/2065.svg",
    },
  ];
  //banner
  const src_banner =
    "/assets/img/marketing/Digital Marketing SEEK Cover Image 1.png";
  const src_mobile =
    "/assets/img/marketing/Digital Marketing SEEK Cover Image 1.png";
  const text_banner ="";
  //hero
  const src = "/assets/img/seo page/seo1.jpg";
  const headline = "Stand out in the digital world";
  const herotext =
    "we specialize in helping businesses and organizations elevate their online presence and connect with their audience through strategic and effective social media campaigns. Our team of experienced professionals is skilled in creating and implementing customized strategies that drive results and increase brand awareness.Our services include social media strategy development, content creation, community management, influencer partnerships, and ad campaign management. We are committed to delivering the best possible results for our clients.";
  const service_headline = "Our Graphics & Design Services";
  return (
    <div>
      <HomeTwoHeader />
      <CommonPageHeader
        title="Social media Management"
        subtitle="Amplify your brand's voice"
      />
      <div className="max-w-[86rem] mx-auto overflow-hidden">
        <Hero src={src} headline={headline} herotext={herotext} />

        <Banner
          src_banner={src_banner}
          src_mobile={src_mobile}
          text_banner={text_banner}
        />
        <Categories category_header={category_header} cat_item={service} />
      </div>
      <Why array={array}/>
      <MarketingSolution />
      <Faq arrayFaq={arrayFaq} />
      <CommonCtaArea />
      <HomeTwoFooter />
    </div>
  );
}

export default seo;
