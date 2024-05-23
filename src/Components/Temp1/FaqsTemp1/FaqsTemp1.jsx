import React, { useRef } from "react";
import { FaAngleRight, FaWhatsapp, FaAngleLeft } from "react-icons/fa";
import FAQAccordionTemp1 from "../FaqsItemsTemp1/FaqsItemsTemp1";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

const FaqsTemp1 = () => {
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <>
      <div className="max-w-[768px] container pt-5 md:pt-[50px] mx-auto">
        <h2 className="text-4xl font-semibold p-[10px] leading-8 text-center text-white">
          Frequently Asked Questions (FAQ)
        </h2>{" "}
      </div>

      <div className="py-[10px] md:py-[50px] px-[5px] md:px-[10px] max-w-[1140px] container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-[10px]">
          <div className="  h-full">
            <FAQAccordionTemp1 />
          </div>
          <div className="flex items-center justify-center  h-full py-9 border text-[#FDF7FB] border-[#fdf7fb1a] flex-col">
            <div className="mb-5">
              <FaWhatsapp className="text-6xl" />
            </div>
            <div className="mb-5">
              <h2 className="text-[#FFFFFF] text-center Inter text-4xl font-bold leading-8">
                Online Support
              </h2>{" "}
            </div>
            <div className="mb-5 text-center text-[#F1ECFB] text-xl Inter font-light">
              You still have a question? <br /> Send a message{" "}
            </div>
            <button className="py-3 max-h-12 flex items-center justify-center px-6 border-2 rounded-full text-center text-[#ECECEC] border-[#FCFCFC] text-xl font-bold">
              Whatsapp us
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1140px] container mx-auto px-5">
        <div className="text-center p-[10px]">
          <h2 className="text-4xl font-semibold Inter text-[#FFFFFF]">
            Our Users Love Our Server
          </h2>{" "}
        </div>
        <div className="pt-5 pb-[50px] relative">
          <div
            onClick={handlePrevClick}
            className="absolute left-2 top-1/2 z-20 cursor-pointer"
          >
            <FaAngleLeft className="text-[#FF5C00] text-4xl" />
          </div>
          <div
            onClick={handleNextClick}
            className="absolute right-2 top-1/2 z-20 cursor-pointer"
          >
            <FaAngleRight className="text-[#FF5C00] text-4xl" />
          </div>
          <Swiper
            ref={swiperRef}
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 6,
              },
              1280: {
                slidesPerView: 6,
              },
            }}
          >
            <SwiperSlide>
              <div className=" flex items-center justify-center">
                <img
                  src="/images/whatsapp1.jpg"
                  alt="img"
                  className=" rounded-2xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex items-center justify-center rounded-2xl">
                <img
                  src="/images/whatsapp2.jpg"
                  alt="img"
                  className=" rounded-2xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex items-center justify-center rounded-2xl">
                <img
                  src="/images/whatsapp3.jpg"
                  alt="img"
                  className=" rounded-2xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex items-center justify-center rounded-2xl">
                <img
                  src="/images/whatsapp4.jpg"
                  alt="img"
                  className=" rounded-2xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex items-center justify-center rounded-2xl">
                <img
                  src="/images/whatsapp5.jpg"
                  alt="img"
                  className=" rounded-2xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex items-center justify-center rounded-2xl">
                <img
                  src="/images/whatsapp6.jpg"
                  alt="img"
                  className=" rounded-2xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex items-center justify-center rounded-2xl">
                <img
                  src="/images/whatsapp7.jpg"
                  alt="img"
                  className=" rounded-2xl"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FaqsTemp1;
