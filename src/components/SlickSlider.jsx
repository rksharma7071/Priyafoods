import React from "react";
import Slider from "react-slick";

function SlickSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,

    // autoplaySpeed: 2000,
    // cssEase: "linear"
  };


  return (
    <div className="slider-container pt-2">
      <Slider {...settings}>
        <div>
          <img
            className=" w-[100vw] h-[60vh]"
            src="https://priyafoods.com/cdn/shop/files/1_Desktop_1800x600_cf432c5f-a2e5-49de-8f30-f45b7a7bf0dc_900x.jpg?v=1638343870"
            alt="slide1"
          />
        </div>
        <div>
          <img
            className=" w-[100vw] h-[60vh]"
            src="https://priyafoods.com/cdn/shop/files/Welcome_to_Priya_Foods_900x.jpg?v=1657870912"
            alt="slide2"
          />
        </div>
        <div>
          <img
            className=" w-[100vw] h-[60vh]"
            src="https://priyafoods.com/cdn/shop/files/2_Desktop_1800x600_1f9f947c-a4f6-4e75-b714-894e01d61dd0_900x.jpg?v=1638442321"
            alt="slide3"
          />
        </div>
        <div>
          <img
            className=" w-[100vw] h-[60vh]"
            src="https://priyafoods.com/cdn/shop/collections/Roti_Pachadi_1512x.jpg?v=1668865183"
            alt="slide3"
          />
        </div>
        <div>
          <img
            className=" w-[100vw] h-[60vh]"
            src="https://priyafoods.com/cdn/shop/collections/b_7_1512x.jpg?v=1638441669"
            alt="slide3"
          />
        </div>
      </Slider>
    </div>
  );
}

export default SlickSlider;
