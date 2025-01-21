"use client"
import React from "react";
import Image from "next/image";
import { useState } from 'react'
import Link from "next/link";
import heart from '../assets/heart.png'
import shoping from '../assets/shoping.png'
import search from '../assets/search.png'





const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State to control mobile menu toggle

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);  // Toggle the menu open/close
  };
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="max-w-screen-xl mx-auto items-center justify-around flex-wrap   ">
        <div className="flex justify-between">  
        {/* Left Side: Bandage */}
        <div className="text-[24px]  font-semibold flex-shrink-0">
          QAFIX
        </div>
           {/* Mobile Menu Toggle */}
           <div className="md:hidden block lg:hidden items-center">   
             <button onClick={handleMenuToggle} className="text-black focus:outline-none">
            {/* Hamburger icon */}
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        </div>
        {/* Center: Links */}
        <div className=" space-x-5 flex-wrap justify-center hidden lg:block md:block lg:pl-[400px] md:pl-[200px]">
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
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center py-4 bg-white h-[330px] ">
          <ul className="text-black flex flex-col gap-4 font-[500] text-[18px]">
            <Link href="/" className="text-[#737373] hover:text-blue-500 py-2"> <li onClick={() => setIsMenuOpen(false)}> Home </li></Link>
          <Link href="./shop" className="text-[#737373] hover:text-blue-500 py-2"><li onClick={() => setIsMenuOpen(false)}> Shop </li> </Link>
          <Link href="./about" className="text-[#737373] hover:text-blue-500 py-2"><li onClick={() => setIsMenuOpen(false)}> About </li> </Link>
          <Link href="./team" className="text-[#737373] hover:text-blue-500 py-2"><li onClick={() => setIsMenuOpen(false)}> Team </li></Link>
          <Link href="./contact" className="text-[#737373] hover:text-blue-500 py-2"><li onClick={() => setIsMenuOpen(false)}> Contact </li></Link>
          <Link href="./pricing" className="text-[#737373] hover:text-blue-500 py-2"><li onClick={() => setIsMenuOpen(false)}> Pricing </li></Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
