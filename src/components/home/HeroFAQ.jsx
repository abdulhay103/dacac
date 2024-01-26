import Image from "next/image";
import sideImage from "/public/home/side-image.png";
import bgImage from "/public/home/bg-shape-1.png";
import { ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import CtaBtn from "../utils/CtaBtn";

export default function HeroFAQ() {
    return (
        <div className=" relative pt-20 2xl:pt-24 bg-[#f3f7fb] lg:bg-transparent h-[770px] lg:h-[800px] 2xl:h-[1050px]">
            <Image
                src={bgImage}
                className=" absolute hidden lg:block object-cover"
                width="1920"
                height="auto"
                alt="bg-shape"
            />
            <div className=" container absolute pt-5 lg:pt-44 left-10 lg:right-10">
                <div className=" flex gap-20 2xl:gap-28">
                    <div className=" w-full xl:w-1/2 pt-20 2xl:pt-52">
                        <div className=" flex gap-2 items-center pb-2">
                            <div className=" w-3 h-3 bg-blue-500"></div>
                            <h5 className=" uppercase text-light-blue-700 px-2 font-normal">
                                who we are
                            </h5>
                        </div>
                        <div>
                            <h3 className="">
                                Our activities for physical and mental
                                development of special children by..
                            </h3>
                        </div>
                        <div className="pl-0 lg:pl-20 py-8">
                            <div className=" flex gap-3 pb-3">
                                <ShieldCheck
                                    size={24}
                                    className=" text-deep-orange-500"
                                />
                                <p>Monitoring regular student's development.</p>
                            </div>
                            <div className=" flex gap-3 pb-3">
                                <ShieldCheck
                                    size={24}
                                    className=" text-deep-orange-500"
                                />
                                <p>Ensure complete safety for students.</p>
                            </div>
                            <div className=" flex gap-3 pb-3">
                                <ShieldCheck
                                    size={24}
                                    className=" text-deep-orange-500"
                                />
                                <p>24/7 activity monitoring through CCTV</p>
                            </div>
                            <div className=" flex gap-3 pb-3">
                                <ShieldCheck
                                    size={24}
                                    className=" text-deep-orange-500"
                                />
                                <p>Regular parent counseling.</p>
                            </div>
                            <div className=" flex gap-3 pb-3">
                                <ShieldCheck
                                    size={24}
                                    className=" text-deep-orange-500"
                                />
                                <p>Uninterrupted power system.</p>
                            </div>
                        </div>
                        <div className=" w-full flex justify-center 2xl:-ml-24 pt-0 2xl:pt-5">
                            <CtaBtn href="/about" text="Learn more" />
                        </div>
                    </div>
                    <div className=" hidden lg:block lg:pl-10 lg:w-1/2 lg:pt-20 2xl:pt-36">
                        <div className=" lg:w-[450px] 2xl:w-[600px] lg:h-[450px] 2xl:h-[600px] rounded-full bg-blue-gray-500 border-[15px] border-white overflow-hidden">
                            <Image
                                src={sideImage}
                                width="auto"
                                height="auto"
                                className=" object-fill"
                                alt="side Image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
