import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

export const Navbar = () => {
  return (
    <>
      <div className="container pb-5 pt-[100px] lg:pt-[140px] md:pb-[50px] max-w-[1140px] p-[10px] mx-auto">
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
            <button className="py-[15px]  px-10 bg-[#0085FF] text-[#FFFFFF] text-xl flex items-center justify-center font-bold rounded-md max-h-[50px">
              Free Trial
            </button>
          </div>
        </div>
      </div>

      <div className="pt-5 px-[6px] lg:pt-[50px]">
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

      <div className="p-[10px]  pt-[50px]">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={6}
          loop={true}
          breakpoints={{
            480: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
            <img
              src="/images/download-20-1.jpeg"
              alt="img"
              className="rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/download-10-1.jpeg"
              alt="img"
              className="rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/download-12-1.jpeg"
              alt="img"
              className="rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/download-13-1.jpeg"
              alt="img"
              className="rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/download-16.jpeg"
              alt="img"
              className="rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/download-17-1.jpeg"
              alt="img"
              className="rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/download-19-1.jpeg"
              alt="img"
              className="rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/download-20-1.jpeg"
              alt="img"
              className="rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/download-22.jpeg"
              alt="img"
              className="rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/download-23.jpeg"
              alt="img"
              className="rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/download-25-1.jpeg"
              alt="img"
              className="rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/download-27.jpeg"
              alt="img"
              className="rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/download-32.jpeg"
              alt="img"
              className="rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/download-33.jpeg"
              alt="img"
              className="rounded-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="max-w-[1444px] mx-auto container p-[10px] py-5 md:py-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]  m-4 ">
          <div className="flex w-full flex-col gap-y-5 rounded-lg border border-[#5B5B5B] items-center  justify-center p-8">
            <div className="flex items-center">
              <img
                src="/Images/GlobeHemisphereEast.png"
                alt=""
                className="w-10 h-10"
              />
              <div>
                <h2 className="text-2xl p-[10px] font-bold Inter leading-8 text-white">
                  Channels from 115 countries worldwide
                </h2>{" "}
              </div>
            </div>
            <div className="text-[#F1ECFB] text-sm Inter">
              You can watch TV channels from around the world (Netherlands /
              Belgium / Germany / UK / Spain / Portugal / Poland / Italy /
              Israel / Ex-Yu / Hindi / Arabic / Turkey…)
            </div>
          </div>
          <div className="flex w-full flex-col gap-y-5 rounded-lg border border-[#5B5B5B] items-center  justify-center p-8">
            <div className=" flex items-center">
              <img src="/Images/PiggyBank.png" alt="" className="w-10 h-10" />
              <div>
                <h2 className="text-2xl font-bold p-[10px] Inter leading-8 text-white">
                  7 days money back guarantee
                </h2>{" "}
              </div>
            </div>
            <div className="text-[#F1ECFB] text-sm Inter">
              Within 7 days of your purchase you have the option to cancel our
              IPTV subscription if you are not satisfied. Then you will receive
              a full refund from us.
            </div>
          </div>
          <div className="flex w-full flex-col gap-y-5 rounded-lg border border-[#5B5B5B]  p-8">
            <div className="flex items-center">
              <img src="/Images/Devices.png" alt="" className="w-10 h-10" />
              <div>
                <h2 className="text-2xl p-[10px] font-bold Inter leading-8 text-white">
                  High Quality <br />
                  HD/FHD/4K/8K
                </h2>{" "}
              </div>
            </div>
            <div className="text-[#F1ECFB] text-sm Inter">
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
