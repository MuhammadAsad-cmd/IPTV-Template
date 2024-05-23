import React from "react";

const IpTvMaagPage = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1140px]">
        <h2 className="text-3xl px-5 p-[10px] lg:text-[45px] leading-10 border-b border-[#FDF7FB1A] mb-[60px] flex  items-center justify-start mx-auto font-semibold Inter text-[#FFFFFF] min-h-[250px]">
          Install IPTV on your MAG device​
        </h2>

        <div className="p-[10px] ">
          <div className="text-xl px-5 font-normal Inter text-[#ECECEC] text-justify ">
            <figure className="mb-4">
              <img decoding="async" src="/images/mag351.png" alt="" />
            </figure>

            <p className="mb-4">
              <strong>MAG</strong>&nbsp;boxes are some of the most robust
              streaming media players.&nbsp;<strong>IPTV</strong>&nbsp;users
              choose them for their speed, Simplicity, and excellent streaming
              performance.&nbsp;The user interface is simple and responsive,
              channel switching is quick and you receive all the features
              required to get the most out of your&nbsp;<strong>IPTV</strong>
              &nbsp;service.
            </p>

            <h4 className="mb-4">STEP 1:</h4>

            <p className="mb-4">
              When the box is being loaded the main portal screen appears. After
              that click on “<strong>settings</strong>”, press the remote button
              “<strong>SETUP/SET</strong>”
            </p>

            <figure className="mb-4">
              <img
                decoding="async"
                src="/images/8153-iptv-mag-mainpage-1.jpg"
                alt=""
              />
            </figure>

            <h4 className="mb-4">STEP 2:</h4>

            <p className="mb-4">
              Then press on “<strong>System settings</strong>” and&nbsp;click on
              “<strong>Servers</strong>”.
            </p>

            <figure className="mb-4">
              <img
                decoding="async"
                src="/images/9030-iptv-mag-systemsettings-2.jpg"
                alt=""
              />
            </figure>

            <h4 className="mb-4">STEP 3:</h4>

            <p className="mb-4">
              Select “<strong>Portals</strong>”.
            </p>

            <figure className="mb-4">
              <img
                decoding="async"
                src="/images/2830-iptv-mag-portals-3.jpg"
                alt=""
              />
            </figure>

            <h4 className="mb-4">STEP 4:</h4>

            <p className="mb-4">
              In the “<strong>Portal 1 name</strong>” line enter the following
              ”&nbsp;<strong>IPTV</strong>&nbsp;“. <br /> In the “
              <strong>Portal 1 URL</strong>” enter the portal address provided
              by your IPTV service provider.
            </p>

            <figure className="mb-4">
              <img
                decoding="async"
                src="/images/4843-iptv-mag-portals-4.jpg"
                alt=""
              />
            </figure>

            <h4 className="mb-4">STEP 5:</h4>

            <p className="mb-4">
              When all the operations listed above are done, then press “
              <strong>OK</strong>”. <br /> When the settings are being saved
              click “<strong>EXIT</strong>” on the remote control and press the
              option “<strong>General</strong>”. <br /> In the “NTP server,”
              line enter the following address “pool.ntp.org or us.pool.ntp.org“
              for North America.
            </p>

            <figure className="mb-4">
              <img
                decoding="async"
                src="/images/8212-iptv-mag-ntpserver-5.jpg"
                alt=""
              />
            </figure>

            <p className="mb-4">
              Press “<strong>OK</strong>” to&nbsp;save the changes you made.
            </p>

            <p className="mb-10">
              When all the steps listed above are done press ”
              <strong>EXIT</strong>” 2 times on the remote control and restart
              the portal. Now everything is ready to start watching Live TV.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IpTvMaagPage;
