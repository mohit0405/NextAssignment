"use client";

import Slide from "./Slide";

import Slider from "react-slick";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  return (
    <div>
      <div className="container lg:pt-0">
        <Slider {...settings}>
          {[
            {
              id: 0,
              img: "/banner-1.png",
            },
            {
              id: 1,
              img: "/banner-2.png",
            },
          ].map((item) => (
            <Slide key={item.id} img={item.img} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;
