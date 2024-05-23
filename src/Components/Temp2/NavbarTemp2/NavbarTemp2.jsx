import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

export const NavbarTemp2 = () => {
  return (
    <>
      <div className=" QuickSand">
        <div className="max-w-[1140px] container mx-auto">
          <div className="flex items-center h-[60px]  text-white justify-between py-4 px-8">
            <div>
              <h1 className="text-[30px] font-bold leading-8">LOGO</h1>{" "}
            </div>
            <div className="xl:block hidden">
              <button className="py-3 px-6 bg-[#95dd4c] text-[#121212] flex items-center justify-center font-bold rounded-3xl max-h-10">
                Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5 md:py-[50px] max-w-[1140px] p-[10px] mx-auto">
        <div className="px-[10px]">
          <div className="text-[40px] md:text-6xl mb-5 font-black px-[10px] text-white LineHeight text-center">
            All-In-One Premium <span className="text-[#95dd4c]">IPTV</span>{" "}
            Service
          </div>{" "}
          <div className="md:px-[100px] mb-5">
            <p className="text-[15px] md:text-xl text-white font-light Inter text-center">
              Enjoy your time with excellent image quality up to 4K, on any
              device, anytime and anywhere, with over +18,000 channels, +88,000
              VOD and uptime 100%
            </p>{" "}
          </div>
          <div className="flex items-center justify-center mb-5">
            <button className="py-[15px] px-10 bg-[#95DD4C] text-[#121212] flex items-center justify-center font-bold rounded-3xl max-h-[50px]">
              Free Trial
            </button>
          </div>
          <div>
            <img
              src="/images/people-enjoying-film-cinema-1-1.png"
              alt="herimg"
              className="rounded-3xl w-full"
            />{" "}
          </div>
        </div>
      </div>

      <div className="pt-8 px-[6px] md:pt-[50px]">
        <Swiper
          slidesPerView={4}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 7,
            },
            1024: {
              slidesPerView: 10,
            },
            1280: {
              slidesPerView: 10,
            },
          }}
        >
          <SwiperSlide>
            <div className=" flex items-center justify-center w-[126px] h-[44px]">
              <img src="/images/brand_item05-150x46-1-1.png" alt="img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex items-center justify-center w-[126px] h-[44px]">
              <img src="/images/brand_item06-150x46-1.png" alt="img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex items-center justify-center w-[126px] h-[44px]">
              <img src="/images/brand_item08-150x46-1-1.png" alt="img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex items-center justify-center w-[126px] h-[44px]">
              <img src="/images/brand_item09-150x46-1-1.png" alt="img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex items-center justify-center w-[126px] h-[44px]">
              <img src="/images/brand_item10-150x46-1-1.png" alt="img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex items-center justify-center w-[126px] h-[44px]">
              <img src="/images/brand_item11-1.png" alt="img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex items-center justify-center w-[126px] h-[44px]">
              <img src="/images/brand_item12-1.png" alt="img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex items-center justify-center w-[126px] h-[44px]">
              <img src="/images/brand_item13-150x46-1-1.png" alt="img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex items-center justify-center w-[126px] h-[44px]">
              <img src="/images/brand_item14-150x46-1-1.png" alt="img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex items-center justify-center w-[126px] h-[44px]">
              <img src="/images/brand_item15-150x46-1-1.png" alt="img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex items-center justify-center w-[126px] h-[44px]">
              <img src="/images/brand_item16-150x46-1-1.png" alt="img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex items-center justify-center w-[126px] h-[44px]">
              <img src="/images/brand_item17-150x46-1-1.png" alt="img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex items-center justify-center w-[126px] h-[44px]">
              <img src="/images/brand_item18-150x46-1-1.png" alt="img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex items-center justify-center w-[126px] h-[44px]">
              <img src="/images/brand_item21-150x46-1-1.png" alt="img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex items-center justify-center w-[126px] h-[44px]">
              <img src="/images/brand_item22-150x46-1-1.png" alt="img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex items-center justify-center w-[126px] h-[44px]">
              <img src="/images/brand_item18-150x46-1-1.png" alt="img" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="max-w-[1140px] mx-auto container p-[10px] py-5 md:py-[50px]">
        <div className="flex md:flex-row flex-col  border m-4 border-[#fdf7fb1a] rounded-xl">
          <div className="flex w-full md:w-1/3 flex-col gap-y-5 p-[15px] max-md:border-b md:border-r border-[#fdf7fb1a] items-center  justify-center">
            <img
              src="/Images/direction-board.webp"
              alt=""
              className="w-[100px] h-[100px] mx-auto"
            />
            <div>
              <h2 className="text-2xl text-center font-bold Inter leading-8 text-white">
                Channels from 115 countries worldwide
              </h2>{" "}
            </div>
            <div className="text-[#F1ECFB] text-sm Inter text-center">
              You can watch TV channels from around the world (Netherlands /
              Belgium / Germany / UK / Spain / Portugal / Poland / Italy /
              Israel / Ex-Yu / Hindi / Arabic / Turkey…){" "}
            </div>
          </div>
          <div className="flex w-full h-full md:w-1/3 flex-col gap-y-5 p-[15px] max-md:border-b  border-[#fdf7fb1a] ">
            <img
              src="/Images/lock-key.webp"
              alt="img"
              className="w-[100px] h-[100px] mx-auto"
            />
            <div>
              <h2 className="text-2xl text-center font-bold Inter leading-8 text-white">
                7 days money back guarantee
              </h2>{" "}
            </div>
            <div className="text-[#F1ECFB] text-sm Inter text-center">
              Within 7 days of your purchase you have the option to cancel our
              IPTV subscription if you are not satisfied. Then you will receive
              a full refund from us.
            </div>
          </div>
          <div className="flex w-full md:w-1/3 flex-col gap-y-5 border rounded-r-xl p-[15px]  border-[#fdf7fb1a] ">
            <img
              src="/Images/badge.webp"
              alt="img"
              className="w-[100px] h-[100px] mx-auto"
            />
            <div>
              <h2 className="text-2xl text-center font-bold Inter leading-8 text-white">
                High Quality HD/FHD/4K/8K
              </h2>{" "}
            </div>
            <div className="text-[#F1ECFB] text-sm Inter text-center">
              We offer all image qualities to view our iptv service everywhere,
              regardless of your network speed on: Mobile / TV / Android box /
              PC …
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
