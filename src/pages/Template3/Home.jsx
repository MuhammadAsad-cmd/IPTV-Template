import React from "react";
import Header from "../../Components/Temp3/HeaderTemp3/HeaderTemp3";
import { Navbar } from "../../Components/Temp3/NavbarTemp3/NavbarTemp3";
import PackagesSection from "../../Components/Temp3/PackagesSectionTemp3/PackagesSectionTemp3";
import Footer from "../../Components/Temp3/FooterTemp3/FooterTemp3";
import Faqs from "../../Components/Temp3/FaqsTemp3/FaqsTemp3";

const Home = () => {
  return (
    <>
      <div className="Temp3">
        <Header />
        <Navbar />
        <PackagesSection />
        <Faqs />
        <Footer />
      </div>
    </>
  );
};

export default Home;
