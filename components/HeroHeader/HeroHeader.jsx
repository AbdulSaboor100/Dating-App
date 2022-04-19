import React from "react";
import Image from "next/image";

const HeroHeader = () => {
  return (
    <div className="bg-heroHeader1 bg-no-repeat bg-center bg-cover w-full h-full pb-64 overflow-hidden position-relative md:h-screen md:p-0">
      <div className="grid grid-cols-2 h-auto flex flex-col">
        <div className="md:pt-52 md:pl-20 md:col-span-1 pt-36 pl-4 col-span-2 ">
          <h1 className="text-MPrimary1 font-Nunito md:text-7xl text-[25px] font-bold">
            Find Your Best Partner With Us!
          </h1>
          <p className="text-white md:text-[18px] text-[16px] font-Poppins pt-8 pb-12">
            We create experience that transform brands, grow business and make
            people live better. Let's create something special together.
          </p>
          <div>
            <button className="w-40 rounded h-12 outline-none shadow-md max-w-full min-h-full bg-MPrimary1 text-white">
              Get Started Now
            </button>
          </div>
        </div>
        <div className="w-full h-full mt-12 ml-32 md:block hidden">
          <Image
            src="/images/hero_bg2.svg"
            layout="responsive"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
