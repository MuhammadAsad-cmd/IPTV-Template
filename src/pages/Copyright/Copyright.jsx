import React from "react";
import "../../Styles/Copyright.css";

const Copyright = () => {
  return (
    <>
      <div className="h-screen text-white w-full bg-black">
        <div className="max-w-[1140px] container mx-auto pt-[50px]">
          <div className="mb-5">
            <h1 className="text-[#E4DFDF] text-[40px] font-medium leading-10 text-center">
              Copyrighted Content
            </h1>
          </div>
          <div>
            <p className="mb-5">
              (We) iptvtemplate.shop are not responsible for selling any
              unauthorised content anywhere in the world, anyone who buys from
              us has the complete control and responsibility to what they use
              our templates and designs for. All pictures, Fonts designs used in
              our templates are just placeholders and are not for the final
              websites to go live with, we always require and ask buyers to
              change and update.
            </p>
            <p>
              we are not responsible for any unauthorised content being used in
              our templates after buyers purchase our templates.
            </p>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Copyright;
