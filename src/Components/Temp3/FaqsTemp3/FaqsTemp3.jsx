import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import FaqItems from "../FaqsItemsTemp3/FaqsItemsTemp3";

const Faqs = () => {
  return (
    <>
      <div className="max-w-[768px] container pt-5 md:pt-[50px] mx-auto">
        <h2 className="text-4xl font-semibold p-[10px] leading-8 text-center text-white">
          Frequently Asked Questions (FAQ)
        </h2>{" "}
      </div>

      <div className="py-[10px] md:py-[50px] px-[5px] md:px-[10px] max-w-[830px] container mx-auto">
        <div className="p-4">
          <FaqItems />
        </div>

        <div className=" mx-[10px] my-[50px] py-[50px] px-[15px] text-white BorderRadius">
          <div className="flex md:flex-row flex-col px-3 gap-y-4 md:items-center justify-around">
            <div className="flex md:flex-row flex-col md:items-center md:justify-center">
              <div className="mr-[15px]">
                <FaWhatsapp className="text-[87px] font-medium" />
              </div>
              <div>
                <h3 className="text-4xl font-bold Inter mb-4 mt-2">
                  <span>Online Support </span>
                </h3>
                <p className="text-[#CECECE] text-base">
                  You still have a question? Send a message{" "}
                </p>
              </div>
            </div>
            <div>
              <button className="bg-[#FFFFFF] text-[#181818] text-lg font-bold px-[30px] py-[15px] max-h-12 rounded-lg flex items-center justify-center">
                WhatsApp us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
