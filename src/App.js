import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Template3/Home";
import Temp2 from "./pages/Template2/Temp2";
import Temp1 from "./pages/Template1/Temp1";
import Copyright from "./pages/Copyright/Copyright";
import Rerturnpolicy from "./pages/Rerturnpolicy/Rerturnpolicy";
import Terms from "./pages/Terms/Terms";
import ContactUs from "./pages/ContactUs/ContactUs";
import Tutorial from "./pages/Tutorial/Tutorial";
import IpTvAndriod from "./pages/IpTvAndriod/IpTvAndriod";
import IpTvDreamlink from "./pages/IpTvDreamlink/IpTvDreamlink";
import IpTvIphone from "./pages/IpTvIphone/IpTvIphone";
import IpTvWindows from "./pages/IpTvWindows/IpTvWindows";
import IptvAmazon from "./pages/IptvAmazon/IptvAmazon";
import IpTvSamsung from "./pages/IpTvSamsung/IpTvSamsung";
import IpTvStbEmu from "./pages/IpTvStbEmu/IpTvStbEmu";
import IpTvFormuler from "./pages/IpTvFormuler/IpTvFormuler";
import IpTvMaag from "./pages/IpTvMaag/IpTvMaag";
import IpTvEnigma from "./pages/IpTvEnigma/IpTvEnigma";
import IpTvSveriges from "./pages/IpTvSveriges/IpTvSveriges";
import IpTvAmazonFire from "./pages/IpTvAmazonFire/IpTvAmazonFire";
import ITvFireStick from "./pages/ITvFireStick/ITvFireStick";
function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
       <Route path="/" element={<Temp1/>} />    
       <Route path="/Template2" element={<Temp2/>} />   
       <Route path="/Template3" element={<Home/>} />   
       <Route path="//terms-of-sale" element={<Terms/>} />   
       <Route path="/rerturn-policy" element={<Rerturnpolicy/>} />   
       <Route path="/copyrighted-content" element={<Copyright/>} />   
       <Route path="/contact-us" element={<ContactUs/>} />   
       <Route path="/tutorial" element={<Tutorial/>} />   
       <Route path="/install-iptv-on-your-amazon-fire-tv-stick-iptv-smarters-player" element={<IptvAmazon/>} />   
       <Route path="/install-iptv-on-your-android-smartphone-box-tv-iptv-smarters-player" element={<IpTvAndriod/>} />   
       <Route path="/install-iptv-on-your-dreamlink-dreamonline-player" element={<IpTvDreamlink/>} />   
       <Route path="/install-iptv-on-your-iphone-apple-tv-iptv-smarters-app" element={<IpTvIphone/>} />   
       <Route path="/install-iptv-on-your-windows-pc-vlc-player" element={<IpTvWindows/>} />   
       <Route path="/install-iptv-on-your-samsung-lg-smart-tv-iptv-smarters-pro" element={<IpTvSamsung/>} />   
       <Route path="/stbemu-pro-the-major-iptv-app-for-smart-tvs-how-to-install" element={<IpTvStbEmu/>} />   
       <Route path="/install-iptv-on-your-formuler-box-device-mytv-online-player" element={<IpTvFormuler/>} />   
       <Route path="/install-iptv-on-your-mag-device" element={<IpTvMaag/>} />   
       <Route path="/install-iptv-on-your-enigma2-dreambox-vu" element={<IpTvEnigma/>} />   
       <Route path="/sveriges-snabbaste-iptv-2024" element={<IpTvSveriges/>} />   
       <Route path="/install-iptv-on-your-amazon-fire-tv-stick" element={<IpTvAmazonFire/>} />   
       <Route path="/install-set-up-on-firestick-android-tv-box-tivimate-iptv-player" element={<ITvFireStick/>} />   
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
