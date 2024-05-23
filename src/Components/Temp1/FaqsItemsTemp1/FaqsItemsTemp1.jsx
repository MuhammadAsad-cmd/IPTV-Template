import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const FAQAccordionTemp1 = () => {
  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: (
        <ul className="list-disc list-inside pl-3 space-y-1">
          <li>Paypal</li>
          <li>Credit Card</li>
          <li>Crypto</li>
        </ul>
      ),
    },
    {
      question: "Which devices can be used for IPTV?",
      answer:
        "Our IPTV services are accessible via all smart TV devices (Samsung, Sony, LG…), all Android devices (phones), Apple TV, iPhone, Google Chromecast, MAG box in the STB emulator app and FireStick.",
    },
    {
      question: "Recommended internet speed?",
      answer:
        "If your download speed is not less than 30 mbps, then everything will work smoothly in the highest quality. If you are not sure, ask for 1 day trial to test the quality first.",
    },
    {
      question: "Which countries are present?",
      answer:
        "Netherlands Belgium France UK Germany Switzerland Austria Poland Spain Malta Portugal Italy USA Canada Australia New Zealand Arabic India Pakistan Iran Turkey Azerbaycan Kurdistan Africa Afghanistan Armenia Exyu Slovenia Albania Greece Latino Brazil Caribbean Suriname Sweden Denmark Norway Finland Czech Bulgaria Romania Hungary Russia Georgia/Kazakh Ukraine Lithuania Latvia Estonia China/HK Malaysia Philippines Indonesia Korea Thailand Taiwan Vietnam",
    },
    {
      question: "How many connections at once?",
      answer:
        "You may install your account on multiple devices, but keep in mind that it works on 1 at a time.",
    },
    {
      question: "How can I test the IPTV service?",
      answer:
        "Watch [WEBSITE] offers you a 24h free trial. With this you can watch all the channels available on our IPTV packages, adult (excl. on demand) channels movies and series.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full h-full max-w-lg mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-2">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex items-center bg-[#FAFDF708] justify-between w-full p-[15px] text-left focus:outline-none"
          >
            <span className="text-base font-semibold text-[#F1ECFB]">
              {faq.question}
            </span>
            <span className="ml-6">
              {activeIndex === index ? (
                <FaAngleLeft className="text-lg text-[#F1ECFB]" />
              ) : (
                <FaAngleDown className="text-lg text-[#F1ECFB]" />
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-height duration-2000 ${
              activeIndex === index ? "h-auto" : "h-0"
            }`}
          >
            <div className="text-[#C8C8C8] p-[15px]">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordionTemp1;
