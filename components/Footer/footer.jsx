const Footer = () => {
  return (
    <div className="w-full h-full">
      <div className="md:grid md:grid-cols-5 bg-blue-800 md:pl-32 md:pb-12 pb-4 md:pr-32 md:pt-32 pt-8 pr-4 pl-4">
        <div className="md:col-span-2">
          <p className="font-normal text-[15px] font-Poppins text-[#ffffff] md:w-9/12 w-full leading-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer See More...
          </p>
        </div>
        <div>
          <p className="font-bold text-[20px] font-Poppins text-MPrimary1 leading-8">
            OUR COMPANY
          </p>
          <p className="font-normal text-[15px] font-Poppins text-[#ffffff] leading-8">
            About Us
          </p>
          <p className="font-normal text-[15px] font-Poppins text-[#ffffff] leading-8">
            Features
          </p>
          <p className="font-normal text-[15px] font-Poppins text-[#ffffff] leading-8">
            How to Buy
          </p>
          <p className="font-normal text-[15px] font-Poppins text-[#ffffff] leading-8">
            Reviews
          </p>
        </div>
        <div>
          <p className="font-bold text-[20px] font-Poppins text-MPrimary1 leading-8">
            QUICK LINKS
          </p>
          <p className="font-normal text-[15px] font-Poppins text-[#ffffff] leading-8">
            Terms of Use
          </p>
          <p className="font-normal text-[15px] font-Poppins text-[#ffffff] leading-8">
            Cookie Policy
          </p>
          <p className="font-normal text-[15px] font-Poppins text-[#ffffff] leading-8">
            Privacy Policy
          </p>
          <p className="font-normal text-[15px] font-Poppins text-[#ffffff] leading-8">
            Reviews
          </p>
        </div>
        <div>
          <p className="font-bold text-[20px] font-Poppins text-MPrimary1 leading-8">
            CONTACT US
          </p>
          <p className="font-normal text-[15px] font-Poppins text-[#ffffff] leading-8">
            +1-855-888-4224
          </p>
          <p className="font-normal text-[15px] font-Poppins text-[#ffffff] leading-8">
            support@logoverge.com
          </p>
          <p className="font-normal text-[15px] font-Poppins text-[#ffffff] leading-8">
            10857 California State Route 2, Los Angeles, CA 90025
          </p>
        </div>
        <div className="w-full h-full border-t-2 border-red-400 col-span-5 mt-12 md:flex justify-between items-center text-center md:p-0 pt-4">
          <p className="font-Poppins text-[15px] leading-8 font-normal text-[#ffffff]">
            Copyrights © 2022 <span className="text-MPrimary2">Dating App</span>
            . All Rights Reserved
          </p>
          <p className="font-Poppins text-[15px] leading-8 font-normal text-[#ffffff]">
            Reviews | FAQ's | Privacy Policy | Terms & Conditions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
