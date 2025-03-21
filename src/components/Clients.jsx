import React, { useEffect } from "react";
import client1 from "../img/clients/client-1.png";
import client2 from "../img/clients/client-2.png";
import client3 from "../img/clients/client-3.png";
import client4 from "../img/clients/client-4.png";
import client5 from "../img/clients/client-5.png";
import client6 from "../img/clients/client-6.png";
import client7 from "../img/clients/client-7.png";
import client8 from "../img/clients/client-8.png";
import Marquee from "react-fast-marquee";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const Clients = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="py-20 bg-white">
      {/* Section Heading */}
      <h1 className="text-3xl font-bold text-center text-[#264653]">Clients</h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-[#2A9D8F] h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        Our Learners Work at Global Companies & Startups
      </p>

      {/* Static Logos for Large Screens */}
      <div className="hidden md:flex flex-wrap justify-center items-center gap-10">
        <img className="w-28" src={client1} alt="img1" />
        <img className="w-28" src={client2} alt="img2" />
        <img className="w-28" src={client3} alt="img3" />
        <img className="w-28" src={client4} alt="img4" />
        <img className="w-28" src={client5} alt="img5" />
        <img className="w-28" src={client6} alt="img6" />
        <img className="w-28" src={client7} alt="img7" />
        <img className="w-28" src={client8} alt="img8" />
      </div>

      {/* Animated Marquee for Mobile Screens */}
      <div className="md:hidden">
        <Marquee pauseOnHover="true" className="flex items-center">
          <img className="w-28 mr-10" src={client1} alt="img1" />
          <img className="w-28 mr-10" src={client2} alt="img2" />
          <img className="w-28 mr-10" src={client3} alt="img3" />
          <img className="w-28 mr-10" src={client4} alt="img4" />
          <img className="w-28 mr-10" src={client5} alt="img5" />
          <img className="w-28 mr-10" src={client6} alt="img6" />
          <img className="w-28 mr-10" src={client7} alt="img7" />
          <img className="w-28 mr-10" src={client8} alt="img8" />
        </Marquee>
      </div>
    </div>
  );
};

export default Clients;
