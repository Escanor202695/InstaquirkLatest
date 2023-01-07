import React from "react";
import HomeTwoHeader from "../HomeTwo/HomeTwoHeader/HomeTwoHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import CommonCtaArea from "../../components/CommonCtaArea/CommonCtaArea";
import HomeTwoFooter from "../HomeTwo/HomeTwoFooter/HomeTwoFooter";
import Faq from "../HomeTwo/HomeTwoFaq/HomeTwoFaq";
import Process from "./Our_process/Process";
import Cooperation from "./Cooperation/Cooperation";
import Why_seo from "./Why_SEO/Why_seo";
import Why from "../../components/why";
import Hero from "../../components/HeroArea/Hero";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import Services from "../../components/Services/Services";
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
    const category_header = "TOP SEO TECHNIQUES ";
    const service = [
      {
        title: "Off-Page SEO",
        src: "assets/img/seo page/2155.svg",
      },
      {
        title: "On-Page SEO",
        src: "assets/img/seo page/2153.svg",
      },
      {
        title: "Keyword Research",
        src: "assets/img/seo page/2070.svg",
      },
      {
        title: "Technical SEO",
        src: "assets/img/seo page/2154.svg",
      },
      {
        title: "Competitor Analysis",
        src: "assets/img/seo page/2156.svg",
      },
      {
        title: "Full SEO Package",
        src: "assets/img/seo page/2394.svg",
      },
      {
        title: "Voice Search SEO",
        src: "2394.svg",
      },
     
    ];
  //banner
  const src_banner = "/assets/img/seo page/Blue Minimalist SEO Specialist LinkedIn Banner (3).png";
  const src_mobile = "/assets/img/seo page/Blue Minimalist SEO Specialist LinkedIn Banner (3).png";
  const text_banner = "Expertly crafted SEO strategies for your business";
  //hero
  const src = "/assets/img/seo page/seo.png";
  const headline = "Elevate your online Presence";
  const herotext =
  "We specialize in helping businesses improve their online visibility and reach through targeted and effective search engine optimization strategies. Our team of expert SEO professionals has a wealth of experience in the industry and a track record of success in helping our clients achieve their digital marketing goals. We offer a range of services including keyword research, on-page optimization, technical SEO, content marketing, and more, all designed to boost your website's ranking on search engines and drive qualified traffic to your site. Let us help you take your online presence to the next level.";
  const service_headline = "Our Graphics & Design Services";
  return (
    <div>
      <HomeTwoHeader />
      <CommonPageHeader
        title="Search Engine Optimization"
        subtitle="Outrank your competitor on google"
      />
      <div className="max-w-[86rem] mx-auto overflow-hidden">
    <span style={{color:"black"}}>
      <Hero src={src} headline={headline} herotext={herotext} />
    </span>  

      <Banner
        src_banner={src_banner}
        src_mobile={src_mobile}
        text_banner={text_banner}
      />
      <Categories category_header={category_header} cat_item={service} />
      </div>
      <div className="customize">
        <Why_seo/>
      </div>
      <Why />
      <Cooperation />
      <Process />
      <Faq arrayFaq={arrayFaq} />
      <CommonCtaArea />
      <HomeTwoFooter />
    </div>
  );
}

export default seo;
