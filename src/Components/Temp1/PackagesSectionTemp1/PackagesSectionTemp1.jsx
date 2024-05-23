import React from "react";
import { TiTick } from "react-icons/ti";
import { CgScreen } from "react-icons/cg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

const PackagesSectionTemp1 = () => {
  return (
    <>
      <div>
        <div className="max-w-[836px] p-[6px] md:p-[10px] container mx-auto">
          <h2 className=" text-3xl md:text-4xl font-bold md:p-4 leading-8 text-center text-white">
            In Demand Movies, Shows, News &amp; Sports All In One Package
          </h2>{" "}
        </div>

        <div className="p-[10px]  pt-5">
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            breakpoints={{
              480: {
                slidesPerView: 3,
              },
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
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
                className="mr-5  rounded-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/download-23.jpeg"
                alt="img"
                className="mr-5  rounded-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/download-24.jpeg"
                alt="img"
                className="mr-5  rounded-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/download-25.jpeg"
                alt="img"
                className="mr-5  rounded-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/download-26.jpeg"
                alt="img"
                className="mr-5  rounded-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/download-34.jpeg"
                alt="img"
                className="mr-5  rounded-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/download-36.jpeg"
                alt="img"
                className="mr-5  rounded-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/download-37.jpeg"
                alt="img"
                className="mr-5  rounded-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/download-42.jpeg"
                alt="img"
                className="mr-5  rounded-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/download-43.jpeg"
                alt="img"
                className="mr-5  rounded-2xl"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="max-w-[603px] container mx-auto pt-[50px]">
        <h2 className="text-4xl font-semibold p-[10px] leading-8 text-center text-white">
          Choose your plan
        </h2>{" "}
        <div>
          <p className="mb-4 text-center text-base leading-6 text-white">
            Not sure?{" "}
            <span>
              <p className="text-[#ff5c00] cursor-pointer">
                Try our 24h free trial
              </p>
            </span>
          </p>
        </div>
      </div>

      <div className="p-[10px] max-w-[1450px] container mx-auto pt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:grid-cols-4 p-4">
          <div className="border text-white h-full border-[#fdf7fb1a]  p-[50px] rounded-2xl">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="mb-5">
                <span className="text-xl font-light Inter ">12 Months</span>{" "}
              </div>
              <div className="mb-5">
                <h3 className="text-[52px] font-bold Inter ">$59.99</h3>{" "}
                <span className="mb-9 text-[#FF5C00] text-xl font-normal Inter">
                  (+1 Month Free)
                </span>{" "}
              </div>
            </div>

            <div>
              <ul className="mb-5">
                <li>
                  <div className="flex text-sm font-normal mt-1 items-center gap-[5px] border-b border-[#3942AB] pb-1">
                    <TiTick />
                    <span>HD/4K/8K IPTV</span>
                  </div>
                </li>
                <li>
                  <div className="flex text-sm font-normal mt-1 items-center gap-[5px] border-b border-[#3942AB] pb-1">
                    <TiTick />
                    <span>+15.000 Channels</span>
                  </div>
                </li>
                <li>
                  <div className="flex text-sm font-normal mt-1 items-center gap-[5px] border-b border-[#3942AB] pb-1">
                    <TiTick />
                    <span>+100.000 Vod</span>
                  </div>
                </li>
                <li>
                  <div className="flex text-sm font-normal mt-1 items-center gap-[5px] border-b border-[#3942AB] pb-1">
                    <TiTick />
                    <span>Watch Channels</span>
                  </div>
                </li>
                <li>
                  <div className="flex text-sm font-normal text-start mt-1 gap-[5px]">
                    <TiTick />
                    <span>
                      7 days money back <br /> guarantee
                    </span>
                  </div>
                </li>
              </ul>

              <button className="py-[15px] mx-auto mb-5 w-auto gap-2 text-lg px-[25px] bg-[#FF5C00] text-[#121212] flex items-center justify-center font-bold rounded-3xl max-h-12">
                <CgScreen className="font-black text-xl" />
                <p>Buy Now</p>
              </button>

              <div className="text-center mb-5 text-sm font-medium text-[#FDF7FB]">
                <span>Ready within 5-7mins </span>{" "}
              </div>

              <div className="flex items-center justify-center text-center gap-5">
                {/* <AiOutlineApple />
                <TbRobot />
                <CgWindows />
                <MdOndemandVideo /> */}
                <img src="/images/devices-1.webp" alt="img" />
              </div>
            </div>
          </div>
          <div className="border-2 bg-[#ff5c0008] text-white h-full border-[#FF5C00]  p-[50px] rounded-2xl">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="mb-5">
                <span className="text-xl font-light Inter ">6 Months</span>{" "}
              </div>
              <div className="mb-5">
                <h3 className="text-[52px] font-bold Inter ">$39.99</h3>{" "}
                <span className="mb-9 text-white text-xl font-normal Inter">
                  (+1 Month Free)
                </span>{" "}
              </div>
            </div>

            <div>
              <ul className="mb-5">
                <li>
                  <div className="flex text-sm font-normal mt-1 items-center gap-[5px] border-b border-[#3942AB] pb-1">
                    <TiTick />
                    <span>HD/4K/8K IPTV</span>
                  </div>
                </li>
                <li>
                  <div className="flex text-sm font-normal mt-1 items-center gap-[5px] border-b border-[#3942AB] pb-1">
                    <TiTick />
                    <span>+15.000 Channels</span>
                  </div>
                </li>
                <li>
                  <div className="flex text-sm font-normal mt-1 items-center gap-[5px] border-b border-[#3942AB] pb-1">
                    <TiTick />
                    <span>+100.000 Vod</span>
                  </div>
                </li>
                <li>
                  <div className="flex text-sm font-normal mt-1 items-center gap-[5px] border-b border-[#3942AB] pb-1">
                    <TiTick />
                    <span>Watch Channels</span>
                  </div>
                </li>
                <li>
                  <div className="flex text-sm font-normal text-start mt-1 gap-[5px]">
                    <TiTick />
                    <span>
                      7 days money back <br /> guarantee
                    </span>
                  </div>
                </li>
              </ul>

              <button className="py-[15px] mx-auto mb-5 w-auto gap-2 text-lg px-[25px] bg-[#FF5C00] text-[#121212] flex items-center justify-center font-bold rounded-3xl max-h-12">
                <CgScreen className="font-black text-xl" />
                <p>Buy Now</p>
              </button>

              <div className="text-center mb-5 text-sm font-medium text-[#FDF7FB]">
                <span>Ready within 5-7mins </span>{" "}
              </div>

              <div className="flex items-center justify-center text-center gap-5">
                {/* <AiOutlineApple />
                <TbRobot />
                <CgWindows />
                <MdOndemandVideo /> */}
                <img src="/images/devices-1.webp" alt="img" />
              </div>
            </div>
          </div>
          <div className="border text-white h-full border-[#fdf7fb1a]  p-[50px] rounded-2xl">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="mb-5">
                <span className="text-xl font-light Inter ">3 Months</span>{" "}
              </div>
              <div className="mb-5">
                <h3 className="text-[52px] font-bold Inter ">$24.99</h3>{" "}
                <span className="mb-9 text-[#FF5C00] text-xl font-normal Inter">
                  (+1 Month Free)
                </span>{" "}
              </div>
            </div>

            <div>
              <ul className="mb-5">
                <li>
                  <div className="flex text-sm font-normal mt-1 items-center gap-[5px] border-b border-[#3942AB] pb-1">
                    <TiTick />
                    <span>HD/4K/8K IPTV</span>
                  </div>
                </li>
                <li>
                  <div className="flex text-sm font-normal mt-1 items-center gap-[5px] border-b border-[#3942AB] pb-1">
                    <TiTick />
                    <span>+15.000 Channels</span>
                  </div>
                </li>
                <li>
                  <div className="flex text-sm font-normal mt-1 items-center gap-[5px] border-b border-[#3942AB] pb-1">
                    <TiTick />
                    <span>+100.000 Vod</span>
                  </div>
                </li>
                <li>
                  <div className="flex text-sm font-normal mt-1 items-center gap-[5px] border-b border-[#3942AB] pb-1">
                    <TiTick />
                    <span>Watch Channels</span>
                  </div>
                </li>
                <li>
                  <div className="flex text-sm font-normal text-start mt-1 gap-[5px]">
                    <TiTick />
                    <span>
                      7 days money back <br /> guarantee
                    </span>
                  </div>
                </li>
              </ul>

              <button className="py-[15px] mx-auto mb-5 w-auto gap-2 text-lg px-[25px] bg-[#FF5C00] text-[#121212] flex items-center justify-center font-bold rounded-3xl max-h-12">
                <CgScreen className="font-black text-xl" />
                <p>Buy Now</p>
              </button>

              <div className="text-center mb-5 text-sm font-medium text-[#FDF7FB]">
                <span>Ready within 5-7mins </span>{" "}
              </div>

              <div className="flex items-center justify-center text-center gap-5">
                {/* <AiOutlineApple />
                <TbRobot />
                <CgWindows />
                <MdOndemandVideo /> */}
                <img src="/images/devices-1.webp" alt="img" />
              </div>
            </div>
          </div>
          <div className="border text-white h-full border-[#fdf7fb1a]  p-[50px] rounded-2xl">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="mb-5">
                <span className="text-xl font-light Inter ">1 Months</span>{" "}
              </div>
              <div className="mb-5">
                <h3 className="text-[52px] font-bold Inter ">$14.99</h3>{" "}
                <span className="mb-9 text-[#FF5C00] text-xl font-normal Inter">
                  (+1 Month Free)
                </span>{" "}
              </div>
            </div>

            <div>
              <ul className="mb-5">
                <li>
                  <div className="flex text-sm font-normal mt-1 items-center gap-[5px] border-b border-[#3942AB] pb-1">
                    <TiTick />
                    <span>HD/4K/8K IPTV</span>
                  </div>
                </li>
                <li>
                  <div className="flex text-sm font-normal mt-1 items-center gap-[5px] border-b border-[#3942AB] pb-1">
                    <TiTick />
                    <span>+15.000 Channels</span>
                  </div>
                </li>
                <li>
                  <div className="flex text-sm font-normal mt-1 items-center gap-[5px] border-b border-[#3942AB] pb-1">
                    <TiTick />
                    <span>+100.000 Vod</span>
                  </div>
                </li>
                <li>
                  <div className="flex text-sm font-normal mt-1 items-center gap-[5px] border-b border-[#3942AB] pb-1">
                    <TiTick />
                    <span>Watch Channels</span>
                  </div>
                </li>
                <li>
                  <div className="flex text-sm font-normal text-start mt-1 gap-[5px]">
                    <TiTick />
                    <span>
                      7 days money back <br /> guarantee
                    </span>
                  </div>
                </li>
              </ul>

              <button className="py-[15px] mx-auto mb-5 w-auto gap-2 text-lg px-[25px] bg-[#FF5C00] text-[#121212] flex items-center justify-center font-bold rounded-3xl max-h-12">
                <CgScreen className="font-black text-xl" />
                <p>Buy Now</p>
              </button>

              <div className="text-center mb-5 text-sm font-medium text-[#FDF7FB]">
                <span>Ready within 5-7mins </span>{" "}
              </div>

              <div className="flex items-center justify-center text-center gap-5">
                {/* <AiOutlineApple />
                <TbRobot />
                <CgWindows />
                <MdOndemandVideo /> */}
                <img src="/images/devices-1.webp" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[603px] container pt-[20px] md:pt-[50px] mx-auto">
        <h2 className="text-4xl font-semibold p-[10px] leading-8 text-center text-white">
          How does it work?
        </h2>{" "}
      </div>

      <div className="max-w-[1140px] mx-auto container px-[10px] py-3 md:py-[50px]">
        <div className="flex items-center md:flex-row flex-col justify-center m-4 border border-[#fdf7fb1a] rounded-lg">
          <div className="flex w-full md:w-1/3 flex-col gap-y-5 p-[15px] max-md:border-b md:border-r border-[#fdf7fb1a] items-center  justify-center">
            <img src="/Images/lock.webp" alt="" />
            <div>
              <h2 className="text-2xl text-center font-bold Inter leading-8 text-white">
                1. Place your order
              </h2>{" "}
            </div>
            <div className="text-[#F1ECFB] text-sm Inter text-center">
              Place your order by choosing your preferred subscription period :
              1, 3, 6 or 12 months.
              <br />
              Note: You will get a free month no matter what plan you choose.
            </div>
          </div>
          <div className="flex w-full md:w-1/3 flex-col gap-y-5 p-[15px] max-md:border-b md:border-r border-[#fdf7fb1a] items-center  justify-center">
            <img src="/Images/person.webp" alt="" />
            <div>
              <h2 className="text-2xl text-center font-bold Inter leading-8 text-white">
                2. Get your account
              </h2>{" "}
            </div>
            <div className="text-[#F1ECFB] text-sm Inter text-center">
              This process can take 15 to 30 minutes.Please check your inbox and
              your spam folder.
              <br />
              To speed up the process, please contact us via Whatsapp.
            </div>
          </div>
          <div className="flex w-full md:w-1/3 flex-col gap-y-5 p-[15px] border-[#fdf7fb1a] items-center  justify-center">
            <img src="/Images/tv.webp" alt="" />
            <div>
              <h2 className="text-2xl text-center font-bold Inter leading-8 text-white">
                3. Enjoy your IPTV service!
              </h2>{" "}
            </div>
            <div className="text-[#F1ECFB] text-sm Inter text-center">
              Enjoy all channels, films and series now!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackagesSectionTemp1;
