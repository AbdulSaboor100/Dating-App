import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full h-full flex justify-evenly items-center bg-white pt-4 pb-4 hidden md:flex">
      <div>
        <h3 className="font-Constantia text-2xl font-bold opacity-100 cursor-pointer">
          {/* DATING <span className="text-[#FDCF80]">APP</span> */}
          <Image
            width={201}
            height={56}
            src="/images/logo.png"
            layout="intrinsic"
          />
        </h3>
      </div>
      <div className="flex text-[#244162]">
        <p className="pr-8 pl-8 cursor-pointer font-Poppins text-xl">Home</p>
        <p className="pr-8 pl-8 cursor-pointer font-Poppins text-xl">
          Overview
        </p>
        <p className="pr-8 pl-8 cursor-pointer font-Poppins text-xl">Blog</p>
        <p className="pr-8 pl-8 cursor-pointer font-Poppins text-xl">Gallery</p>
        <p className="pr-8 pl-8 cursor-pointer font-Poppins text-xl">Faq</p>
        <p className="pr-8 pl-8 cursor-pointer font-Poppins text-xl">
          Contact us
        </p>
      </div>
      <div className="w-40 bg-gradient-to-r from-MPrimary2 to-MPrimary1 text-white">
        <button className="w-full h-12 shadow-md max-w-full min-h-full border-2 border-white">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
