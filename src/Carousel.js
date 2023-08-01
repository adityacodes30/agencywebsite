import React from "react";
import { Swiper, SwiperSlide ,} from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles/carousel.css";
import "swiper/css/autoplay";

import img1 from './Assets/Artboard 2.png'
import img2 from './Assets/Artboard 3.png'
import img3 from './Assets/Artboard 4.png'
import img4 from './Assets/Artboard 5.png'
import img5 from './Assets/Artboard 6.png'
import img6 from './Assets/Artboard 7.png'
import img7 from './Assets/Artboard 7 copy.png'


import slide_image_1 from './Social Media Marketin1g.jpg';
const Carousel = () => {
  return (
    <>
    <div style={{paddingTop:'8vh'}}>
      <h1
        style={{
          fontSize: "7rem",
          display: "inline",
          position: "relative",
          left: "30vw",
          color: "white",
          top:'9vh',
        }}
      >
        Our Services
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{delay:2500, disableOnInteraction:false}}
        
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
        <SwiperSlide >
          <img
            src={img1}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
         <span style={{scale:'70%' , opacity:'0.6'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></span> 
          </div>
          <div className="swiper-button-next slider-arrow">
          <span style={{scale:'70%' , opacity:'0.6'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></span> 
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      </div>
    </>
  );
};

export default Carousel;

const Di = () => {
  return (
    <div
      style={{ height: "50vh", width: "30vh", backgroundColor: "white" }}
    ></div>
  );
};
