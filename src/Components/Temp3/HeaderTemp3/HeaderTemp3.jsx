import React from "react";

const Header = () => {
  return (
    <>
      <div className=" QuickSand">
        <div className="max-w-[1140px] container mx-auto">
          <div className="flex items-center h-[60px]  text-white justify-between py-4 px-8">
            <div>
              <h1 className="text-[30px] font-bold leading-8">LOGO</h1>{" "}
            </div>
            <div className="xl:block hidden">
              <button className="py-3  px-6 bg-[#0085FF] text-[#FFFFFF] text-[15px] flex items-center justify-center font-bold rounded-md max-h-10">
                Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
