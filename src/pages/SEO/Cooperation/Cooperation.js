// import React from 'react'

// function Cooperation() {
//   return (
//     <div>
//           <section class="flex-1 justify-center  px-[2px] items-center  bg-blue-400 text-center text-white ">

// <div class="process__content">
//    <header class="text-center">
//            <h1 class="b-d-[3px] border-black text-[50px] font-[500] pt-[30px] p-[25px] text-white ">
//                Cooperate with InstaQuirk
//            </h1>
//    </header>

//    <div class="row mx-[5%] ">
//          <div class=" col-md-6 col-lg-3 mb-6 mb-lg-0 bg-black-300 ">
//            <div class="w-[80%] bg-red-700 px-[16px] bg-blue-700 min-h-[310px]">
//             <div class="process-box__step text-[45px] font-[400] ">1.</div>
//             <h3 class="text-[30px] font-[400]">Become <br/>visible online</h3> <br/>
//             <div class=" text-[14px] "><p>We will help you increase your website’s online visibility and rank it on the first pages of Google search results. </p></div>
//            </div>
//         </div>
//         <div class=" col-md-6 col-lg-3 mb-6 mb-lg-0">
//            <div class="w-[80%] bg-red-700 px-[16px] bg-blue-700 min-h-[310px]">
//             <div class="process-box__step text-[45px] font-[400]">2.</div>
//             <h3 class="text-[30px] font-[400]">Attract <br/>new users</h3> <br/>
//             <div class=" text-[14px] "><p>With better online visibility we will get more users to visit your website and boost your organic traffic. </p>
//             </div>
//            </div>
//         </div>
//         <div class=" col-md-6 col-lg-3 mb-6 mb-lg-0">
//            <div class="w-[80%] bg-red-700 px-[16px] bg-blue-700 min-h-[310px]">
//              <div class="process-box__step text-[45px] font-[400]">3.</div>
//              <h3 class="text-[30px] font-[400]">Generate <br/>more leads </h3> <br/>
//              <div class=" text-[14px] "><p>With a long tail SEO, we’re specialized in, your website will start to be visited by more decisive and accurate users. </p>
//              </div>
//            </div>
//         </div>
//         <div class=" col-md-6 col-lg-3 mb-6 mb-lg-0">
//            <div class="w-[80%] bg-red-700 px-[16px] bg-blue-700 min-h-[310px]">
//            <div class="text-[45px] font-[400]">4.</div>
//            <h3 class="text-[30px] font-[400]">Enjoy<br/> better sales results</h3> <br/>
//            <div class=" text-[14px] "><p>Thanks to more valuable traffic on your website you will start noticing how your sales results grow.</p></div>
//            </div>
//         </div>
//  </div>

//        <div class="section-cta__row mt-[15px] pb-[80px] pt-[35px] ">
//        <div class="section-cta">
//            <a class="btn border-3 border-black w-[50%] hover:bg-red-700 " data-section="process" href="#contact-form" data-anchor="">
//                Grow your business
//            </a>
//            </div>
//        </div>

// </div>
// </section>
//     </div>
//   )
// }

// export default Cooperation

import React from "react";
import { Link } from "react-router-dom";

const Cooperation = () => {
  const cooperations = [
    {
      id: 1,
      name: "Became visible online",
      describe:
        "We will help you increase your website’s online visibility and rank it on the first pages of Google search results.",
      color: "black",
      background: "#FFF",
    },
    {
      id: 2,
      name: "Attract new users",
      describe:
        "With better online visibility we will get more users to visit your website and boost your organic traffic.",
      color: "black",
      background: "#FFF",
    },
    {
      id: 3,
      name: "Generate more leads ",
      describe:
        "With a long tail SEO, we’re specialized in, your website will start to be visited by more decisive and accurate users.",
      color: "#FFF",
      background: "#3820AF",
    },
    {
      id: 4,
      name: "Enjoy better sales results",
      describe:
        "Thanks to more valuable traffic on your website you will start noticing how your sales results grow.",
      color: "black",
      background: "#FFF",
    },
  ];
  return (
    <div className="Cooperation">
      <h1>Cooperate with InstaQuirk</h1>
      <div className="Cooperation_content">
        {cooperations.map((item) => {
          const { id, name, describe, background, color } = item;
          return (
            <div
              className="Cooperation_content_item"
              style={{ background: `${background}` }}
            >
              <h4 style={{ color: `${color}` }}>{id}</h4>
              <h2 style={{ color: `${color}` }}>{name}</h2>
              <p style={{ color: `${color}` }}>{describe}</p>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <div className="text-center">
        <Link to="/contact" className="z-btn z-btn-blue mb-30">
          Grow Your Business
        </Link>
      </div>
    </div>
  );
};

export default Cooperation;
