import React from "react";

import { NavbarTemp2 } from "../../Components/Temp2/NavbarTemp2/NavbarTemp2";
import PackagesSectionTemp2 from "../../Components/Temp2/PackagesSectionTemp2/PackagesSectionTemp2";
import FooterTemp2 from "../../Components/Temp2/FooterTemp2/FooterTemp2";
import FaqsTemp2 from "../../Components/Temp2/FaqsTemp2/FaqsTemp2";

const Temp2 = () => {
  return (
    <>
      <div className="Temp">
        <NavbarTemp2 />
        <PackagesSectionTemp2 />
        <FaqsTemp2 />
        <FooterTemp2 />
      </div>
    </>
  );
};

export default Temp2;
