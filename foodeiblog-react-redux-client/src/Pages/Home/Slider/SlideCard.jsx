import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import SliderData from "./SlideData";
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => <ul className=" absolute m-0 bottom-5">{dots}</ul>,
  }; 
  return (
    <>
      <Slider {...settings}>
        {SliderData.map((value, index) => (
          <div key={index}>
          <div id={value?.id} className="hidden md:flex w-full h-[90vh]">
            <img src={value?.cover} className="w-[70%] h-[90vh] object-cover" alt="" />
            <div className="block w-[30%] h-[90vh] p-10 bg-yellow-400">
                <h3 className="text-lg text-gray-500 uppercase mt-3">featured posts</h3>
                <h3 className="text-5xl font-bold text-black mt-4 p-3  border-b-2 border-black ">{value?.title}</h3>
                <p className="text-xl text-gray-700 my-4 p-3">{value?.desc.slice(0,50)}</p>
                <Link className="text-lg px-4 py-2 bg-black text-white hover:bg-orange-400">
                    Read More <BsArrowRight className="inline ml-2" />
                </Link>
            </div>
          </div>

            <div className="md:hidden w-full h-[70vh] relative">
                <img src={value?.cover} className="w-full h-full object-cover" alt="" />
                <div className="absolute w-full h-full p-10 top-0 left-0 bg-[#0000006b]">
                <h3 className="text-lg text-white uppercase mt-3">featured posts</h3>
                <h3 className="text-5xl font-bold text-white mt-4 p-3  border-b-2 border-white ">{value?.title}</h3>
                <p className="text-xl text-white my-4 p-3">{value?.desc.slice(0,50)}</p>
                <Link className="text-lg px-4 py-2 bg-white text-black hover:bg-orange-400">
                    Read More <BsArrowRight className="inline ml-2" />
                </Link>
            </div>
            </div>



            
          </div>
        ))}
      </Slider>
    </>
  );
};

export default SlideCard;