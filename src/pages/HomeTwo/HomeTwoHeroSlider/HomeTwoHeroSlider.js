import React from "react";
import HomeTwoSingleSlide from "../../../components/HomeTwoSingleSlide/HomeTwoSingleSlide";
import Slider from "react-slick";

const HomeTwoHeroSlider = () => {
  // slider setting
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    infinite: true,
    dots: false,
    fade: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="slider__area slider__area-2">
        <Slider className="slider-active" {...settings}>
          <HomeTwoSingleSlide
            slider_class="col-xl-7 offset-xl-6 col-lg-8 offset-lg-4 col-md-9 offset-md-3 col-sm-10 offset-sm-2"
            content_class=""
            attr_1={<span className="Instaquirk">Welcome To Instaquirk.</span>}
            attr_2={
              <h2 className="text-white">
              Expertise, you can trust in the digital realm.
              </h2>
            }
            btn_text="Contact"
          />

          <HomeTwoSingleSlide
            slider_class="col-xl-6"
            content_class="slider__content-4"
            attr_1={<span className="Instaquirk">Welcome To Instaquirk</span>}
            attr_2={
              <h2 className="text-white">
              Pushing the boundaries of digital creativity
              </h2>
            }
            attr_3="We merge imagination and technology to help brands grow in an age of digital transformation."
            btn_text="Contact"
          />
        </Slider>
      </section>
    </>
  );
};

export default HomeTwoHeroSlider;
