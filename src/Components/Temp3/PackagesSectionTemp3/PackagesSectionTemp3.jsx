import React from "react";
import { TiTick } from "react-icons/ti";
import { CgScreen } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";

const PackagesSection = () => {
  return (
    <>
      <div className="max-w-[603px] container mx-auto pt-[50px]">
        <h2 className="text-4xl font-bold Inter p-[10px] leading-8 text-center text-white">
          Choose your plan
        </h2>{" "}
      </div>

      <div className="p-[10px] max-w-[1450px] container mx-auto pt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:grid-cols-4 p-4">
          <div className="text-white h-full  p-[50px] rounded-2xl">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="mb-5">
                <span className="text-xl font-light Inter ">12 Months</span>{" "}
              </div>
              <div className="mb-5">
                <h3 className="text-[52px] font-bold Inter ">$59.99</h3>{" "}
                <span className="mb-9 text-xl font-normal Inter">
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

              <button className="py-[15px] mx-auto mb-5 w-auto gap-2 text-lg px-[25px] bg-[#E5C100] text-[#000233]  rounded-lg flex items-center justify-center font-bold max-h-12">
                <CgScreen className="font-black text-xl" />
                <p>Buy Now</p>
              </button>

              <div className="text-center mb-5 text-sm font-medium text-[#FDF7FB]">
                <span>Ready within 5-7mins </span>{" "}
              </div>

              <div className="flex items-center justify-center text-center gap-5">
                <img src="/images/Frame-22.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="text-white h-full border-4 border-[#E5C100]  p-[50px] rounded-2xl">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="mb-5">
                <span className="text-xl font-light Inter ">6 Months</span>{" "}
              </div>
              <div className="mb-5">
                <h3 className="text-[52px] font-bold Inter ">$39.99</h3>{" "}
                <span className="mb-9  text-xl font-normal Inter">
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

              <button className="py-[15px] mx-auto mb-5 w-auto gap-2 text-lg px-[25px] bg-[#E5C100] text-[#000233]  rounded-lg flex items-center justify-center font-bold max-h-12">
                <CgScreen className="font-black text-xl" />
                <p>Buy Now</p>
              </button>

              <div className="text-center mb-5 text-sm font-medium ">
                <span>Ready within 5-7mins </span>{" "}
              </div>

              <div className="flex items-center justify-center text-center gap-5">
                <img src="/images/Frame-22.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="text-white h-full  p-[50px] rounded-2xl">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="mb-5">
                <span className="text-xl font-light Inter ">3 Months</span>{" "}
              </div>
              <div className="mb-5">
                <h3 className="text-[52px] font-bold Inter ">$24.99</h3>{" "}
                <span className="mb-9  text-xl font-normal Inter">
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

              <button className="py-[15px] mx-auto mb-5 w-auto gap-2 text-lg px-[25px] bg-[#E5C100] text-[#000233]  rounded-lg flex items-center justify-center font-bold max-h-12">
                <CgScreen className="font-black text-xl" />
                <p>Buy Now</p>
              </button>

              <div className="text-center mb-5 text-sm font-medium text-[#FDF7FB]">
                <span>Ready within 5-7mins </span>{" "}
              </div>

              <div className="flex items-center justify-center text-center gap-5">
                <img src="/images/Frame-22.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="text-white h-full  p-[50px] rounded-2xl">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="mb-5">
                <span className="text-xl font-light Inter ">1 Months</span>{" "}
              </div>
              <div className="mb-5">
                <h3 className="text-[52px] font-bold Inter ">$14.99</h3>{" "}
                <span className="mb-9 text-xl font-normal Inter">
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

              <button className="py-[15px] mx-auto mb-5 w-auto gap-2 text-lg px-[25px] bg-[#E5C100] text-[#000233]  rounded-lg flex items-center justify-center font-bold max-h-12">
                <CgScreen className="font-black text-xl" />
                <p>Buy Now</p>
              </button>

              <div className="text-center mb-5 text-sm font-medium text-[#FDF7FB]">
                <span>Ready within 5-7mins </span>{" "}
              </div>

              <div className="flex items-center justify-center text-center gap-5">
                <img src="/images/Frame-22.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#00034D] max-w-[1450px] container mx-auto py-10">
        <div className="max-w-[603px] container pt-[20px] md:pt-[50px] mx-auto">
          <h2 className="text-4xl font-semibold p-[10px] leading-8 text-center text-white">
            How does it work?
          </h2>{" "}
        </div>

        <div className="flex items-center md:flex-row flex-col justify-center m-4 rounded-lg">
          <div className="flex w-full  flex-col gap-y-5 p-[15px]  items-center  justify-center">
            <img src="/Images/ShoppingCart.png" alt="" />
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
          <div className="flex w-full  flex-col gap-y-5 p-[15px]  items-center  justify-center">
            <FaWhatsapp className="text-[100px]" />
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
          <div className="flex w-full  flex-col gap-y-5 p-[15px]  items-center  justify-center">
            <img src="/Images/Armchair.png" alt="" />
            <div>
              <h2 className="text-2xl text-center font-bold Inter leading-8 text-white">
                3. Enjoy your IPTV service!
              </h2>{" "}
            </div>
            <div className="text-[#F1ECFB] text-sm Inter text-center">
              Enjoy all channels, films and series now!
            </div>
            <button className="py-[15px] px-10 bg-[#0085FF] text-[#FFFFFF] text-xl flex items-center justify-center font-bold rounded-md max-h-12">
              Free Trial
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackagesSection;
