"use client";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Breadcrumbs } from "@material-tailwind/react";
import bradeCumpImage from "/public/others/breadcrumb_bg_img.png";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function SectionHeader(props) {
    return (
        <div className=" bg-gradient-to-br from-cyan-50 to-purple-50">
            <div className="container flex justify-between pt-28">
                <div className=" w-full xl:pt-14 xl:pl-40">
                    <h2 className=" lg:pb-2 text-gray-800 inline-block capitalize text-3xl lg:text-5xl">
                        {props.title}
                    </h2>
                    <Breadcrumbs
                        separator={
                            <ArrowLongRightIcon className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" />
                        }
                    >
                        <Link href="/" className="opacity-60">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 lg:w-6"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                        </Link>
                        <Link
                            href={`/${props.pathName}`}
                            className=" text-lg text-deep-orange-500"
                        >
                            {props.pathName}
                        </Link>
                        {/* {props.details && (
                            <Link
                                href="#"
                                className=" text-lg text-deep-orange-500"
                            >
                                {props.details}
                            </Link>
                        )} */}
                    </Breadcrumbs>
                </div>
                <div className=" w-64 xl:w-[400px] 2xl:w-[500px]">
                    <Image
                        src={bradeCumpImage}
                        height="auto"
                        width="auto"
                        alt="Brade-Cump-image"
                    />
                </div>
            </div>
        </div>
    );
}
