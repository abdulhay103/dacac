import Image from "next/image";
import React from "react";
import heroImage from "/public/home/hero-image.png";
import heroImage2 from "/public/home/hero-image-2.png";
import heroImage3 from "/public/home/hero-image-3.png";
import Link from "next/link";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

export default function Hero() {
    return (
        <div className="pt-20 bg-gradient-to-br from-cyan-50 to-deep-purple-100">
            <div className=" container">
                <div className=" flex justify-between">
                    <div className="py-20 lg:pt-32 2xl:pt-36 w-full lg:w-[600px]">
                        <div className=" w-full">
                            <div className=" flex gap-2">
                                <span className=" bg-blue-500 px-2"></span>
                                <h5 className=" uppercase text-light-blue-700">
                                    welcome to dacac
                                </h5>
                            </div>
                            <h1 className=" text-[40px] lg:text-[62px] py-3 leading-normal">
                                Angels grew with{" "}
                                <span className=" text-deep-orange-700 underline underline-offset-8 pr-5">
                                    Special
                                </span>
                                Education
                            </h1>
                            <p className=" text-gray-800">
                                Dream Angels Centre for Autistic Children
                                (DACAC) is a specialized centre for physically
                                and mentally challenged children.
                            </p>
                        </div>
                        <div className=" mt-20 flex gap-16 items-center">
                            <Link
                                href="#"
                                className=" px-10 py-4 bg-deep-orange-500 rounded-full text-xl font-semibold text-white uppercase border-2 border-deep-orange-500 hover:bg-white hover:text-deep-orange-600 transition-all"
                            >
                                Learn more
                            </Link>
                            <div className="w-20 h-20 relative flex">
                                <div className=" w-full h-full animate-ping bg-[#3d525c] rounded-full absolute"></div>
                                <div className=" absolute w-14 h-14 top-3 left-3 bg-white rounded-full"></div>
                                <Link href="#" className=" absolute">
                                    <PlayCircleIcon className=" w-20 h-20 text-[#3d525c] hover:text-deep-orange-600 transition-all" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className=" hidden lg:block w-[450px]">
                        <Image
                            src={heroImage3}
                            width="auto"
                            height="auto"
                            className=" object-cover"
                            alt="hero Image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
