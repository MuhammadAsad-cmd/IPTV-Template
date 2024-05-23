import React from "react";

const IpTvFormulerPage = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1140px]">
        <h2 className="text-3xl px-5 p-[10px] lg:text-[45px] leading-10 border-b border-[#FDF7FB1A] mb-[60px] flex  items-center justify-start mx-auto font-semibold Inter text-[#FFFFFF] min-h-[250px]">
          Install IPTV on your Formuler Box/Device (MyTV Online Player)​
        </h2>

        <div className="p-[10px] ">
          <div className="text-xl px-5 font-normal Inter text-[#ECECEC] text-justify ">
            <p className="mb-4">
              <strong>FormulerZ</strong>&nbsp;boxes are one of the best devices
              for watching IPTV. <br /> The most important advantage of
              FormulerZ boxes is supporting both MAC base&nbsp;
              <strong>Portal System</strong>&nbsp;and&nbsp;
              <strong>M3U</strong>&nbsp;base Playlist.
            </p>

            <p className="mb-4">
              <strong>FormulerZ8&nbsp;</strong>is the last version of Formuler
              boxes with&nbsp;<strong>MYTV Online 2</strong>&nbsp;application
              which support&nbsp;<strong>4K</strong>&nbsp;Ultra HD streaming, In
              this tutorial, we are going to show you how to bring IPTV channels
              to your MYTV Online 2 on&nbsp;FormulerZ8.
            </p>

            <p className="mb-4">
              This setup guide can be used for all models of Formuler
              devices/boxes:
            </p>

            <h4 className="mb-4">STEP 1:</h4>

            <p className="mb-4">
              Open the exclusive application for watching IPTV in Formuler
              boxes&nbsp;
              <strong>
                “MYTV Online 2”. <br />{" "}
              </strong>
              If you don’t have this application on your device you can download
              it from the&nbsp;<strong>Google Play</strong>
              &nbsp;store.
            </p>

            <figure className="mb-4">
              <img
                decoding="async"
                src="/images/8767-FormulerZ8-3.jpg"
                alt=""
              />
            </figure>

            <h4 className="mb-4">STEP 2:</h4>

            <p className="mb-4">
              You can see the box’s&nbsp;<strong>MAC</strong>&nbsp;in the top
              right of this page.
              <br />
              <strong>Please note</strong>, this MAC address must be given to
              your IPTV provider.
            </p>

            <p className="mb-4">
              Here you can see the two options, select&nbsp;
              <strong>“Add Portal”</strong>&nbsp;to set the device as a&nbsp;
              <strong>MAC based</strong>&nbsp;device like MAG boxes.
            </p>

            <figure className="mb-4">
              <img
                decoding="async"
                src="/images/8906-FormulerZ8-4.jpg"
                alt=""
              />
            </figure>

            <h4 className="mb-4">STEP 3:</h4>

            <p className="mb-4">
              Enter&nbsp;<strong>Portal&nbsp;Nickname</strong>&nbsp;(Example:
              MYIPTV). <br /> Enter IPTV&nbsp;<strong>Portal URL</strong>
              &nbsp;you get from your&nbsp;
              <strong>IPTV provider&nbsp;</strong>and click on
              <strong>&nbsp;“CONNECT”</strong>. You can ask for a portal URL
              from your IPTV service provider.
            </p>

            <figure className="mb-4">
              <img
                decoding="async"
                src="/images/8907-FormulerZ8-5.jpg"
                alt=""
              />
            </figure>

            <h4 className="mb-4">STEP 4:</h4>

            <p className="mb-10">
              Successful Connection! You receive all channels associated with
              your subscription <br /> Please note, this might take a little
              time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IpTvFormulerPage;
