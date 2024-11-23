import html5 from "../../public/img/Skills-Img/html5.png";
import css3 from "../../public/img/Skills-Img/css3.png";
import js from "../../public/img/Skills-Img/javascript.png";
import tailwind from "../../public/img/Skills-Img/tailwindcss.png";
import reactJs from "../../public/img/Skills-Img/react.png";
import reduxImg from "../../public/img/Skills-Img/redux.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay,Pagination} from 'swiper/modules'

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './style.css'

export default function Skills() {
  return (
    <div id="Skills">
      <Swiper
        modules={[Autoplay,Pagination]}
        spaceBetween={50}
        slidesPerView={2}
        loop={true}
        autoplay={{delay:3000,
          disableOnInteraction:false
        }}
        pagination={{clickable:true}}

        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="bg-gray-200 dark:bg-slate-700 !my-5 !rounded-md !py-10"
      >
        

        <SwiperSlide className="!flex !justify-center !items-center">
          <img className="hover:scale-105 transition" src={html5} alt="img" />
        </SwiperSlide>
        <SwiperSlide className="!flex !justify-center !items-center">
          <img className="hover:scale-105 transition" src={css3} alt="img" />
        </SwiperSlide>
        <SwiperSlide className="!flex !justify-center !items-center">
          <img className="hover:scale-105 transition" src={js} alt="img" />
        </SwiperSlide>
        <SwiperSlide className="!flex !justify-center !items-center">
          <img
            className="hover:scale-105 transition"
            src={tailwind}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="!flex !justify-center !items-center">
          <img className="hover:scale-105 transition" src={reactJs} alt="img" />
        </SwiperSlide>
        <SwiperSlide className="!flex !justify-center !items-center">
          <img
            className="hover:scale-105 transition"
            src={reduxImg}
            alt="img"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
