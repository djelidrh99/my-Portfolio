import html5 from "../../public/img/Skills-Img/html5.png";
import css3 from "../../public/img/Skills-Img/css3.png";
import js from "../../public/img/Skills-Img/javascript.png";
import tailwind from "../../public/img/Skills-Img/tailwindcss.png";
import reactJs from "../../public/img/Skills-Img/react.png";
import reduxImg from "../../public/img/Skills-Img/redux.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function Skills() {
  return (
    <div id="Skills">
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="bg-gray-200 dark:bg-slate-700 !my-5 !rounded-md !py-10"
      >
        <div className="text-black dark:text-white z-50 text-center text-3xl font-bold  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Swipe
        </div>

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
