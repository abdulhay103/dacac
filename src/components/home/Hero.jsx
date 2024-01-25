import Image from "next/image";
import React from "react";
import heroImage3 from "/public/home/hero-image-3.png";
import Link from "next/link";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import CtaBtn from "../utils/CtaBtn";

export default function Hero() {
    return (
        <div className="pt-20 bg-gradient-to-br from-cyan-50 to-deep-purple-100">
            <div className=" container">
                <div className=" flex justify-between">
                    <div className="py-20 lg:pt-32 w-full lg:w-[600px]">
                        <div className=" w-full">
                            <div className=" flex gap-2 items-center">
                                <div className=" w-3 h-3 bg-blue-500"></div>
                                <h5 className=" uppercase text-light-blue-700">
                                    welcome to dacac
                                </h5>
                            </div>
                            <h1 className=" text-[40px] lg:text-[62px] py-3 leading-normal">
                                Angels grew with{" "}
                                <span className=" text-deep-orange-400 underline underline-offset-8 pr-5">
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
                        <div className=" mt-16 flex gap-10 lg:gap-16 items-center">
                            <CtaBtn
                                href="/"
                                text="learn more"
                                className=" text-xl"
                            />
                            <div className="w-16 h-16 relative flex">
                                <div className=" w-full h-full animate-ping bg-[#3d525c] rounded-full absolute"></div>
                                <div className=" absolute w-10 h-10 top-3 left-3 bg-white rounded-full"></div>
                                <Link href="#" className=" absolute">
                                    <PlayCircleIcon className=" w-16 h-16 text-[#3d525c] hover:text-deep-orange-600 transition-all" />
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
