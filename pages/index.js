import Navbar from "../components/Navbar/Navbar";
import HeroHeader from "../components/HeroHeader/HeroHeader";
import Cards from "../components/Cards/cards";
import Image from "next/image";
import Footer from "../components/Footer/footer";

const Home = () => {
  const cardsDataArr = [
    {
      img: "/images/beauty_girl1.png",
      title: "What Is Glow. Beauty Is Life.",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren no seaging.",
    },
    {
      img: "/images/beauty_girl2.png",
      title: "What Is Glow. Beauty Is Life.",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren no seaging.",
    },
  ];

  return (
    <div className="container mx-auto">
      <Navbar />
      <HeroHeader />
      <div className="work_container flex justify-center items-center flex-col md:block w-full h-full pl-4 pb-12 md:pt-4 md:pb-16  md:pr-80 md:pl-16">
        <h1 className="md:text-[50px] text-[30px] text-MSecondary1 font-SemiBold">
          How It Work?
        </h1>
        <div className="grid md:grid-cols-3 pt-12 grid-cols-1">
          <div>
            <div className="bg-[#FFECC7] rounded-full w-24 h-24 flex justify-center items-center">
              <Image
                src="/images/work_1.png"
                width={50}
                height={50}
                layout="intrinsic"
              />
            </div>
            <p className="md:text-[20px] text-[18px] font-bold font-Poppins text-MSecondary2 pb-4 pt-4">
              Choose A Partner
            </p>
            <p className="md:text-[18px] text-[16px] font-normal text-[#244162] md:w-2/3 w-full md:p-0 pb-4">
              Introduction and kick-off meeting checklist. Lorem ispumdolor sit
              amet.
            </p>
          </div>
          <div>
            <div className="bg-[#FFECC7] rounded-full w-24 h-24 flex justify-center items-center">
              <Image
                src="/images/work_2.png"
                width={50}
                height={50}
                layout="intrinsic"
              />
            </div>
            <p className="md:text-[20px] text-[18px] font-bold font-Poppins text-MSecondary2 pb-4 pt-4">
              Started Conversation
            </p>
            <p className="md:text-[18px] text-[16px] font-normal text-[#244162] md:w-2/3 w-full md:p-0 pb-4">
              Introduction and kick-off meeting checklist. Lorem ispumdolor sit
              amet.
            </p>
          </div>
          <div>
            <div className="bg-[#FFECC7] rounded-full w-24 h-24 flex justify-center items-center">
              <Image
                src="/images/work_3.png"
                width={50}
                height={50}
                layout="intrinsic"
              />
            </div>
            <p className="md:text-[20px] text-[18px] font-bold font-Poppins text-MSecondary2 pb-4 pt-4">
              Start Dating
            </p>
            <p className="md:text-[18px] text-[16px] font-normal text-[#244162] md:w-2/3 w-full md:p-0 pb-4">
              Introduction and kick-off meeting checklist. Lorem ispumdolor sit
              amet.
            </p>
          </div>
        </div>
      </div>
      <Cards
        title={cardsDataArr[0].title}
        descriptions={cardsDataArr[0].description}
        img={cardsDataArr[0].img}
      />
      <div className="w-full h-full md:mt-24 md:mb-24 mt-12 mb-12">
        <div className="grid md:grid-cols-2 grid-cols-1 bg-beautySection bg-no-repeat bg-center bg-cover md:p-12 p-4 pb-8">
          <div className="w-full h-full">
            <Image
              layout="responsive"
              width="100%"
              height="60%"
              src="/images/beauty_girl3.png"
            />
          </div>
          <div className="md:pl-24 md:pt-0 pt-4">
            <span className="text-MPrimary2 text-[21px] font-normal font-Poppins">
              - Perfect Quality
            </span>
            <h2 className="font-bold md:text-[70px] text-[25px] font-Nunito text-[#fff] md:leading-[80px] leading-10 ">
              What Is <span className="text-MPrimary2">Glow</span>. Beauty Is
              Life.
            </h2>
            <p className="text-[18px] font-Poppins font-normal text-[#BDC5D1] md:w-11/12 w-full">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. <br />
              <br />
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </div>
        </div>
      </div>
      <Cards
        title={cardsDataArr[1].title}
        descriptions={cardsDataArr[1].description}
        img={cardsDataArr[1].img}
      />
      <div className="w-full h-full">
        <div className="grid md:grid-cols-4 md:p-0 pl-4 pr-4 mt-12 md:pl-24 md:pr-24">
          <div className="col-span-1 flex justify-start md:block hidden">
            hello
          </div>
          <div className="text-center col-span-2">
            <span className="text-[16px] font-Poppins font-normal text-MPrimary2">
              TESTIMONIALS
            </span>
            <h2 className="md:text-[70px] text-[25px] font-bold text-[#2A486C] font-Nunito ">
              Our Client Reviews
            </h2>
            <p className="text-[#8C98A9] text-[16px] font-Poppins font-normal md:w-7/12 w-full m-auto">
              Our wide-ranging services help our clients to take a leap to
              success in matter of days.
            </p>
          </div>
          <div className="col-span-1 flex justify-end md:block hidden">
            hello
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-3 md:pl-8 md:pr-8 pl-4 pr-4 pt-8 pb-24 grid-cols-1">
          <div className="bg-[#E7EAF0] h-64 p-10 border-b-4 border-[#2A486C]">
            <p className="text-MPrimary2 text-[20px] font-Poppins font-bold">
              Extremely Easy
            </p>
            <p className="pt-2 text-[#8D8D9B] text-[14px] font-Poppins font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="pt-4 w-2/5 text-[#2A486C] text-[16px] font-Poppins font-normal">
              GREGORIO S, New York
            </p>
          </div>
          <div className="bg-[#2A486C] h-64 p-10 border-b-4 border-MPrimary1">
            <p className="text-white font-bold text-[20px] font-Poppins">
              Extremely Easy
            </p>
            <p className="pt-2 text-[#8D8D9B] text-[14px] font-Poppins font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="pt-4 w-2/5 text-white text-[16px] font-Poppins font-normal">
              GREGORIO S, New York
            </p>
          </div>
          <div className="bg-[#E7EAF0] h-64 p-10 border-b-4 border-[#2A486C]">
            <p className="text-MPrimary2 text-[20px] font-Poppins font-bold">
              Extremely Easy
            </p>
            <p className="pt-2 text-[#8D8D9B] text-[14px] font-Poppins font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="pt-4 w-2/5 text-[#2A486C] text-[16px] font-Poppins font-normal">
              GREGORIO S, New York
            </p>
          </div>
          <div className="bg-[#E7EAF0] h-64 p-10 border-b-4 border-[#2A486C]">
            <p className="text-MPrimary2 text-[20px] font-Poppins font-bold">
              Extremely Easy
            </p>
            <p className="pt-2 text-[#8D8D9B] text-[14px] font-Poppins font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="pt-4 w-2/5 text-[#2A486C] text-[16px] font-Poppins font-normal">
              GREGORIO S, New York
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
