import React from "react";

const IpTvEnigmaPage = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1140px]">
        <h2 className="text-3xl p-[5px] lg:p-[10px] px-7 lg:text-[45px] leading-10 border-b border-[#FDF7FB1A] mb-[60px] flex  items-center justify-start  font-semibold Inter text-[#FFFFFF] min-h-[250px]">
          Install IPTV on your Enigma2/Dreambox/Vu+
        </h2>

        <div className="p-[10px]">
          <div className="text-xl px-5 font-normal Inter text-[#ECECEC] text-justify ">
            <p className="mb-4">
              In order to add channels to your Enigma2/Dreambox/Vu+ device,
              follow the below steps:
            </p>

            <h4 className="mb-4">STEP 1:</h4>

            <p className="mb-4">Go to your Enigma2 and get your IP address.</p>

            <p className="mb-4">
              Go to Settings/Setup/System Network Device Setup Adapter Settings.
            </p>

            <p className="mb-4">
              And get your IP address it starts with 192.168…..
            </p>

            <h4 className="mb-4">STEP 2:</h4>

            <p className="mb-4">
              Go to your windows PC and download Putty Software.
            </p>

            <h4 className="mb-4">STEP 3:</h4>

            <p className="mb-4">Open Putty and follow these steps.</p>

            <p className="mb-4">
              Add your IP address of your Enigma ( Same IP as step 1 ) Port 23
              Connection type Telenet Click on “Open”.
            </p>

            <figure className="mb-4">
              <img decoding="async" src="/images/en1.png" alt="" />
            </figure>

            <h4 className="mb-4">STEP 4:</h4>

            <p className="mb-4">Your default login and password are root.</p>

            <figure className="mb-4">
              <img decoding="async" src="/images/en2.png" alt="" />
            </figure>

            <h4 className="mb-4">STEP 5:</h4>

            <p className="mb-4">
              Copy your URL line&nbsp;&nbsp;
              <em>(you will get it after you order your subscription).</em>
            </p>

            <figure className="mb-4">
              <img decoding="async" src="/images/en3.png" alt="" />
            </figure>

            <h4 className="mb-4">STEP 6:</h4>

            <p className="mb-4">
              Use RIGHT CLICK MOUSE BUTTON after you enter your line press
              “ENTER”.
            </p>

            <figure className="mb-4">
              <img decoding="async" src="/images/en4.png" alt="" />
            </figure>

            <h4 className="mb-4">STEP 7:</h4>

            <p className="mb-4">Type reboot and your device will restart.</p>

            <figure className="mb-4">
              <img decoding="async" src="/images/en5.png" alt="" />
            </figure>

            <p className="mb-10">
              Now you will find the&nbsp;<em>IPTV&nbsp;</em>folder, all IPTV
              channels are inside your IPTV folder
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IpTvEnigmaPage;
