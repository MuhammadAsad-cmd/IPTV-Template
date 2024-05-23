import React from "react";
import { Link } from "react-router-dom";

const HeaderOne = () => {
  return (
    <>
      <div className="bg-[#121212] QuickSand">
        <div className="max-w-[1140px] container mx-auto">
          <div className="flex items-center max-h-[85px]  text-white justify-between py-4 px-8">
            <div>
              <Link to="/">
                <h1 className="text-[30px] font-bold leading-8">LOGO</h1>{" "}
              </Link>
            </div>
            <div className="flex gap-4 items-center justify-center">
              <Link to="/tutorial">
                <button className="py-4 px-[30px] font-bold text-[#ffffff] border-2 border-white flex items-center justify-center  rounded-full max-h-[50px]">
                  Tutorial
                </button>
              </Link>
              <div className="xl:block hidden">
                <button className="py-3 px-6 bg-[#FF5C00] text-[#121212] flex items-center justify-center font-bold rounded-3xl max-h-10">
                  Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderOne;
