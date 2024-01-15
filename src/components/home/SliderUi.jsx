"use client";
import { Carousel } from "@material-tailwind/react";
import SltService from "../../../public/slider/slt-service.png";
import PtService from "../../../public/slider/pt-service.png";
import TeachingService from "../../../public/slider/teaching-service.png";
import Image from "next/image";
import Link from "next/link";

export function SliderUi() {
    return (
        <div className=" h-60 xl:h-[500px] 2xl:h-[650px]">
            <Carousel
                autoplay={true}
                loop={true}
                autoplayDelay={6000}
                transition={{ type: "tween", duration: "1" }}
                className=""
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                    activeIndex === i
                                        ? "w-8 bg-white"
                                        : "w-4 bg-white/50"
                                }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
            >
                <div className=" w-full xl:h-full relative">
                    <Image
                        src={SltService}
                        width="1920"
                        height="500"
                        alt="Medical Equpment"
                        className=" h-full w-full object-cover"
                    />
                    <div className=" min-h-full flex justify-start items-center inset-0 absolute left-14 bottom-10">
                        <Link
                            className=" px-6 py-2 xl:px-10 xl:py-3 xl:text-lg xl:ml-16 2xl:ml-28 xl:mt-44 2xl:mt-56 font-bold text-deep-orange-500 rounded-full hover:shadow-md bg-white mt-20"
                            href="/products/1"
                        >
                            Explore the Service
                        </Link>
                    </div>
                </div>
                <div className="w-full xl:h-full relative">
                    <Image
                        src={PtService}
                        width="1920"
                        height="500"
                        alt="Gynee Equpment"
                        className=" h-full w-full object-cover"
                    />
                    <div className=" min-h-full flex justify-start items-center inset-0 absolute left-14 bottom-10">
                        <Link
                            className=" px-6 py-2 xl:px-10 xl:py-3 xl:text-lg xl:ml-16 2xl:ml-28 xl:mt-44 2xl:mt-56 font-bold text-deep-orange-500 rounded-full hover:shadow-md bg-white mt-20"
                            href="/products/2"
                        >
                            Explore the Service
                        </Link>
                    </div>
                </div>
                <div className="w-full xl:h-full relative">
                    <Image
                        src={TeachingService}
                        width="1920"
                        height="500"
                        alt="Physio Equpment"
                        className=" h-full w-full object-cover"
                    />
                    <div className=" min-h-full flex justify-start items-center inset-0 absolute left-14 bottom-10">
                        <Link
                            className=" px-6 py-2 xl:px-10 xl:py-3 xl:text-lg xl:ml-16 2xl:ml-28 xl:mt-44 2xl:mt-56 font-bold text-deep-orange-500 rounded-full hover:shadow-md bg-white mt-20"
                            href="/products/3"
                        >
                            Explore the Service
                        </Link>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}
