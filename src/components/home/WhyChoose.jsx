import React from "react";
import CtaBtn from "../utils/CtaBtn";
import classParty2 from "/public/home/class-party-2.jpg";
// import classParty1 from "/public/home/class-party.jpg";
import Image from "next/image";

export default function WhyChoose() {
  return (
    <div className="container">
      <div className=" relative h-[550px] lg:h-20 2xl:h-12 z-20">
        <div className=" bg-gradient-to-r from-deep-orange-400 h-[320px] to-blue-500 absolute w-full flex rounded-lg overflow-hidden">
          <div className=" w-2/12 bg-deep-orange-400 -skew-x-12"></div>
          <div className=" w-10/12 bg-blue-500 -skew-x-12"></div>
        </div>
        <div className=" absolute w-full bg-blue-500 lg:bg-transparent z-10 flex gap-8 flex-col p-4 lg:flex-row rounded-lg">
          <div className=" w-full lg:w-2/5 h-60 lg:h-72 z-20 bg-black rounded-lg overflow-hidden">
            <Image
              src={classParty2}
              width="auto"
              height="auto"
              className=" object-cover"
              alt="Class party"
            />
          </div>
          <div className=" w-full lg:w-2/5 flex flex-col justify-center pl-0 lg:pl-6">
            <h3 className=" text-white">Why Choose us!</h3>
            <p className=" text-white py-4">
              Choose us because we're not just educators; we're dream-builders,
              nurturing each child's unique potential with passion, innovation,
              and unwavering dedication.
            </p>
          </div>
          <div className=" w-full lg:w-1/5 flex items-center justify-center mb-10 lg:mb-0">
            <CtaBtn href="/" text="read more" className=" text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
