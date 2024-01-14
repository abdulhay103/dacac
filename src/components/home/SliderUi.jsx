"use client";
import { Carousel } from "@material-tailwind/react";
import physioEquipment from "/public/products/Physio-Equipment.png";
import medicalEquipment from "/public/products/Medical-Equipment.png";
import gyneeEquipment from "/public/products/Gynee-Equipment.png";
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
                        src={medicalEquipment}
                        width="1920"
                        height="500"
                        alt="Medical Equpment"
                        className=" h-full w-full object-cover"
                    />
                    <div className=" min-h-full flex justify-start items-center inset-0 absolute left-14 bottom-10">
                        <Link
                            className=" px-6 py-2 xl:px-10 xl:py-3 xl:text-lg xl:ml-16 2xl:ml-28 xl:mt-44 2xl:mt-56 font-bold text-blue-500 rounded-full hover:shadow-md bg-white mt-20"
                            href="/products/1"
                        >
                            Explore Items
                        </Link>
                    </div>
                </div>
                <div className="w-full xl:h-full relative">
                    <Image
                        src={gyneeEquipment}
                        width="1920"
                        height="500"
                        alt="Gynee Equpment"
                        className=" h-full w-full object-cover"
                    />
                    <div className=" min-h-full flex justify-start items-center inset-0 absolute left-14 bottom-10">
                        <Link
                            className=" px-6 py-2 xl:px-10 xl:py-3 xl:text-lg xl:ml-16 2xl:ml-28 xl:mt-44 2xl:mt-56 font-bold text-blue-500 rounded-full hover:shadow-md bg-white mt-20"
                            href="/products/2"
                        >
                            Explore Items
                        </Link>
                    </div>
                </div>
                <div className="w-full xl:h-full relative">
                    <Image
                        src={physioEquipment}
                        width="1920"
                        height="500"
                        alt="Physio Equpment"
                        className=" h-full w-full object-cover"
                    />
                    <div className=" min-h-full flex justify-start items-center inset-0 absolute left-14 bottom-10">
                        <Link
                            className=" px-6 py-2 xl:px-10 xl:py-3 xl:text-lg xl:ml-16 2xl:ml-28 xl:mt-44 2xl:mt-56 font-bold text-blue-500 rounded-full hover:shadow-md bg-white mt-20"
                            href="/products/3"
                        >
                            Explore Items
                        </Link>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}
