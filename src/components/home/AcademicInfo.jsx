import { Book } from "@phosphor-icons/react/dist/ssr";
import React from "react";

export default function AcademicInfo() {
    return (
        <div className=" py-14 lg:py-20 xl:py-32 2xl:py-36">
            <div className=" container">
                <div className=" w-full xl:w-1/2 mx-auto">
                    <div className=" flex gap-2 items-center justify-center pb-3">
                        <div className=" w-3 h-3 bg-blue-500"></div>
                        <h5 className=" uppercase text-light-blue-700 px-2 font-normal">
                            our academic activities
                        </h5>
                        <div className=" w-3 h-3 bg-blue-500"></div>
                    </div>
                    <div>
                        <h2 className=" text-center text-[28px] lg:text-[36px]">
                            Our successful procedures that are tailored to
                            special children.
                        </h2>
                    </div>
                </div>
                <div className=" grid grid-flow-row grid-cols-3 gap-10 pt-14 xl:pt-24">
                    <div className=" col-span-3 xl:col-span-1 flex flex-row items-center hover:text-white">
                        <div className="-mr-10 z-10 w-20 h-20 p-5 flex items-center justify-center bg-deep-purple-400 rounded-full">
                            <Book size={40} className=" text-white" />
                        </div>
                        <div className="px-10 py-6 bg-blue-50 rounded-md -skew-x-6 border-l-4 border-deep-purple-400 hover:bg-blue-400 transition-all">
                            <h4 className=" text-deep-purple-400">
                                Occupational Therapists
                            </h4>
                            <p className=" pl-3">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Fuga, libero temporibus.
                            </p>
                        </div>
                    </div>
                    <div className=" col-span-3 xl:col-span-1 flex flex-row items-center hover:text-white">
                        <div className="-mr-10 z-10 w-20 h-20 p-5 flex items-center justify-center bg-lime-600 rounded-full">
                            <Book size={40} className=" text-white" />
                        </div>
                        <div className="px-10 py-6 bg-blue-50 rounded-md -skew-x-6 border-l-4 border-lime-600 hover:bg-blue-400 transition-all">
                            <h4 className=" text-lime-600">
                                Speech & Language Therapists
                            </h4>
                            <p className=" pl-3">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Fuga, libero temporibus.
                            </p>
                        </div>
                    </div>

                    <div className=" col-span-3 xl:col-span-1 flex flex-row items-center hover:text-white">
                        <div className="-mr-10 z-10 w-20 h-20 p-5 flex items-center justify-center bg-deep-orange-400 rounded-full">
                            <Book size={40} className=" text-white" />
                        </div>
                        <div className="px-10 py-6 bg-blue-50 rounded-md -skew-x-6 border-l-4 border-deep-orange-400 hover:bg-blue-400 transition-all">
                            <h4 className=" text-deep-orange-400">
                                Modern supporting tools
                            </h4>
                            <p className=" pl-3">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Fuga, libero temporibus.
                            </p>
                        </div>
                    </div>
                    <div className=" col-span-3 xl:col-span-1 flex flex-row items-center hover:text-white">
                        <div className="-mr-10 z-10 w-20 h-20 p-5 flex items-center justify-center bg-deep-orange-400 rounded-full">
                            <Book size={40} className=" text-white" />
                        </div>
                        <div className="px-10 py-6 bg-blue-50 rounded-md -skew-x-6 border-l-4 border-deep-orange-400 hover:bg-blue-400 transition-all">
                            <h4 className=" text-deep-orange-400">
                                Pediatrician
                            </h4>
                            <p className=" pl-3">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Fuga, libero temporibus.
                            </p>
                        </div>
                    </div>
                    <div className=" col-span-3 xl:col-span-1 flex flex-row items-center hover:text-white">
                        <div className="-mr-10 z-10 w-20 h-20 p-5 flex items-center justify-center bg-deep-purple-400 rounded-full">
                            <Book size={40} className=" text-white" />
                        </div>
                        <div className="px-10 py-6 bg-blue-50 rounded-md -skew-x-6 border-l-4 border-deep-purple-400 hover:bg-blue-400 transition-all">
                            <h4 className=" text-deep-purple-400">
                                1:1 Teaching System
                            </h4>
                            <p className=" pl-3">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Fuga, libero temporibus.
                            </p>
                        </div>
                    </div>
                    <div className=" col-span-3 xl:col-span-1 flex flex-row items-center hover:text-white">
                        <div className="-mr-10 z-10 w-20 h-20 p-5 flex items-center justify-center bg-lime-600 rounded-full">
                            <Book size={40} className=" text-white" />
                        </div>
                        <div className="px-10 py-6 bg-blue-50 rounded-md -skew-x-6 border-l-4 border-lime-600 hover:bg-blue-400 transition-all">
                            <h4 className=" text-lime-600">Physiotherapist</h4>
                            <p className=" pl-3">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Fuga, libero temporibus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
