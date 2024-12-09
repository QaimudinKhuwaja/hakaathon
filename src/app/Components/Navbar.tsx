import React from "react";
import Image from "next/image";
import Link from "next/link";
import heart from '../assets/heart.png'
import shoping from '../assets/shoping.png'
import search from '../assets/search.png'





const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between flex-wrap">
        {/* Left Side: Bandage */}
        <div className="text-[24px]  font-semibold flex-shrink-0">
          Bandage
        </div>
      
        {/* Center: Links */}
        <div className="flex space-x-6 ml-10 flex-wrap justify-center md:ml-0 md:flex-nowrap w-full md:w-auto">
          <Link href="/" className="text-[#737373] hover:text-blue-500 py-2">Home </Link>
          <Link href="./shop" className="text-[#737373] hover:text-blue-500 py-2">Shop </Link>
          <Link href="./about" className="text-[#737373] hover:text-blue-500 py-2">About </Link>
          <Link href="./team" className="text-[#737373] hover:text-blue-500 py-2">Team </Link>
          <Link href="./contact" className="text-[#737373] hover:text-blue-500 py-2">Contact </Link>
          <Link href="./pricing" className="text-[#737373] hover:text-blue-500 py-2">Pricing </Link>
        </div>

        {/* Right Side: Login/Register and Logos */}
        <div className="flex items-center space-x-6 mt-4 md:mt-0">
          <Link href="#" className="text-[#23A6F0] hover:text-blue-500">Login/Register</Link>
          <div className="flex space-x-4">
          <Image src={search} alt='twiter'  />
            <Image src={shoping} alt='twiter'  />
            <Image src={heart} alt='twiter'  />
         
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
