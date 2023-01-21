import React from "react";
import HomeTwoHeader from "../HomeTwo/HomeTwoHeader/HomeTwoHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import CommonCtaArea from "../../components/CommonCtaArea/CommonCtaArea";
import HomeTwoFooter from "../HomeTwo/HomeTwoFooter/HomeTwoFooter";
import Faq from "../HomeTwo/HomeTwoFaq/HomeTwoFaq";
import Process from "./Our_process/Process";
import Cooperation from "./Cooperation/Cooperation";
import WhySeo from "./Why_SEO/Why_seo";
import Why from "../../components/why";
import Hero from "../../components/HeroArea/Hero";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
function seo() {
  const arrayFaq = [
    {
      question: "Why is SEO (search engine optimization) crucial?",
      solution:
        "It is no longer a possibility to not have your most critical keywords appear on the first page of Google. It is required. Consider it like this: In essence, a website is a multimedia, interactive advertisement for your company. You need to distribute that advertisement for it to be effective. You can make it simple for online users to locate your website and learn more about what your company has to offer by using SEO methods and tactics on it. It's great to have a fantastic website, but visitors must have no trouble finding it! Find out more about how SEO and search engines operate:",
    },
    {
      question: "Why do I need an eCommerce SEO expert?",
      solution: "Your eCommerce website is much different than a typical website. You have a web of content from informational pages to products and categories. Optimizing each of these sections and connecting them together in a logical way (i.e., one that “pleases” search engine algorithms) is extremely important for the success of any eCommerce SEO campaign. With hundreds of eCommerce search marketing clients, we have the ability to look at what has worked for them and apply the same strategies to your website. Don’t fall for an SEO company that will be learning how to optimize your online store “on the fly” while on the job.",
    },
    {
      question:
        "How can we start a campaign for SEO on my website?",
      solution:
        "Based on the nature of your company, the website you have, and your objectives, we'll explain our SEO services and provide you with further details. Always keep in mind that every SEO strategy is intended to fulfill your expectations and is tailored to the aims of your website.",
    },
    {
      question:
        "How do you do eCommerce SEO for product pages?",
      solution:
        "Product pages need to be optimized for an eCommerce website to be successful. Different approaches and eCommerce SEO strategies would be applicable depending on your industry. In other industries, part numbers may not be often searched, yet many manufacturers or part dealers increase organic search traffic by ranking for SKU numbers and part numbers. Prior to implementing a strategy, we will attempt to determine which keywords we must focus on for your product pages. In order to SEO hundreds or thousands of product pages at once, we also employ dynamic optimization techniques that can alter all product pages at once. The ultimate objective is to move customers as rapidly as possible from the product page to the checkout.",
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
  //why
  const array = [
    {
      src:"/assets/img/seo page/5.png",
      heading:"You aren't targeting the right keywords",
      description:" Take a look at the latest search trends in your industry every so often so you don't miss out on valuable search traffic.",
    },
    {
      src:"/assets/img/seo page/4.png",
      heading:"Search engines may have difficulty crawling your site",
      description:"A sitemap is essential for SEO. Sitemaps help search engine bots better craw| your site and reduce the risk of overlooking parts of it.",
    },
    {
      src:"/assets/img/seo page/3.png",
      heading:"You're Wasting Page Rank Opportunities",
      description:"Internal links help your site visitors navigate your website efficiently and pass page rank along to valuable pages like product or service pages.",
    },
    {
      src:"/assets/img/seo page/2.png",
      heading:"Rankings disappeared after a website redesign.",
      description:"Have you recently relaunched your website? It is best to create a 301 redirect so that you don't lose traffic and value from those old pages.",
    },
    {
      src:"/assets/img/seo page/6.png",
      heading:"The Site Is Slow and Doesn't Rank",
      description:"Visitors will leave if your site is slow. The search engines do not like slow loading sites either, which is actually a ranking factor",
    }
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
   
     
    ];
  //banner
  const src_banner = "/assets/img/updated image/Blue Minimalist SEO Specialist LinkedIn Banner (4).png";
  const src_mobile = "/assets/img/updated image/Blue Minimalist SEO Specialist LinkedIn Banner (500 × 312px) (1).png";
  const text_banner = "";
  //hero
  const src = "/assets/img/seo page/seo1.jpg";
  const headline = "Elevate your online Presence";
  const herotext =
  "We are a digital agency that specializes in SEO, our expert team offers services such as keyword research, on-page optimization, technical SEO, and content marketing to boost website's ranking and drive qualified traffic, let us help you take your online presence to the next level.";
  const service_headline = "Our Graphics & Design Services";
  return (
    <div>
      <HomeTwoHeader />
      <CommonPageHeader
        title="Search Engine Optimization"
        subtitle="Outrank your competitor on google"
      />
      <div className="max-w-[86rem] mx-auto overflow-hidden">
    <Hero src={src} headline={headline} herotext={herotext} />

      <Banner
        src_banner={src_banner}
        src_mobile={src_mobile}
        text_banner={text_banner}
        page="seo"
      />
      <Categories category_header={category_header} cat_item={service} />
      </div>
      <div className="customize">
        <WhySeo/>
      </div>
      <Why array={array}/>
      <Cooperation />
      <Process />
      <Faq arrayFaq={arrayFaq} />
      <CommonCtaArea />
      <HomeTwoFooter />
    </div>
  );
}

export default seo;
