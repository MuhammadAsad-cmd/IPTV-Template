import React from "react";
import { HeroTemp1 } from "../../Components/Temp1/HeroTemp1/HeroTemp1";
import PackagesSectionTemp1 from "../../Components/Temp1/PackagesSectionTemp1/PackagesSectionTemp1";
import FaqsTemp1 from "../../Components/Temp1/FaqsTemp1/FaqsTemp1";
import FooterTemp1 from "../../Components/Temp1/FooterTemp1/FooterTemp1";
import HeaderOne from "../../Components/Temp1/HeaderOne/HeaderOne";

const Temp1 = () => {
  return (
    <>
      <div className="Temp1">
        <HeaderOne />
        <HeroTemp1 />
        <PackagesSectionTemp1 />
        <FaqsTemp1 />
        <FooterTemp1 />
      </div>
    </>
  );
};

export default Temp1;
