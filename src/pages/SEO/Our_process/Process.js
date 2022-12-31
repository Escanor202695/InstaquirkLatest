// import React from 'react'
// import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
// import HandshakeIcon from '@mui/icons-material/Handshake';
// import HighQualityIcon from '@mui/icons-material/HighQuality';
// import AnalyticsIcon from '@mui/icons-material/Analytics';
// function process() {
//   return (
//         <>
//             <section class="flex-1 justify-center  px-[2px] items-center  bg-purple-400 text-center text-white">

//             <div class="process__content">
//             <header class="text-center">
//                     <h1 class="b-d-[3px] border-black text-[50px] font-[500] pt-[30px] p-[25px] text-white ">
//                     OUR PROVEN PROCESS
//                     </h1>
//             </header>

//             <div class="row mx-[5%] pb-[60px] ">
//                     <div class=" col-md-6 col-lg-3 mb-6 mb-lg-0 bg-black-300 ">
//                     <div class="w-[80%] bg-red-700 px-[18px] bg-purple-700 min-h-[380px]">
//                         <div class="process-box__step text-[45px] font-[400] "><BrightnessHighIcon/></div>
//                         <h3 class="text-[30px] font-[400]">On-site Strategy and Optimizations</h3> <br/>
//                         <div class=" text-[14px] "><p>At the beginning of the cooperation, we will conduct a thorough SEO audit based on which we will come up with Strategic Action Plan for your website. We will choose the best, most converting keywords and implement proper technical optimizations. </p></div>
//                     </div>
//                     </div>
//                     <div class=" col-md-6 col-lg-3 mb-6 mb-lg-0">
//                     <div class="w-[80%] bg-red-700 px-[18px] bg-purple-700 min-h-[380px]">
//                         <div class="process-box__step text-[45px] font-[400]"><HighQualityIcon/></div>
//                         <h3 class="text-[30px] font-[400]"> High-Quality Content<br/><br/></h3> <br/>
//                         <div class=" text-[14px] "><p>Based on the chosen keywords, we’ll take care of implementing high-quality content and optimizing the one already published on your website. We will do that to increase your website’s online presence which will contribute to attracting new users.</p>
//                         </div>
//                     </div>
//                     </div>

//                     <div class=" col-md-6 col-lg-3 mb-6 mb-lg-0">
//                     <div class="w-[80%] bg-red-700 px-[18px] bg-purple-700 min-h-[380px]">
//                         <div class="process-box__step text-[45px] font-[400]"><HandshakeIcon/></div>
//                         <h3 class="text-[30px] font-[400]">Quality Link Building<br/><br/> </h3> <br/>
//                         <div class=" text-[14px] "><p>As a part of the link building process, we will build a valuable profile backlink profile using links from a variety of proven, and high-quality sources. With that, we will increase your domain authority in the Google crawlers’ perception.

// </p>
//                         </div>
//                     </div>

//                     </div>
//                     <div class=" col-md-6 col-lg-3 mb-6 mb-lg-0">
//                     <div class="w-[80%] bg-red-700 px-[18px] bg-purple-700 min-h-[380px]">
//                     <div class="text-[45px] font-[400]"><AnalyticsIcon/></div>
//                     <h3 class="text-[30px] font-[400]">Analytics and Conversion Growth</h3> <br/>
//                     <div class=" text-[14px] "><p>We constantly monitor the impact of our SEO process on your website traffic and its conversion, and we bring you clear reports of that. We use only proven analytical tools allowing us to conduct full SEO analysis and constantly optimize our actions to bring you better results.</p></div>
//                     </div>
//                     </div>

//             </div>
//             </div>
//             </section>
//         </>
//   )
// }

// export default process

import { Link } from "@mui/material";
import React from "react";

const Process = () => {
  const cooperations = [
    {
      id: 1,
      name: "On-site Strategy and Optimizations",
      describe:
        "At the beginning of the cooperation, we will conduct a thorough SEO audit based on which we will come up with Strategic Action Plan for your website. We will choose the best, most converting keywords and implement proper technical optimizations",
      color: "black",
      background: "#FFF",
      border: "2px solid #3D25B1",
    },
    {
      id: 2,
      name: "High-Quality Content",
      describe:
        "Based on the chosen keywords, we’ll take care of implementing high-quality content and optimizing the one already published on your website. We will do that to increase your website’s online presence which will contribute to attracting new users.",
      color: "#FFF",
      background: "#3D25B1",
      border: "2px solid #3D25B1",
    },
    {
      id: 3,
      name: "Quality Link Building ",
      describe:
        "As a part of the link building process, we will build a valuable profile backlink profile using links from a variety of proven, and high-quality sources. With that, we will increase your domain authority in the Google crawlers’ perception.",
      color: "black",
      background: "#FFF",
      border: "2px solid #3D25B1",
    },
    {
      id: 4,
      name: "Analytics and Conversion Growth",
      describe:
        "We constantly monitor the impact of our SEO process on your website traffic and its conversion, and we bring you clear reports of that. We use only proven analytical tools allowing us to conduct full SEO analysis and constantly optimize our actions to bring you better results",
      color: "black",
      background: "#FFF",
      border: "2px solid #3D25B1",
    },
  ];
  return (
    <div className="Proccess_content text-center">
      <h1>Our proven process</h1>
      <div className="Cooperation_content">
        {cooperations.map((item) => {
          const { id, name, describe, background, color, border } = item;
          return (
            <div
              className="Cooperation_content_item"
              style={{
                textAlign: "center",
                background: `${background}`,
                color: `${color}`,
                border: `${border}`,
              }}
            >
              <h4 style={{ color: `${color}` }}>{id}</h4>
              <h2 style={{ color: `${color}` }}>{name}</h2>
              <p style={{ color: `${color}` }}>{describe}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Process;
