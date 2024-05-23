import React from "react";

const IpTvDreamlinkPage = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1140px]">
        <h2 className="text-3xl p-[10px] px-5 lg:text-[45px] leading-10 border-b border-[#FDF7FB1A] mb-[60px] flex  items-center justify-center mx-auto font-semibold Inter text-[#FFFFFF] min-h-[250px]">
          {" "}
          Install IPTV on your Dreamlink (Dreamonline Player)
        </h2>

        <div className="p-[10px]">
          <div className="text-xl px-5 font-normal Inter text-[#ECECEC] text-justify ">
            <p className="mb-4">
              The Dreamlink T1 and T2&nbsp; are devices that grant access
              to&nbsp;<strong>IPTV channels</strong>. They include a user
              interface based on the Stalker Middleware, an interface that is
              intended to convert these online channels into a menu from which
              you can simply select which channel you require to watch.
            </p>

            <p className="mb-4">
              Basically, these merchandises make it simpler for you to see the
              numerous channels that are on offer and pick whichever one catches
              your imagination. The user interface also includes a web browser,
              video player, and a mixture of other apps.
            </p>

            <p className="mb-4">
              In order to add channels to your Dreamlink device, follow the
              below steps:
            </p>

            <h4 className="mb-4">STEP 1:</h4>

            <p className="mb-4">
              From the main page, go to “<strong>My Apps</strong>“.
            </p>

            <figure className="mb-4">
              <img decoding="async" src="/images/dreamlink9.png" alt="" />
            </figure>

            <h4 className="mb-4">STEP 2:</h4>

            <p className="mb-4">
              Select DreamOnline (DOL 2).
              <br />
              Note, If the DreamOnline (<strong>DOL2)</strong>&nbsp;app is not
              in the My apps folder go to the Market folder, find DreamOnline (
              <strong>DOL2</strong>) and install&nbsp;it. After that, it will
              appear in the My apps folder/
            </p>

            <figure className="mb-4">
              <img decoding="async" src="/images/dreamlink8.png" alt="" />
            </figure>

            <h4 className="mb-4">STEP 3:</h4>

            <p className="mb-4">
              Now select “<strong>Edit Service</strong>” and then click on “
              <strong>Click Edit</strong>“. <br /> <strong>Important</strong>:
              Be sure you register&nbsp;on (
              <strong>Server Operator Homepage</strong>) with your right MAC
              Address (if necessary).
            </p>

            <figure className="mb-4">
              <img decoding="async" src="/images/dreamlink7.png" alt="" />
            </figure>

            <h4 className="mb-4">STEP 4:</h4>

            <p className="mb-4">Enter Service Nickname (Any name).</p>

            <figure className="mb-4">
              <img decoding="async" src="/images/dreamlink6.png" alt="" />
            </figure>

            <h4 className="mb-4">STEP 5:</h4>

            <p className="mb-4">
              Enter the IPTV Server URL (<strong>Portal URL</strong>) you get
              from your IPTV service provider.
            </p>

            <figure className="mb-4">
              <img decoding="async" src="/images/dreamlink5.png" alt="" />
            </figure>

            <h4 className="mb-4">STEP 6:</h4>

            <p className="mb-4">
              It is&nbsp;<strong>NOT</strong>&nbsp;necessary to enter the&nbsp;
              <strong>Username</strong>&nbsp;and&nbsp;
              <strong>Password.</strong>
            </p>

            <figure className="mb-4">
              <img decoding="async" src="/images/dreamlink4.png" alt="" />
            </figure>

            <h4 className="mb-4">STEP 7:</h4>

            <p className="mb-4">
              Click “<strong>OK</strong>“.
            </p>

            <figure className="mb-4">
              <img decoding="async" src="/images/dreamlink3.png" alt="" />
            </figure>

            <h4 className="mb-4">STEP 8:</h4>

            <p className="mb-4">
              Connecting to IPTV Server (with your registered data) in progress.
            </p>

            <figure className="mb-4">
              <img decoding="async" src="/images/dreamlink2.png" alt="" />
            </figure>

            <h4 className="mb-4">STEP 9:</h4>

            <p className="mb-4">
              Successful Connection! You receive all channels associated with
              your account.
            </p>

            <figure className="mb-10">
              <img decoding="async" src="/images/dreamlink1.png" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default IpTvDreamlinkPage;
