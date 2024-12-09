import React from "react";
import Image from "next/image";
import twiter from '../assets/twiter.png'
import insta from '../assets/insta.png'
import youtube from '../assets/youtube.png'
import facebook from '../assets/facebook.png'




const Navbarr = () => {
  return (
    <nav className="bg-[#252B42] text-white p-4 h-[58px] ">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between space-x-4">
        {/* Left Side: Number and Email */}
        <div className="flex items-center space-x-4">
          <span className="text-sm">+1234567890</span>
          <span className="text-sm">example@email.com</span>
        </div>

        {/* Center Text */}
        <div className="flex-1 text-center hidden md:block">
          <span className="font-semibold">Follow Us  and get a chance to win 80% off</span>
        </div>

        {/* Right Side: Follow Us with small logos */}
        <div className="flex items-center space-x-4">
          <span className="text-sm">Follow Us:</span>
          <div className="flex space-x-2">
            <Image src={insta} alt='twiter'  />
            <Image src={youtube} alt='twiter'  />
            <Image src={facebook} alt='twiter'  />
            <Image src={twiter} alt='twiter'  />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbarr;

