import Image from "next/image";

const Cards = ({ img, title, descriptions }) => {
  return (
    <div className="w-full h-full">
      <div className="grid md:grid-cols-2 grid-cols-1 md:pr-8 md:pl-8 pr-4 pl-4 grid-flow-row">
        <div className="md:w-11/12 h-full">
          <Image src={img} width="100%" height="100%" layout="responsive" />
        </div>
        <div className="flex justify-center items-flex-start flex-col">
          <span className="text-MPrimary2 text-[21px] font-normal font-Poppins">
            - Perfect Quality
          </span>
          <h2 className="font-bold md:text-[70px] text-[25px] md:p-0 pt-4 font-Nunito text-[#545454] md:leading-[80px]">
            {/* What Is <span className="text-MPrimary2">Glow</span>. Beauty Is
            Life. */}
            {title}
          </h2>
          <p className="md:text-[18px] text-[14px] md:p-0 pb-8 font-Poppins font-normal text-[#686868]">
            {descriptions}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
