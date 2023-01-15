import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";


import ScrollTop from "./components/ScrollTop";
import About from "./pages/About/About";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";

import HeaderStyleFour from "./pages/HeaderStyleFour/HeaderStyleFour";
import HeaderStyleSeven from "./pages/HeaderStyleSeven/HeaderStyleSeven";
import HeaderStyleSix from "./pages/HeaderStyleSix/HeaderStyleSix";


import SMM from "./pages//SocialMediaMarketing/SocialMediaManagement";
import Home from "./pages/Home/Home";
import "./App.css";



import HomeThree from "./pages/HomeThree/HomeThree";
import HomeTwo from "./pages/HomeTwo/HomeTwo";
import Portfolio from "./pages/Portfolio/Portfolio";
import PortfolioDetails from "./pages/PortfolioDetails/PortfolioDetails";
import Services from "./pages/Services/Services";
import ServicesDetails from "./pages/ServicesDetails/ServicesDetails";
import Graphic_details from "./pages/Graphic_design/graphic_details";
import WebDevelopment from "./pages/WebDevelopment/WebDevelopment";

import Seo from "./pages/SEO/seo";

import Team from "./pages/Team/Team";
import TeamDetails from "./pages/TeamDetails/TeamDetails";
import Loader from "./components/Loader/Loader";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";





function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route
            path="/"
            element={
              loading ? (
                <div className="loader">
                  <ClipLoader color={"white"} loading={loading} size={150} />
                  <h3>welcome to Instaquirk</h3>
                </div>
              ) : (
                <HomeTwo />
              )
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/homeTwo" element={<HomeTwo />} />
          <Route path="/homeThree" element={<HomeThree />} />

          <Route path="/about" element={<About />} />
        
          <Route path="/servicesDetails" element={<ServicesDetails />} />

          <Route path="/web_development" element={<WebDevelopment />} />
          {/*<Route path="/team" element={<Team/>} />
            <Route path="/teamDetails" element={<TeamDetails/>} />
            <Route path="/blogs" element={<Blogs/>} />
            <Route path="/blogDetails" element={<BlogDetails/>} />*/}
          <Route path="/contact" element={<Contact />} />
          <Route path="/graphic_details" element={<Graphic_details />} />
          <Route path="/seo" element={<Seo />} />
          <Route path="/social_media_management" element={<SMM />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
