import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../public/assets/image1.jpg";
import image2 from "../public/assets/image2.jpg";
import image3 from "../public/assets/image3.jpg";
import image4 from "../public/assets/image4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, FreeMode } from "swiper";
import Image from "next/image";

const Gallery = () => {
  return (
    <main>
      <Swiper
        direction={"horizontal"}
        slidesPerView="auto"
        mousewheel={true}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          460: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        modules={[Mousewheel, FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide className=" flex justify-center items-center ">
          <div className=" w-full max-w-sm  ">
            <Image src={image1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" max-w-sm ">
            <Image src={image2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" max-w-sm ">
            <Image src={image3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" max-w-sm ">
            <Image src={image4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" max-w-sm ">
            <Image src={image1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" max-w-sm ">
            <Image src={image2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" max-w-sm ">
            <Image src={image3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" max-w-sm ">
            <Image src={image4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" max-w-sm ">
            <Image src={image1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" max-w-sm ">
            <Image src={image2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" max-w-sm ">
            <Image src={image3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" max-w-sm ">
            <Image src={image4} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default Gallery;
