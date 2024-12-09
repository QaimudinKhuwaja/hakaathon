




import React from "react";
import Image from "next/image";
import girl from '../assets/girl.jpg'
const HeroSection = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Full Screen Image */}
      <div className="relative w-full h-full">
        <Image
          src={girl} // Replace with your image URL
          alt="Hero Image"
          width={1500} // Width of the image
          height={1000} // Height of the image
          objectFit="cover" // Ensures the image covers the container
          className=" object-cover"
        />
      </div>

      {/* Text on top of the image */}
      <div className="absolute left-0 top-0 ml-[90px] mt-[140px] p-6 md:p-12 z-10 text-white flex items-start justify-start h-full w-full">
        <div className="space-y-4 ml-12 mt-12"> {/* Adjusted to move text to the right and down */}
          <p className="text-[18px] ">SUMMER 2022</p>
          <h1 className="text-[40px] sm:text-4xl md:text-5xl font-bold pt-[13px] ">
          NEW COLLECTION
          </h1>
          <p className="pt-[13px] text-[20px] max-w-xs sm:max-w-md md:max-w-lg">
          We know how large objects will act, <br />
          but things on a small scale.          </p>
          <button className="mt-6 px-6 py-3 pt-[17px] bg-[#2DC071] text-white font-semibold w-[200px] h-[50px] rounded-lg hover:bg-blue-600">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
