import React from "react";
import { Link } from "react-router-dom";

const FooterTemp1 = () => {
  return (
    <>
      {/* Footer */}
      <div className="bg-[#fafdf708] QuickSand mb-3">
        <div className="max-w-[1140px] container mx-auto">
          <div className="flex items-center max-h-20  text-[#DADADA] justify-between py-4 px-8">
            <div>
              <h1 className="text-base font-bold leading-8">LOGO© 2023</h1>{" "}
            </div>
            <div>
              <button className="py-3 px-6 bg-[#FF5C00] text-[#121212] flex items-center justify-center font-bold rounded-3xl max-h-10">
                Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1140px] container mx-auto">
        <div className="flex gap-4 text-white items-center max-h-[58px] py-5 justify-start px-8">
          <Link to="/terms-of-sale">
            <span className="text-xs">Terms of sale</span>
          </Link>

          <Link to="/rerturn-policy">
            <span className="text-xs">Return Policy</span>
          </Link>
          <Link to="/copyrighted-content">
            <span className="text-xs">Copyrighted Content</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FooterTemp1;
