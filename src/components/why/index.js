import React from "react";

function why(props) {
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

  return (
    <div className="w-screen bg-[#F3F1FA] flex flex-col justify-center items-center p-[30px] py-[80px] lg:px-[80px]">
      <h5 className="font-bold text-[26px] text-bold md:text-[36px] w-[30rem] text-center w-[80%]">
        Why You Need SEO for Your Website?
      </h5>
      <div className="flex w-full mt-[3rem] md:mt-[6rem] flex-wrap ">
        {array.map(({src,heading,description}) => {
          return (
            <div className="px-[.6rem]  w-full sm:w-1/2 md:w-1/3 xl:w-1/5 my-[2rem] justify-center items-center">
              <div className="flex flex-col h-[18rem] justify-center items-center bg-white rounded-lg shadow-md p-[20px] pt-[4rem] pb-[2rem] relative">
                <img
                  src={src}
                  alt="img"
                  className="w-[5rem] h-auto absolute top-0 left-[50%] -translate-y-1/2 -translate-x-1/2 "
                />
                <h5 className="font-regular text-md text-center">
                  {heading}
                </h5>
                <p className="text-center mt-[.75rem] mb-0 text-sm">
                 {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default why;
