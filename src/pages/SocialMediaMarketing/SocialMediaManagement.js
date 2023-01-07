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
  const src_banner =
    "/assets/img/seo page/Blue Minimalist SEO Specialist LinkedIn Banner (3).png";
  const src_mobile =
    "/assets/img/seo page/Blue Minimalist SEO Specialist LinkedIn Banner (3).png";
  const text_banner = "Expertly crafted SEO strategies for your business";
  //hero
  const src = "/assets/img/seo page/seo.png";
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
      <MarketingSolution />
      <Faq arrayFaq={arrayFaq} />
      <CommonCtaArea />
      <HomeTwoFooter />
    </div>
  );
}

export default seo;
