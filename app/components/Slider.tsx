import React from "react";
import Slider from "react-slick";

export default function SimpleSlider({data}:{data:string[]}) {
  const settings = {
    dots: false,
    infinite: true,
    focusOnSelect: true,    
    slidesToShow: 1,
    speed: 3000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true, 
    centerPadding: "70px",
    responsive: [
      {
        breakpoint: 766, 
        settings: {
          centerPadding: "7px", 
        },
      },
    ],
  };
  return (
    <Slider className="slider" {...settings}>
      {/* style={{width:'510px', objectFit: 'cover'}} */}
      <div>
        <img style={{width:'510px', objectFit: 'cover'}}  src={data[0]} alt="" />
      </div>
      <div>
      <img style={{marginLeft: '1rem'}} src={data[1]} alt="" />
      </div>
    </Slider>
  );
}