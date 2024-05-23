import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

export const HeroTemp1 = () => {
  return (
    <>
      <div className="bg-[#1E1E1E] text-white">
        <div className="pt-5 p-[6px] md:p-[10px] max-w-[1218px]  mx-auto">
          <div className="flex  justify-center md:flex-row flex-col-reverse p-4 lg:items-center gap-5">
            <div className="w-full md:w-1/2">
              <div>
                <h2 className="text-4xl md:text-start text-center md:text-5xl lg:text-[60px] leading-none font-black mb-5">
                  All-In-One Quality IPTV Service
                </h2>{" "}
              </div>
              <div className="mb-5">
                <h3 className="text-[15px] text-center  lg:text-start md:text-xl lg:px-4 font-light leading-5 md:leading-7 md:tracking-normal Inter text-[#FFFFFF]">
                  Enjoy your time with excellent image quality up to 4K, on any
                  device, anytime and anywhere, with over +18,000 channels,
                  +88,000 VOD and uptime 100%
                </h3>
              </div>
              <div className="mb-5 flex md:items-start md:justify-start items-center justify-center">
                <button className="py-[15px] px-[30px] bg-[#FF5C00] text-[#121212] flex items-center justify-center font-bold rounded-3xl max-h-12">
                  Free Trial
                </button>
              </div>

              <div className="p-5 ">
                <Swiper
                  slidesPerView={4}
                  loop={true}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 4,
                    },
                    1280: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className=" flex items-center justify-center w-[143px] h-[75px]">
                      <img
                        src="/images/bundesliga-logo-1.png"
                        alt="img"
                        className=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" flex items-center justify-center w-[143px] h-[75px]">
                      <img
                        src="/images/laliga-h-1200x1200-1.png"
                        alt="img"
                        className=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" flex items-center justify-center w-[143px] h-[75px]">
                      <img
                        src="/images/ucl-logo-1.png"
                        alt="img"
                        className=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" flex items-center justify-center w-[143px] h-[75px]">
                      <img src="/images/IT1-1.png" alt="img" className="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" flex items-center justify-center w-[143px] h-[75px]">
                      <img
                        src="/images/51-516917_premier-league-logo-white-1.png"
                        alt="img"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div>
              <img
                src="/images/people-enjoying-film-cinema-1-2.png"
                alt="herimg"
                className="rounded-b-full w-full"
              />{" "}
            </div>
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
            <img src="/Images/diamond.png" alt="" />
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
              src="/Images/money.png"
              alt="img"
              className="w-9 h-9 mx-auto"
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
            <img src="/Images/tv.png" alt="img" className="w-9 h-9 mx-auto" />
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
