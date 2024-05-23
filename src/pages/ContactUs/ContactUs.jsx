import React from "react";
import "../../Styles/ContactUs.css";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      <div className="">
        <div className="container mx-auto max-w-[1140px] px-10 pt-[90px]">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="py-20 px-[50px] Nunito">
              <div>
                <h3 className="text-base md:text-start text-center font-extrabold uppercase text-[#ffffff] ">
                  {" "}
                  <span className="text-[#ffab00]"> [ </span> Contact Us{" "}
                  <span className="text-[#ffab00]"> ] </span>
                </h3>{" "}
              </div>
              <div>
                <h2 className="text-6xl md:text-start text-center font-extrabold LineHeight Nunito text-[#ffffff]">
                  Let's Get in
                </h2>{" "}
              </div>
              <div className="mb-10">
                <h2 className="text-6xl md:text-start text-center font-extrabold LineHeight Nunito text-[#ffffff]">
                  Touch
                </h2>{" "}
              </div>

              <div>
                <div className="flex md:text-start text-center md:flex-row flex-col items-center gap-4 mb-5">
                  <div className="bg-[#ffab00] w-12 h-12 flex hover:text-[#69727d] duration-300 ease-in-out text-white items-center justify-center">
                    <FaEnvelope className="text-base" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#ffffff] mb-[6px]">
                      <span>Email Address </span>
                    </h3>
                    <p className="text-base text-[#ffffff]">
                      support@iptvtemplate.shop{" "}
                    </p>
                  </div>
                </div>
                <div className="flex md:text-start text-center md:flex-row flex-col items-center gap-4 mb-5">
                  <div className="bg-[#ffab00] w-12 h-12 flex hover:text-[#69727d] duration-300 ease-in-out text-white items-center justify-center">
                    <FaPhone className="text-base" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#ffffff] mb-[6px]">
                      <span>Call Us </span>
                    </h3>
                    <p className="text-base text-[#ffffff]">+212610 93 66 22</p>
                  </div>
                </div>
                <div className="flex md:text-start text-center md:flex-row flex-col items-center gap-4 mb-5">
                  <div className="bg-[#ffab00] w-12 h-12 flex hover:text-[#69727d] duration-300 ease-in-out text-white items-center justify-center">
                    <FaWhatsapp className="text-base" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#ffffff] mb-[6px]">
                      <span>WhatsApp us </span>
                    </h3>
                    <p className="text-base text-[#ffffff]">+212610 93 66 22</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full Roboto">
              <form>
                <div className="mb-5">
                  <label
                    for="first_name"
                    className="block mb-2 text-sm font-semibold text-[#ffffff]"
                  >
                    Fullname <span className="text-[#f00]">*</span>
                  </label>

                  <input
                    type="text"
                    id="first_name"
                    className="bg-white border max-h-12 rounded-3xl border-[#4285f478] outline-none text-gray-900 text-base  w-full p-2.5 "
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    for="email"
                    className="block mb-2 text-sm font-semibold text-[#ffffff]"
                  >
                    Email address <span className="text-[#f00]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-white border max-h-12 rounded-3xl border-[#4285f478] outline-none text-gray-900 text-base  w-full p-2.5 "
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    for="countries"
                    className="block mb-2 text-sm font-semibold text-[#ffffff]"
                  >
                    Create Custom Template
                  </label>
                  <select
                    id="countries"
                    className="bg-white border max-h-12 rounded-3xl border-[#4285f478] outline-none text-gray-900 text-base  w-full p-2.5 "
                  >
                    <option value="Order">Order A Template</option>
                    <option selected>Create Custom Template</option>
                    <option value="Report">Report Template Issue</option>
                    <option value="Template">Template Installation help</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <label
                  for="message"
                  className="block mb-2 text-sm font-semibold text-[#ffffff]"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="10"
                  cols="30"
                  className="block p-2.5 w-full text-base max-h-[150px] outline-none text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
                  placeholder="Textarea"
                ></textarea>

                <div className="mt-6 flex items-center justify-center">
                  <button
                    type="submit"
                    className="text-black flex items-center justify-center Shadow max-h-12 py-[15px] px-9  bg-[#AAFF20] rounded-3xl font-medium text-base w-full sm:w-auto "
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
